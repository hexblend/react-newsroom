import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isAuthenticated ? <Component {...props} {...rest} /> : <Redirect to="/" />
		}
	/>
);
const mapStateToProps = (state) => ({
	isAuthenticated: state.firebase.auth.uid,
});

PrivateRoute.propTypes = {
	component: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.string,
};

export default connect(mapStateToProps)(PrivateRoute);
