import React from 'react';
import { useFirebase } from 'react-redux-firebase';
import Button from '../components/elements/Button';

const Home = (props) => {
	const firebase = useFirebase();

	const signInWithGoogle = (e) => {
		e.preventDefault();
		firebase.login({
			provider: 'google',
			type: 'redirect',
		});
	};

	return (
		<div className="Home">
			<h1 className="Home__title">Welcome to Solent University News Room</h1>
			<Button
				text="Login with Google"
				type="primary"
				onClick={(e) => signInWithGoogle(e)}
			/>
		</div>
	);
};

export default Home;
