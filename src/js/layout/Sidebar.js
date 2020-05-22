import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

function Sidebar() {
	useFirestoreConnect([{ collection: 'users' }]);
	const users = useSelector((state) => state.firestore.ordered.users);

	return (
		<div className="Sidebar">
			{users &&
				users.map((user) => (
					<div className="User" key={user.email}>
						<div
							className="User__avatar"
							style={{ backgroundImage: `url(${user.avatarUrl})` }}
						></div>
						<p className="User__fullName">{user.displayName}</p>
					</div>
				))}
		</div>
	);
}

export default Sidebar;
