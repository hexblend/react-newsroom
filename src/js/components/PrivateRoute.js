import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';

function PrivateRoute(props) {
	const { auth, component, children, ...rest } = props;
	const [content, setContent] = useState();

	useEffect(() => {
		if (!isEmpty(auth) && isLoaded(auth)) {
			setContent(component, children);
		} else {
			setContent(<Redirect to={{ pathname: '/' }} />);
		}
	}, [auth]);

	return <Route {...rest} render={() => content} />;
}

const mapStateToProps = (state) => ({
	auth: state.firebase.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
