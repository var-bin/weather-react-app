import React, { useEffect, useReducer} from 'react';
//import { useGetAxios } from './useGetAxios';
import { reducer } from './reducer';
import { cities } from './cities';
import City from './City';

// base url
//const url = 'https://api.unsplash.com/photos/?client_id=UFb-0W1ebRAVU6jawg9txBoQf633c4t8tA7TRvpDb88';

const Home = () => {
    const defaultState = {
        //cities: useGetAxios(url).cities,
        cities: cities,
        favorites: [],
    };

    const [state, dispatch] = useReducer(reducer, defaultState);

    useEffect(() => {
        // set {favorites} to local storage 
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }, [state.favorites]);

    return (
        <div className="container pt-4 pb-4">
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                {state.cities.map((city) => {
                    return (
                        <City 
                            {...city} 
                            key={city.id} 
                            onIsFavorite={() =>  
                                dispatch({ 
                                    type: 'ADD_FAVORITE_ITEM', 
                                    id: city.id,
                                    img: city.img,
                                    city: city.city,
                                    country: city.country,
                            })}
                        >
                        </City>
                    );      
                })}
            </div>
        </div>
    );
}; 

export default React.memo(Home);