import React from 'react';
import Alert from '../components/Alert';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import AllNews from '../components/AllNews';
import AddNewsBar from '../components/AddNewsBar';

const News = () => {
	return (
		<div className="News">
			<Alert />
			<Header />
			<Sidebar />
			<AllNews />
			<AddNewsBar />
		</div>
	);
};

export default News;
