import React from 'react';
import SingleNews from './SingleNews';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

function AllNews() {
	useFirestoreConnect([{ collection: 'news' }]);
	const allNews = useSelector((state) => state.firestore.ordered.news);
	console.log(allNews);
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
