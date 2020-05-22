import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '../components/elements/Button';

import { signIn } from '../redux/actions/AuthActions';

const Home = (props) => {
	const { auth, signIn } = props;
	return (
		<div className="Home">
			<h1 className="Home__title">Welcome to Solent University News Room</h1>
			<Link to="/">
				<Button text="Login with Google" type="primary" />
			</Link>
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.AuthReducer.auth,
});
const mapDispatchToProps = (dispatch) => ({
	signIn: (user) => dispatch(signIn(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
