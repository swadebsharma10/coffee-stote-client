
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIeulYYqepTK2Bpd5XPRmrU751hMWg6_M",
  authDomain: "coffee-store-client-da519.firebaseapp.com",
  projectId: "coffee-store-client-da519",
  storageBucket: "coffee-store-client-da519.firebasestorage.app",
  messagingSenderId: "443458438383",
  appId: "1:443458438383:web:cbfc9f0f8059f1b9ee071a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;