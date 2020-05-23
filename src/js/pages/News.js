import React from 'react';
import Alert from '../components/Alert';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import AllNews from '../components/AllNews';
import AddNewsBar from '../components/AddNewsBar';
import SingleNews from '../components/SingleNews';
import { useSelector } from 'react-redux';

const News = () => {
	const pinnedPost = useSelector((state) => state.firestore.ordered.pinned);
	return (
		<div className="News">
			<Alert />
			<Header />
			<Sidebar />
			{pinnedPost && pinnedPost[0] && <SingleNews pinned={true} news={pinnedPost[0]} />}
			<AllNews />
			<AddNewsBar />
		</div>
	);
};

export default News;
