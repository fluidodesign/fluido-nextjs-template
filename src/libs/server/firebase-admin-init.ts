import firebaseAdmin, { ServiceAccount } from 'firebase-admin'
import credentials from 'app-config/firebase-admin-sdk.json'

if (!firebaseAdmin.apps || !firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(credentials as ServiceAccount),
    databaseURL: `https://${credentials.project_id}.firebaseio.com`,
  })
}

export default firebaseAdmin
