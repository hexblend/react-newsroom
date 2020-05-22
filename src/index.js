import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/components/App';
import './scss/main.scss';

import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { rrfProps } from './js/services/firebase';
import store from './js/redux/store/index';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<App />
			</ReactReduxFirebaseProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
