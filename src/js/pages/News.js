import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import AddNewsBar from '../components/AddNewsBar';

const News = () => {
	return (
		<div className="News">
			<Header />
			<Sidebar />
			<AddNewsBar />
		</div>
	);
};

export default News;
