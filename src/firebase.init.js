import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBcEI2ntvj1aZ04ywpaU53BUoBNB5XLZBE",
    authDomain: "travel-guru-e6251.firebaseapp.com",
    projectId: "travel-guru-e6251",
    storageBucket: "travel-guru-e6251.appspot.com",
    messagingSenderId: "366045155380",
    appId: "1:366045155380:web:cd9d1f89ee541d3e6a3a61"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;