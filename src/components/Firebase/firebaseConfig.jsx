import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0dLJph72GF-gifeGDr2bOQLLjYPPj7N4",
  authDomain: "first-firebase-auth-login-page.firebaseapp.com",
  databaseURL:
    "https://first-firebase-auth-login-page-default-rtdb.firebaseio.com",
  projectId: "first-firebase-auth-login-page",
  storageBucket: "first-firebase-auth-login-page.appspot.com",
  messagingSenderId: "356489065095",
  appId: "1:356489065095:web:dfbae8dc7f5b5d85c67e22",
  measurementId: "G-8Q004XTHF2",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };
