import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

import { setAlert } from '../redux/actions/MainActions';
import { useDispatch } from 'react-redux';

function SingleNews(props) {
	const { news, pinned } = props;
	const dispatch = useDispatch();
	useFirestoreConnect([{ collection: 'pinned' }]);

	const users = useSelector((state) => state.firestore.ordered.users);
	const author = users && users.filter((user) => user.id === news.author)[0];
	const authUser = useSelector((state) => state.firebase.auth);
	const pinnedNews = useSelector((state) => state.firestore.ordered.pinned);

	const firestore = useFirestore();

	const handleDeleteNews = () => {
		firestore
			.collection('news')
			.doc(news.id)
			.delete()
			.then(() => {
				dispatch(setAlert('News deleted.'));
				setTimeout(() => dispatch(setAlert('')), 1500);
			});
		if (pinnedNews[0]) {
			firestore.collection('pinned').doc('pinnedPost').delete();
		}
	};

	const handlePinPost = () => {
		firestore.collection('news').doc(news.id).delete();
		firestore
			.collection('pinned')
			.doc(news.id)
			.set({ author: news.author, date: news.date, news: news.news });
		if (pinnedNews[0]) {
			firestore.collection('news').doc(pinnedNews[0].id).set({
				author: pinnedNews[0].author,
				date: pinnedNews[0].date,
				news: pinnedNews[0].news,
			});
			firestore.collection('pinned').doc(pinnedNews[0].id).delete();
		}
	};

	const handleUnpinPost = () => {
		firestore
			.collection('news')
			.doc(news.id)
			.set({ author: news.author, date: news.date, news: news.news });
		firestore.collection('pinned').doc(news.id).delete();
	};

	return (
		<div className={`SingleNews ${pinned && 'SinglePinnedNews'}`}>
			<p className="SingleNews__text">{news.news}</p>
			<div className="SingleNews__footer">
				{pinned ? (
					<p
						className="SingleNews__footer--pin"
						onClick={handleUnpinPost}
						style={{ opacity: 1 }}
					>
						<FontAwesomeIcon icon={solidStar} />
						<span>Unpin news</span>
					</p>
				) : (
					<p className="SingleNews__footer--pin" onClick={handlePinPost}>
						<FontAwesomeIcon icon={emptyStar} />
						<span>Pin news</span>
					</p>
				)}
				<p className="SingleNews__footer--author">{author.displayName}</p>
			</div>
			{authUser.uid === author.id && (
				<div className="SingleNews__deleteWrapper">
					<FontAwesomeIcon
						icon={faTimes}
						className="SingleNews__delete"
						onClick={handleDeleteNews}
					/>
				</div>
			)}
		</div>
	);
}

SingleNews.propTypes = {
	news: PropTypes.object.isRequired,
	pinned: PropTypes.bool,
};

export default SingleNews;
