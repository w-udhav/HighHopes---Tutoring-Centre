import * as firebase from 'firebase/app'
import 'firebase/firestore'

// const firebaseConfig = {
//     apiKey: "AIzaSyDbON0QCOrluDsZT6RrbXEK2AhFfHopGwI",
//     authDomain: "tutorincentre.firebaseapp.com",
//     projectId: "tutorincentre",
//     storageBucket: "tutorincentre.appspot.com",
//     messagingSenderId: "261598866046",
//     appId: "1:261598866046:web:81fdaec2c7a3e89017462f"
// };

// firebase.initializeApp(firebaseConfig);

// export default firebase;



import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDbON0QCOrluDsZT6RrbXEK2AhFfHopGwI",
    authDomain: "tutorincentre.firebaseapp.com",
    projectId: "tutorincentre",
    storageBucket: "tutorincentre.appspot.com",
    messagingSenderId: "261598866046",
    appId: "1:261598866046:web:81fdaec2c7a3e89017462f"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

export { db };