
import { cert, initializeApp, } from 'firebase-admin/app';
const key = require('../wed-app.json')

const initializeFirebaseApp = async () => {
  try {
    initializeApp({
      credential: cert(key)
    })
  } catch (error) {
    console.log('ERROR FROM FIREBASE CONNECT', error)
  }
}


export {
  initializeFirebaseApp,
}