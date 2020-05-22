import React, { useEffect } from 'react';
import { membersRef } from '../services/firebase';

function Sidebar() {
	useEffect(() => {
		// const members = membersRef.get();
		// console.log(members);
	}, []);

	return (
		<div>
			<h1>Sidebar</h1>
		</div>
	);
}

export default Sidebar;
