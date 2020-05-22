import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';

function PrivateRoute({ component, children, ...rest }) {
	const auth = useSelector((state) => state.firebase.auth);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isLoaded(auth) && !isEmpty(auth) ? (
					(children, component)
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
}

export default PrivateRoute;
