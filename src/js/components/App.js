import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from '../components/PrivateRoute';
import Home from '../pages/Home';
import News from '../pages/News';
import Logout from '../pages/Logout';

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<PrivateRoute exact path="/news" component={News} />
				<Route exact path="/logout" component={Logout} />
			</Switch>
		</Router>
	);
}
