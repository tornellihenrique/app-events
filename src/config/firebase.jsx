import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCRPing4oJ23OSyuO7jabiGvwVFEHHTy38",
    authDomain: "eventos-1fde7.firebaseapp.com",
    databaseURL: "https://eventos-1fde7.firebaseio.com",
    projectId: "eventos-1fde7",
    storageBucket: "eventos-1fde7.appspot.com",
    messagingSenderId: "1067041897863",
    appId: "1:1067041897863:web:2bab800d6e02dd2f6de722"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);