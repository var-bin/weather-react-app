import React, { useContext, useEffect } from 'react';
import axios from "axios";
import { createApi } from 'unsplash-js';
import { GlobalContext } from "./GlobalContext";
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
	const { state, dispatch } = useContext(GlobalContext);

	useEffect(() => {
		(async () => {
			try {
				const url = 'http://dataservice.accuweather.com/currentconditions/v1/topcities/50?apikey=r0f1L4gMsX9SDBDfkv3b8tlkPCBILlvL&language=en';
				const res = await axios.get(url);
				// '4' - amount the weather card items
				dispatch({ type: "CURRENT_CONDITIONS", payload: res.data.slice(0, 4) });
				dispatch({ type: "LOADING", payload: false });
			}
			catch {(error) => {
				console.log('AccuWeather Error: ',error);
				dispatch({ type: "LOADING", payload: false });
			}}
		})();
	}, [dispatch]);

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
			/* code for fetch one image from unsplash
			 	try {
					const urlImage = 'https://api.unsplash.com/photos/random/?client_id=UFb-0W1ebRAVU6jawg9txBoQf633c4t8tA7TRvpDb88&query=${state.weather[0].EnglishName}';
					const resultImage = await axios.get(urlImage);
					dispatch({ type: "IMAGES", payload: resultImage.data.urls.regular });
				} */

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
	}, [state.weather, dispatch]);

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