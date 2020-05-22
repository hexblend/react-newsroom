import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="Header">
			<p className="Header__members">Members</p>
			<h1 className="Header__title">Solent University News Room</h1>
			<Link to="/logout" className="Header__logout">
				Log out
			</Link>
		</div>
	);
}
export default Header;
