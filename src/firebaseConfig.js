// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXZ3keLo5D92Abh7usGEGbxQeQv9p2jJM",
  authDomain: "todo-main-9087d.firebaseapp.com",
  projectId: "todo-main-9087d",
  storageBucket: "todo-main-9087d.appspot.com",
  messagingSenderId: "827561928904",
  appId: "1:827561928904:web:6ae2bfb6183e7dcf4e5dfd",
  measurementId: "G-XLT196ZTGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig