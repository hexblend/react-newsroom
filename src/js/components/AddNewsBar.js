import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { raiseInput } from '../redux/actions/MainActions';
import { useFirestore } from 'react-redux-firebase';

function AddNewsBar(props) {
	const { auth, raisedInput, setRaisedInput } = props;

	const [news, setNews] = useState('');
	const [error, setError] = useState('');

	const firestore = useFirestore();

	const handleSubmit = () => {
		if (news === '') {
			setError("You can't submit an empty news.");
		} else {
			setError('');
			setNews('');
			setRaisedInput(false);
			const newNews = {
				news,
				author: auth.uid,
			};
			firestore.collection('news').add(newNews);
		}
	};

	return (
		<div className={`AddNewsBar ${raisedInput && 'raised'}`}>
			{error !== '' && <p className="AddNewsBar__error">{error}</p>}
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
				onClick={() => handleSubmit()}
			/>
		</div>
	);
}

const mapStateToProps = (state) => ({
	raisedInput: state.MainReducer.raisedInput,
	auth: state.firebase.auth,
});

const mapDispatchToProps = (dispatch) => ({
	setRaisedInput: (bool) => dispatch(raiseInput(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewsBar);
