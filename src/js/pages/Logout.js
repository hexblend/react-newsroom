import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';

function Logout() {
	const history = useHistory();
	useEffect(() => {
		firebase.logout();
		history.push('/');
	}, []);
	return <></>;
}
export default Logout;
