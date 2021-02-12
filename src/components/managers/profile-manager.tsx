import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import firebaseWeb from 'app-libs/client/firebase'
import ProfileContext from 'app-contexts/profile-context'
import { PUBLIC_ROUTE_MAP } from 'app-root/src/components/commons/constants'

export default function ProfileManager({ children }) {
  const router = useRouter()

  // FCM config
  // const [FCMToken, setFCMToken] = useState('loading')

  // Profile Provider
  const [profile, setProfile] = useState({
    loaded: false,
    logged: false,
    user: null,
    userToken: null,
    claims: null,
  })

  useEffect(() => {
    let metaRef

    function callback(snapshot) {
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
  // useEffect(() => {
  //   if (process.browser && profile.loaded) {
  //     if (profile.logged) {
  //       setFCMToken('loading')
  //       const messaging = firebaseWeb.messaging()
  //       messaging
  //         .getToken({ vapidKey: FCM_KEY })
  //         .then(async (token) => {
  //           if (token) {
  //             setFCMToken(token)
  //           } else {
  //             setFCMToken('required')
  //           }
  //         })
  //         .catch(
  //           /** @param {Error} err */
  //           (err) => {
  //             if (err.message.includes('permission-blocked')) {
  //               setFCMToken('required')
  //             } else {
  //               console.log(err)
  //             }
  //             setFCMToken('error')
  //           },
  //         )
  //     }
  //   }
  // }, [process.browser, profile.logged, profile.loaded])

  return (
    <ProfileContext.Provider value={profile}>
      {children}
    </ProfileContext.Provider>
  )
}
