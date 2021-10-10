import React from 'react';
import { useDispatch } from "react-redux";
import { addFavoriteItem } from "../features/favoritesSlice";
import City from './City';

const CityWrapped = props => {
    const dispatch = useDispatch();

    const {
        Key,
        LocalizedName,
        Country,
        Temperature,
        ...restValues
      } = props.city;

    const { isFavorite } = props;

    const onIsFavoriteHandler = () => {
        dispatch(addFavoriteItem({
            Key,
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
