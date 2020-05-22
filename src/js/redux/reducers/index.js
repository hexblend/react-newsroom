import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import NewsReducer from './NewsReducer';

export default combineReducers({ AuthReducer, NewsReducer });
