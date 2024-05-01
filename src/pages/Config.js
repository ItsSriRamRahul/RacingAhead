// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz9G2v9w4b3qxHFfgkfsPT2Omjr97zvvc",
  authDomain: "racing-ahead.firebaseapp.com",
  projectId: "racing-ahead",
  storageBucket: "racing-ahead.appspot.com",
  messagingSenderId: "133647037767",
  appId: "1:133647037767:web:481ebfda6f67e5b73b8862"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);
export { app,auth };