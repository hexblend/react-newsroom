import firebase from 'firebase';

const firebaseConfig = {
	apiKey: REACT_APP_API_KEY,
	authDomain: REACT_APP_AUTH_DOMAIN,
	databaseURL: REACT_APP_DATABASE_URL,
	projectId: REACT_APP_PROJECT_ID,
	storageBucket: REACT_APP_STORAGE_BUCKET,
	messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
	appId: REACT_APP_APP_ID,
	measurementId: REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const dbRef = firebase.database().ref();
export const newsRef = dbRef.child('news');
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
