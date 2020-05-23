import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { raiseInput, setAlert } from '../redux/actions/MainActions';
import { useFirestore } from 'react-redux-firebase';
import firebase from 'firebase/app';

function AddNewsBar(props) {
	const { auth, raisedInput, setRaisedInput, setAlert } = props;

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
				date: firebase.firestore.FieldValue.serverTimestamp(),
			};
			// Could be transform into an action
			firestore
				.collection('news')
				.add(newNews)
				.then(() => {
					setAlert('News added.');
					setTimeout(() => setAlert(''), 3000);
				});
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
	setAlert: (string) => dispatch(setAlert(string)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewsBar);
