import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { createApi } from 'unsplash-js';
import { GlobalContext } from './GlobalContext';
import './css/App.scss';
// React router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Error from './pages/Error';
// Navbar
import Navbar from './Navbar';

function App() {
	const { state, dispatch } = useContext(GlobalContext);

	useEffect(() => {
		(async () => {
			try {
				const url = 'http://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=r0f1L4gMsX9SDBDfkv3b8tlkPCBILlvL&language=en';
				const res = await axios.get(url);
				// slice(0, N) - amount the weather card items
				dispatch({ type: "CURRENT_CONDITIONS", payload: res.data.slice(0, 2) });
				dispatch({ type: "LOADING", payload: false });
			}
			catch {(error) => {
				console.log('AccuWeather Error: ',error);
				dispatch({ type: "LOADING", payload: false });
			}}
		})();
	}, []);

	useEffect(() => {
		dispatch({ type: "LOADING", payload: true });
		if (state.weather) {
			const unsplash = createApi({ accessKey: 'UFb-0W1ebRAVU6jawg9txBoQf633c4t8tA7TRvpDb88' });
			let photoPromises = [];

			photoPromises = state.weather.map(async city => {
				try {
					return unsplash.photos.getRandom({
						query: city.EnglishName,
						count: 1,
						orientation: 'landscape',
					});
				} catch (error) {
					return await Promise.reject('Unsplash Error: ', error);
				}
			});

			(async () => {
				try {
					const values = await Promise.all(photoPromises);
					dispatch({ type: "IMAGES", payload: values.map((item) => item.response[0].urls.small) });
					dispatch({ type: "LOADING", payload: false });
				}
				catch {(error) => {
					console.log('Unsplash Error: ',error);
					dispatch({ type: "LOADING", payload: false });
				}}

			})();
		}
	}, [state.weather]);

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
