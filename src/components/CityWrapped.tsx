import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavoriteItem } from '../features/favoritesSlice';
import City from './City';

type Props = {
    city: {
        Key: number;
        img: string;
        LocalizedName: string;
        WeatherText: string;
        WeatherIcon: number;
        Country: {
            LocalizedName: string;
        },
        Temperature: {
            Metric: {
                Unit: string;
                Value: number;
            },
            Imperial: {
                Unit: string;
                Value: number;
            },
        },
    },
    index: number,
    isFavorite: boolean;
};

const CityWrapped: React.FC<Props> = props => {
    const dispatch = useDispatch();

    const {
        Key,
        img,
        WeatherIcon,
        WeatherText,
        LocalizedName,
        Country,
        Temperature,
        ...restProps
      } = props.city;

    const { isFavorite } = props;

    const onIsFavoriteHandler = () => {
        dispatch(addFavoriteItem({
            Key: Key,
            img: img,
            weatherIcon: WeatherIcon,
            weatherText: WeatherText,
            city: LocalizedName,
            country: Country.LocalizedName,
            weatherTemperatureUnit: Temperature.Metric.Unit,
            weatherTemperatureValue: Temperature.Metric.Value,
            weatherTemperatureUnitF: Temperature.Imperial.Unit,
            weatherTemperatureValueF: Temperature.Imperial.Value,
            isFavorite: true,
            isShowDelete: true,

            ...restProps,
        }));
    }

    return (
    <City
        isShowDelete={false} onDeleteFavorite={function (): void {
            throw new Error('Function not implemented.');
        } } {...restProps}

        img={img}
        weatherIcon={WeatherIcon}
        weatherText={WeatherText}
        city={LocalizedName}
        country={Country.LocalizedName}
        weatherTemperatureUnit={Temperature.Metric.Unit}
        weatherTemperatureValue={Temperature.Metric.Value}
        weatherTemperatureUnitF={Temperature.Imperial.Unit}
        weatherTemperatureValueF={Temperature.Imperial.Value}
        isFavorite={isFavorite}
        onIsFavorite={onIsFavoriteHandler}        />
    );
};

export default CityWrapped;
