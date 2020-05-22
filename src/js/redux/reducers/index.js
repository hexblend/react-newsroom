import { combineReducers } from 'redux';

import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'react-redux-firebase';
import AuthReducer from './AuthReducer';
import NewsReducer from './NewsReducer';

export default combineReducers({
	firebaseReducer,
	firestoreReducer,
	AuthReducer,
	NewsReducer,
});
