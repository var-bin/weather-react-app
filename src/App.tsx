import React, { useEffect } from 'react';
import axios from 'axios';
import { createApi } from 'unsplash-js';
// React router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Random } from 'unsplash-js/dist/methods/photos/types';

import './css/App.scss';

import { loading, weatherData, imagesData, concatData, useWeather } from "./features/weatherSlice";

// Pages
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import Error from './pages/Error';
// Navbar
import Navbar from './components/Navbar';
import Sortbar from './components/Sortbar';

const App: React.FC = () => {
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

			photoPromises = weather.map(async (city: { EnglishName: string; }) => {
				try {
					return unsplash.photos.getRandom({
						query: city.EnglishName,
						count: 1,
						orientation: 'landscape',
					}).then(resp => resp.response);
				} catch (error) {
					return await Promise.reject(error);
				}
			});

			(async () => {
				try {
					const values = await Promise.all(photoPromises) as Array<Array<Random>>;

					dispatch(imagesData(values.map((item: Array<Random>) => item[0].urls.small)));
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
			<Switch>
				<Route exact path="/">
					<Sortbar />
					<Home />
				</Route>
				<Route path="/favorites">
					<Sortbar />
					<Favorites />
				</Route>
				<Route path="/search">
					<Search />
				</Route>
				<Route path="*">
					<Error />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
