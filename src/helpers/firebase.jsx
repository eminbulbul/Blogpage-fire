import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
  apiKey: "AIzaSyAgmpcIO9yPiFn9EKPLOyT6WU7ehfoBGfY",
  authDomain: "fire-blog-c45e3.firebaseapp.com",
  projectId: "fire-blog-c45e3",
  storageBucket: "fire-blog-c45e3.appspot.com",
  messagingSenderId: "1060643001330",
  appId: "1:1060643001330:web:e25513f7d0e5625899916b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    navigate("/login");
  } catch (error) {
    alert(error.message);
  }
};
export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    navigate("/");
  } catch (error) {
    alert(error.message);
  }
};
export const logOut = () => {
  signOut(auth);
  alert("Succesfully LogOut");
};
