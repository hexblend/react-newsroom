import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function SingleNews(props) {
	const { news } = props;
	const users = useSelector((state) => state.firestore.ordered.users);
	const author = users && users.filter((user) => user.id === news.author)[0];

	return (
		<div className="SingleNews">
			<p className="SingleNews__text">{news.news}</p>
			<div className="SingleNews__footer">
				<p className="SingleNews__footer--pin"></p>
				<p className="SingleNews__footer--author">{author.displayName}</p>
			</div>
		</div>
	);
}

SingleNews.propTypes = {
	news: PropTypes.object.isRequired,
};

export default SingleNews;
