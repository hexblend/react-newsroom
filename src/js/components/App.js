import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import Home from '../pages/Home';
import News from '../pages/News';

export default function App() {
	return (
		<Router>
			<>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/news" component={News} />
				</Switch>
			</>
		</Router>
	);
}
