import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBXrBl2ODOXceXWSrmkIDTUrSF0tCi83vM",
  authDomain: "agendanext-f9d99.firebaseapp.com",
  projectId: "agendanext-f9d99",
  storageBucket: "agendanext-f9d99.appspot.com",
  messagingSenderId: "899995141378",
  appId: "1:899995141378:web:532f12447ef49eb02c2e1b"
};

if(!firebase.app.length){
    firebase.initializeApp(firebaseConfig)
}else{
    firebase.initializeApp(firebaseConfig)
}

const database = firebase.database()

export {database, firebase}

