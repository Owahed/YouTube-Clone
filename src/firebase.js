import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6_l6U6hWfTEozsuh38FSe2uWBy54Asd0",
  authDomain: "you-tube-clone-0909.firebaseapp.com",
  projectId: "you-tube-clone-0909",
  storageBucket: "you-tube-clone-0909.appspot.com",
  messagingSenderId: "735458020070",
  appId: "1:735458020070:web:155914ad8f64c6be6ec927",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
