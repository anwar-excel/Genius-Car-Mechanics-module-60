import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initiqalizeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initiqalizeAuthentication;