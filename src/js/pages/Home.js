import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import Button from '../components/elements/Button';

const Home = (props) => {
	const { auth } = props;
	const firebase = useFirebase();
	const history = useHistory();

	useEffect(() => {
		if (!isEmpty(auth) && isLoaded(auth)) {
			history.push('/news');
		}
	}, [auth]);

	const signInWithGoogle = (e) => {
		e.preventDefault();
		firebase
			.login({
				provider: 'google',
				type: 'popup',
			})
			.then(() => {
				history.push('/news');
			});
	};

	return (
		<div className="Home">
			<h1 className="Home__title">Welcome to Solent University News Room</h1>
			{!isLoaded(auth) ? (
				<Button text="Loading..." type="primary" />
			) : isEmpty(auth) ? (
				<Button
					text="Login with Google"
					type="primary"
					onClick={(e) => signInWithGoogle(e)}
				/>
			) : (
				<pre>{JSON.stringify(auth, null, 2)}</pre>
			)}
		</div>
	);
};
const mapStateToProps = (state) => ({
	auth: state.firebase.auth,
});
export default connect(mapStateToProps)(Home);
