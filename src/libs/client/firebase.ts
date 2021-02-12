import firebaseWeb from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/messaging'
import 'firebase/analytics'

// Your web app's Firebase configuration
import firebaseConfig from 'app-root/firebase-web-sdk.json'

// Initialize Firebase
if (!firebaseWeb.apps || !firebaseWeb.apps.length) {
  firebaseWeb.initializeApp(firebaseConfig)
}

if (process.browser) {
  firebaseWeb.analytics()
  firebaseWeb.auth().useDeviceLanguage()
}

export default firebaseWeb

export const FCM_KEY = ''
