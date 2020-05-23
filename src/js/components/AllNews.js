import React from 'react';
import SingleNews from './SingleNews';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function AllNews() {
	useFirestoreConnect([{ collection: 'news' }]);
	const recAllNews = useSelector((state) => state.firestore.ordered.news);
	const allNews = recAllNews && recAllNews.slice().sort((a, b) => b.date - a.date);
	return (
		<div className="AllNews">
			{allNews && allNews.length !== 0 ? (
				allNews.map((singleNews) => <SingleNews news={singleNews} key={singleNews.id} />)
			) : (
				<p className="AllNews__noNewsMessage">There are no news at the moment.</p>
			)}
		</div>
	);
}
export default AllNews;
