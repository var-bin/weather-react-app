import './App.scss';

import {cities} from './cities';
import City from './City';

function App() {
	return (
		<div className="container pt-4 pb-4">
			<div className="row row-cols-1 row-cols-lg-2 g-4">
				{cities.map((city, index) => {
					return <City key={city.id} {...city}></City>;
				})}
			</div>
		</div>
	);
}

export default App;