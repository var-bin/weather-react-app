import React, { Fragment } from 'react';
import { format } from 'date-fns';
import { useIsUnitImperial } from "../features/switcherSlice";
// import  weather and favorites icon's
import { IconWeather, IconHeart,  IconHeartFill, IconDelete } from '../icons/Icons';

type CityProps = {
    img: string;
    city: string;
    country: string;
    weatherText: string;
    weatherIcon: number;
    weatherTemperatureValue: number;
    weatherTemperatureUnit: string;
    weatherTemperatureUnitF: string;
    weatherTemperatureValueF: number;
    onIsFavorite: () => void;
    isFavorite: boolean;
    isShowDelete: boolean;
    onDeleteFavorite: () => void;
};

const City = ({img, city, country, weatherText, weatherIcon, weatherTemperatureValue, weatherTemperatureUnit,
    weatherTemperatureUnitF, weatherTemperatureValueF, onIsFavorite, isFavorite, isShowDelete, onDeleteFavorite}: CityProps) => {

    // switch between Celsius and Fahrenheit
    const isUnitImperial = useIsUnitImperial();
    const WeatherTemperature = () => {
        if (isUnitImperial) {
            return (
                <Fragment>{weatherTemperatureValueF}&#176;{weatherTemperatureUnitF}</Fragment>
            );
        }
        return (
            <Fragment>{weatherTemperatureValue}&#176;{weatherTemperatureUnit}</Fragment>
        );
    };

    const time =  format(new Date(), "k':'mm bbbb");
    const data =  format(new Date(), "EEEE',' MMMM do");

    const IconFavoriteWrapped = () => {
        if (isFavorite) {
            return (
                <button className="col btn" type="button"><IconHeartFill /></button>
            );
        }
        return (
            <button className="col btn btn-link" type="button" onClick={onIsFavorite}><IconHeart /></button>
        );
    };
    const IconDeleteWrapped = () => {
        if (isShowDelete) {
            return (
                <button className="col btn btn-link" type="button" onClick={onDeleteFavorite}>
                    <IconDelete />
                </button>
            );
        }
        return null;
    };

    return (
		<div className="col">
            <div className="card shadow">
                <img src={img} className="card-img" alt="bg" height="330" />
                <div className="card-img-overlay bg-black bg-opacity-50">
                    <div className="row justify-content-between">
                        <div className="col">
                            <h1 className="card-title display-5 fw-bold lh-1">{city}</h1>
                            <h6 className="card-text text-uppercase fw-light lh-1">{country}</h6>
                        </div>
                        <div className="col text-center mb-3 ms-5">
                            <IconWeather iconNumb={weatherIcon} />
                            <h4 className="card-text fw-light">{weatherText}</h4>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col">
                            <div className="row mb-5">
                                <IconFavoriteWrapped />
                                <IconDeleteWrapped />
                            </div>
                            <div className="row row-cols-auto g-0 align-items-end">
                                <div className="col">
                                    <h2 className="card-title fw-normal me-3">
                                        <WeatherTemperature />
                                    </h2>
                                </div>
                                <div className="col">
                                    <h5 className="card-text fw-normal mb-1">{time}</h5>
                                    <h5 className="card-text fw-light">{data}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
};

export default City;