import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDsIC7ih6Lc10mtBiSNw9TwI3TdVzkYetc",
	authDomain: "quilleditor-7f317.firebaseapp.com",
	projectId: "quilleditor-7f317",
	storageBucket: "quilleditor-7f317.appspot.com",
	messagingSenderId: "671242309708",
	appId: "1:671242309708:web:5416bf0be47c18de22e4e9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;
