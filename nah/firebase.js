import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCgMeg3R7L_nUKFFA12T01uC-8HAVWpb9o",
  authDomain: "uasdpm-d7601.firebaseapp.com",
  projectId: "uasdpm-d7601",
  storageBucket: "uasdpm-d7601.appspot.com",
  messagingSenderId: "600556672428",
  appId: "1:600556672428:web:b693838df466c1ecb35609"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db};