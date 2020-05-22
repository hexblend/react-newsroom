import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
	const { type, text, onClick } = props;
	return (
		<>
			<button className={`btn ${type === 'primary' && 'btn-primary'} `} onClick={onClick}>
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
