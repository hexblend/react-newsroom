import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/elements/Button';

const Home = () => {
	return (
		<div className="Home">
			<h1 className="Home__title">
				Welcome to Solent University News Room
			</h1>
			<Link to="/">
				<Button text="Login with Google" type="primary" />
			</Link>
		</div>
	);
};

export default Home;
