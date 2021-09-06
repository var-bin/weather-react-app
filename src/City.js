import React from 'react';
import { format } from 'date-fns';

// import  weather-icon's
import { IconCloudy, IconFrost, IconHeavyRain, IconIntenseFog,
    IconIntenseRain, IconMostlyCloudy, IconPartlyCloudy, IconPrecipitation, 
    IconRain, IconSnow, IconStrongMist, IconSunny } from './icons/Icons';
// import  favorites icon's 
import { IconHeart,  IconHeartFill, IconDelete } from './icons/Icons';

const City = ({img, city, country, weatherText, weatherIcon, weatherTemperatureValue, weatherTemperatureUnit, onIsFavorite, isFavorite, isShowDelete, onDeleteFavorite}) => {
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
    const IconWeather = () => {
        if (weatherIcon === 7) {
            return <IconCloudy />;
        }
        if (weatherIcon === 31 || weatherIcon === 24) {
            return <IconFrost />;
        }
        if (weatherIcon ===16|| weatherIcon === 17) {
            return <IconHeavyRain />;
        }
        if (weatherIcon === 11) {
            return <IconIntenseFog />;
        }
        if (weatherIcon === 15) {
            return <IconIntenseRain />;
        }
        if (weatherIcon === 6 || weatherIcon === 20 || weatherIcon === 23 || weatherIcon === 38 || 
            weatherIcon === 40 || weatherIcon === 42 || weatherIcon === 43 || weatherIcon === 44) {
            return <IconMostlyCloudy />;
        }
        if (weatherIcon === 3 || weatherIcon === 4 || weatherIcon === 35) {
            return <IconPartlyCloudy />;
        }
        if (weatherIcon === 12 || weatherIcon === 13 || weatherIcon === 14) {
            return <IconPrecipitation />;
        }
        if (weatherIcon === 18) {
            return <IconRain />;
        }
        if (weatherIcon === 22) {
            return <IconSnow />;
        }
        if (weatherIcon === 8) {
            return <IconStrongMist />;
        }
        if (weatherIcon === 1 || weatherIcon === 2 || weatherIcon === 33) {
            return <IconSunny />;
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
                            <IconWeather />
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
                                        {weatherTemperatureValue}&#176;{weatherTemperatureUnit}
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