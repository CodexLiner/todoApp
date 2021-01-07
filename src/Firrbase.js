// const firebaseConfig = {
//     apiKey: "AIzaSyC3-9EiQE5Eq4fbbWXdU-08RW-X0pN_NXk",
//     authDomain: "todoapp-6613b.firebaseapp.com",
//     projectId: "todoapp-6613b",
//     storageBucket: "todoapp-6613b.appspot.com",
//     messagingSenderId: "533655816047",
//     appId: "1:533655816047:web:48d12c7504397783be0a9a"
//   };
  import firebase from"firebase"

  const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyA4ZdVxzIj2arw7NgoRvuf_fQOKPf6fqJM",
    authDomain: "ergotodo-88629.firebaseapp.com",
    projectId: "ergotodo-88629",
    storageBucket: "ergotodo-88629.appspot.com",
    messagingSenderId: "459190114940",
    appId: "1:459190114940:web:917bb79783f15c584c07f9",
    measurementId: "G-T3W18N5T84"
});
const  db = firebaseapp.firestore();
export default db;
