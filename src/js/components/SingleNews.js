import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function SingleNews(props) {
	const { news } = props;
	const users = useSelector((state) => state.firestore.ordered.users);
	const author = users && users.filter((user) => user.id === news.author)[0];
	const authUser = useSelector((state) => state.firebase.auth);

	return (
		<div className="SingleNews">
			<p className="SingleNews__text">{news.news}</p>
			<div className="SingleNews__footer">
				<p className="SingleNews__footer--pin"></p>
				<p className="SingleNews__footer--author">{author.displayName}</p>
			</div>
			{authUser.uid === author.id && (
				<div className="SingleNews__deleteWrapper">
					<FontAwesomeIcon icon={faTimes} className="SingleNews__delete" />
				</div>
			)}
		</div>
	);
}

SingleNews.propTypes = {
	news: PropTypes.object.isRequired,
};

export default SingleNews;
