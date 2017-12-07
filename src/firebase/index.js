import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyCYrt7a_SjPk-mbv7uSeRWPdzhrifhXbiY",
  authDomain: "errcadmin-92a5d.firebaseapp.com",
  databaseURL: "https://errcadmin-92a5d.firebaseio.com",
  projectId: "errcadmin-92a5d",
  storageBucket: "errcadmin-92a5d.appspot.com",
  messagingSenderId: "914800929162"
};
  let firebaseApp = Firebase.initializeApp(config);
  const db = firebaseApp.database()
  const auth = firebaseApp.auth()
  
  export default {db, auth}