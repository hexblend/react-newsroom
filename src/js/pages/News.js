import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import AddNewsBar from '../components/AddNewsBar';
import Alert from '../components/Alert';

const News = () => {
	return (
		<div className="News">
			<Alert />
			<Header />
			<Sidebar />
			<AddNewsBar />
		</div>
	);
};

export default News;
