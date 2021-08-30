import React from 'react';
import './App.scss';

// React router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import Home from './Home';
import Favorites from './Favorites';
import Error from './Error';
// Navbar
import Navbar from './Navbar';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/favorites">
					<Favorites />
				</Route>
				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;