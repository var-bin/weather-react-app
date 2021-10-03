import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addFavoriteItem } from "../features/favoritesSlice";
import City from './City';

const CityWrapped = props => {
    const images = useSelector(state => state.weather.images);
    const dispatch = useDispatch();

    const {
        Key,
        LocalizedName,
        Country,
        Temperature,
        ...restValues
      } = props.city;

    const { index, isFavorite } = props;

    const onIsFavoriteHandler = () => {
        dispatch(addFavoriteItem({
            Key,
            img: images[index],
            city: LocalizedName,
            country: Country.LocalizedName,
            weatherTemperatureUnit: Temperature.Metric.Unit,
            weatherTemperatureValue: Temperature.Metric.Value,
            weatherTemperatureUnitF: Temperature.Imperial.Unit,
            weatherTemperatureValueF: Temperature.Imperial.Value,
            isFavorite: true,
            isShowDelete: true,

            ...restValues,
        }));
    }

    return (
        <City
            {...restValues}

            img={images[index]}
            city={LocalizedName}
            country={Country.LocalizedName}
            weatherTemperatureUnit={Temperature.Metric.Unit}
            weatherTemperatureValue={Temperature.Metric.Value}
            weatherTemperatureUnitF={Temperature.Imperial.Unit}
            weatherTemperatureValueF={Temperature.Imperial.Value}
            isFavorite={isFavorite}
            onIsFavorite={onIsFavoriteHandler}
        />
    );
};

export default CityWrapped;
