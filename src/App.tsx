import React, { useEffect } from 'react';
import axios from 'axios';
import { createApi } from 'unsplash-js';
import './css/App.scss';

import { useDispatch } from "react-redux";
import { loading, weatherData, imagesData, concatData, useWeather } from "./features/weatherSlice";

// React router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Error from './pages/Error';
// Navbar
import Navbar from './components/Navbar';
import Sortbar from './components/Sortbar';

function App() {
	const weather = useWeather();
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			try {
				const url = 'http://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=r0f1L4gMsX9SDBDfkv3b8tlkPCBILlvL&language=en';
				const res = await axios.get(url);
				// slice(0, N) - amount the weather card items
				dispatch(weatherData(res.data.slice(0, 3)));
				dispatch(loading(false));
			}
			catch {(error: Error) => {
				console.log('AccuWeather Error: ',error);
				dispatch(loading(false));
			}}
		})();
	}, []);

	useEffect(() => {
		dispatch(loading(true));
		if (weather) {
			const unsplash = createApi({ accessKey: 'UFb-0W1ebRAVU6jawg9txBoQf633c4t8tA7TRvpDb88' });
			let photoPromises = [];

			photoPromises = weather.map(async (city: any) => {
				try {
					return unsplash.photos.getRandom({
						query: city.EnglishName,
						count: 1,
						orientation: 'landscape',
					});
				} catch (error) {
					return await Promise.reject(error);
				}
			});

			(async () => {
				try {
					const values = await Promise.all(photoPromises);
					dispatch(imagesData(values.map((item: any) => item.response[0].urls.small)));
					//Concat weather and images(unsplash) results in one object
					dispatch(concatData());
					dispatch(loading(false));
				}
				catch {(error: Error) => {
					console.log('Unsplash Error: ',error);
					dispatch(loading(false));
				}}
			})();
		}
	}, [weather]);

	return (
		<Router>
			<Navbar />
			<Sortbar />
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