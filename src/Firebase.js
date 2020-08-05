import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBsx_sB5evBhk1rBHPMPvDi7NPl6dpozjI',
  authDomain: 'react-spas-11c65.firebaseapp.com',
  databaseURL: 'https://react-spas-11c65.firebaseio.com',
  projectId: 'react-spas-11c65',
  storageBucket: 'react-spas-11c65.appspot.com',
  messagingSenderId: '472159973846',
  appId: '1:472159973846:web:ceb98cb4a565678958f477',
  measurementId: 'G-GTJD6RTTGW',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default firebase
