import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
	const { type, text } = props;
	return (
		<>
			<button
				className={`btn ${
					type === 'primary' && 'btn-primary'
				} `}
			>
				{text}
			</button>
		</>
	);
}

Button.propTypes = {
	type: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default Button;
