import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import firebaseWeb, { FCM_KEY } from 'app-libs/client/firebase'
import ProfileContext from 'app-contexts/profile-context'
import { PUBLIC_ROUTE_MAP } from 'app-root/src/components/commons/constants'

interface ProfileManagerProps {}

const ProfileManager: React.FunctionComponent<ProfileManagerProps> = ({
  children,
}) => {
  const router = useRouter()

  // FCM config
  const [FCMToken, setFCMToken] = useState<string>('waiting')

  // Profile Provider
  const [profile, setProfile] = useState({
    loaded: false,
    logged: false,
    user: null,
    userToken: null,
    claims: null,
  })

  useEffect(() => {
    let metaRef: firebaseWeb.database.Reference

    const callback = (snapshot: firebaseWeb.database.DataSnapshot) => {
      setProfile((p) => ({
        ...p,
        loaded: true,
        claims: snapshot.val() || {},
      }))
    }
    return firebaseWeb.auth().onAuthStateChanged((user) => {
      if (metaRef) {
        metaRef.off('value', callback)
        metaRef = null
      }

      setProfile((p) => ({
        ...p,
        logged: !!user,
        user,
      }))

      if (user) {
        user.getIdToken(true).then((token) => {
          setProfile((p) => ({
            ...p,
            userToken: token,
          }))
        })

        metaRef = firebaseWeb.database().ref(`users/${user.uid}/claims`)
        metaRef.on('value', callback)
      } else {
        setProfile((p) => ({
          ...p,
          loaded: true,
          userToken: null,
        }))
      }
    })
  }, [process.browser])

  // Page blocker
  useEffect(() => {
    if (process.browser && profile.loaded) {
      if (!profile.logged && !PUBLIC_ROUTE_MAP.includes(router.pathname)) {
        router.replace('/login')
      }
    }
  }, [process.browser, profile.logged, profile.loaded, router.pathname])

  // FCM Loader
  useEffect(() => {
    if (process.browser && FCM_KEY) {
      setFCMToken('loading')
      const messaging = firebaseWeb.messaging()
      messaging
        .getToken({ vapidKey: FCM_KEY })
        .then(async (token) => {
          if (token) {
            setFCMToken(token)
          } else {
            setFCMToken('required')
          }
        })
        .catch((err: Error) => {
          if (err.message.includes('permission-blocked')) {
            setFCMToken('required')
          } else {
            console.log(err)
          }
          setFCMToken('error')
        })
    }
  }, [process.browser, FCM_KEY])

  useEffect(() => {
    if (
      process.browser &&
      profile.logged &&
      profile.loaded &&
      FCMToken &&
      !['error', 'required', 'loading', 'waiting'].includes(FCMToken)
    ) {
      firebaseWeb.database().ref(`users/${profile.user.uid}/fcm`).set(FCMToken)
    }
  }, [process.browser, FCMToken, profile.logged, profile.loaded])

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileManager
