import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import Home from '../pages/Home';
import News from '../pages/News';

export default function App() {
	return (
		<Router>
			<>
				<Switch>
					<Route exact path="/" component={Home} />
					<PrivateRoute path="/news" component={News} />
				</Switch>
			</>
		</Router>
	);
}
