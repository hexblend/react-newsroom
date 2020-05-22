import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import MainReducer from './MainReducer';

export default combineReducers({
	firebase: firebaseReducer,
	firestore: firestoreReducer,
	MainReducer,
});
