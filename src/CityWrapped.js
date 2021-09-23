import React, { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import City from './City';

const CityWrapped = props => {
    const { state, dispatch } = useContext(GlobalContext);

    const {
        Key,
        LocalizedName,
        Country,
        Temperature,
        ...restValues
      } = props.city;

    const { index, isFavorite } = props;

    const onIsFavoriteHandler = () => {
        dispatch({
            type: 'ADD_FAVORITE_ITEM',
            payload: Key,
            img: state.images[index],
            country: Country.LocalizedName,
            weatherTemperatureUnit: Temperature.Metric.Unit,
            weatherTemperatureValue: Temperature.Metric.Value,

            ...restValues,
        });
    }

    return (
        <City
            {...restValues}

            img={state.images[index]}
            city={LocalizedName}
            country={Country.LocalizedName}
            weatherTemperatureUnit={Temperature.Metric.Unit}
            weatherTemperatureValue={Temperature.Metric.Value}
            isFavorite={isFavorite}
            onIsFavorite={onIsFavoriteHandler}
        />
    );
};

export default CityWrapped;
