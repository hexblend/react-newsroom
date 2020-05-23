import React from 'react';
import { useSelector } from 'react-redux';

function Alert() {
	const message = useSelector((state) => state.MainReducer.alert);
	return (
		<>
			{message !== '' && (
				<div className="Alert">
					<p className="Alert__message">{message}</p>
				</div>
			)}
		</>
	);
}

export default Alert;
