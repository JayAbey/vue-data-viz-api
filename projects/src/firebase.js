import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp(
//     {
//     apiKey: "AIzaSyAonaI7tGdcvDmOTmxr0qmAZyLlk2a9JDU",
//     authDomain: "vue-demo-project-74f1a.firebaseapp.com",
//     databaseURL: "https://vue-demo-project-74f1a.firebaseio.com",
//     projectId: "vue-demo-project-74f1a",
//     storageBucket: "vue-demo-project-74f1a.appspot.com",
//     messagingSenderId: "545214514297"
//   }
);

export const db = firebaseApp.database();