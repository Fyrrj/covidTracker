import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAvuSUNQ2qr3xvTVU3t9ctV_zlwnIrcXYo",
  authDomain: "covid19tracker-a521e.firebaseapp.com",
  databaseURL: "https://covid19tracker-a521e.firebaseio.com",
  projectId: "covid19tracker-a521e",
  storageBucket: "covid19tracker-a521e.appspot.com",
  messagingSenderId: "548521683010",
  appId: "1:548521683010:web:ae7878e5ab373df40025db",
  measurementId: "G-HZFF22SE6L",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
