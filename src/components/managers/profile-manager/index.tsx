import { useEffect } from 'react'
import { useState } from '@hookstate/core'
import { useRouter } from 'next/router'
import firebaseWeb, { FCM_KEY } from 'app-libs/client/firebase'
import { PUBLIC_ROUTE_MAP } from 'app-components/commons/constants'
import useProfile, { ProfileFCMToken } from 'app-hooks/profile'

interface ProfileManagerProps {}

const ProfileManager: React.FunctionComponent<ProfileManagerProps> = () => {
  const router = useRouter()

  // FCM config
  const FCMToken = useState(ProfileFCMToken)

  // Profile Provider
  const profile = useProfile()

  useEffect(() => {
    let metaRef: firebaseWeb.database.Reference

    const callback = (snapshot: firebaseWeb.database.DataSnapshot) => {
      profile.merge({
        loaded: true,
        claims: snapshot.val() || {},
      })
    }
    return firebaseWeb.auth().onAuthStateChanged((user) => {
      if (metaRef) {
        metaRef.off('value', callback)
        metaRef = null
      }

      profile.merge({
        logged: !!user,
        user,
      })

      if (user) {
        user.getIdToken(true).then((token) => {
          profile.merge({
            userToken: token,
          })
        })

        metaRef = firebaseWeb.database().ref(`users/${user.uid}/claims`)
        metaRef.on('value', callback)
      } else {
        profile.merge({
          loaded: true,
          userToken: null,
        })
      }
    })
  }, [process.browser])

  // Page blocker
  useEffect(() => {
    if (process.browser && profile.loaded.value) {
      if (
        !profile.logged.value &&
        !PUBLIC_ROUTE_MAP.includes(router.pathname)
      ) {
        router.replace('/login')
      }
    }
  }, [
    process.browser,
    profile.logged.value,
    profile.loaded.value,
    router.pathname,
  ])

  // FCM Loader
  useEffect(() => {
    if (process.browser && FCM_KEY) {
      FCMToken.set('loading')
      const messaging = firebaseWeb.messaging()
      messaging
        .getToken({ vapidKey: FCM_KEY })
        .then(async (token) => {
          if (token) {
            FCMToken.set(token)
          } else {
            FCMToken.set('required')
          }
        })
        .catch((err: Error) => {
          if (err.message.includes('permission-blocked')) {
            FCMToken.set('required')
          } else {
            console.log(err)
          }
          FCMToken.set('error')
        })
    }
  }, [process.browser, FCM_KEY])

  useEffect(() => {
    if (
      process.browser &&
      profile.logged.value &&
      profile.loaded.value &&
      FCMToken.value &&
      !['error', 'required', 'loading', 'waiting'].includes(FCMToken.value)
    ) {
      firebaseWeb
        .database()
        .ref(`users/${profile.user.value.uid}/fcm`)
        .set(FCMToken.value)
    }
  }, [
    process.browser,
    FCMToken.value,
    profile.logged.value,
    profile.loaded.value,
  ])

  return <></>
}

export default ProfileManager