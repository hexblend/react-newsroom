import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { raiseInput } from '../redux/actions/MainActions';

function AddNewsBar(props) {
	const { raisedInput, setRaisedInput } = props;
	const [news, setNews] = useState('');

	return (
		<div className={`AddNewsBar ${raisedInput && 'raised'}`}>
			<textarea
				type="text"
				className="AddNewsBar__input"
				value={news}
				placeholder="Add new news"
				rows="12"
				onClick={() => setRaisedInput(true)}
				onChange={(e) => setNews(e.target.value)}
			/>
			<FontAwesomeIcon
				icon={faPaperPlane}
				className="AddNewsBar__icon"
				onClick={() => setRaisedInput(false)}
			/>
		</div>
	);
}

const mapStateToProps = (state) => ({
	raisedInput: state.MainReducer.raisedInput,
});

const mapDispatchToProps = (dispatch) => ({
	setRaisedInput: (bool) => dispatch(raiseInput(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewsBar);
