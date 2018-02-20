import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp(
    {
        apiKey: "AIzaSyD-vG5FIXvGc15_PuWtIX4plNqvo7EBFik",
        authDomain: "vue-group-project-yoobee-app.firebaseapp.com",
        databaseURL: "https://vue-group-project-yoobee-app.firebaseio.com",
        projectId: "vue-group-project-yoobee-app",
        storageBucket: "vue-group-project-yoobee-app.appspot.com",
        messagingSenderId: "421173856454"
    }
);

export const db = firebaseApp.database();