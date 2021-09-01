import React from 'react';
import { format } from 'date-fns';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
// import  weather-icon's
import { IconPartlyCloudy, IconSunny } from './icons/Icons';
// import  favorites icon's 
import { IconHeart,  IconHeartFill, IconDelete } from './icons/Icons';

const City = ({img, city, country, onIsFavorite, isFavorite, isShowDelete, onDeleteFavorite}) => {
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
                <img src={img} className="card-img" alt="bg" height="370" />
                <div className="card-img-overlay bg-black bg-opacity-50">
                    <div className="row justify-content-between">
                        <div className="col">
                            <h1 className="card-title display-5 fw-bold lh-1">{city}</h1>
                            <h6 className="card-text text-uppercase fw-light lh-1">{country}</h6>
                        </div>
                        <div className="col text-end mb-3">
                            <IconPartlyCloudy />
                            <h4 className="card-text fw-light">Partly Cloudy</h4>
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
                                    <h2 className="card-title fw-normal me-3">65&#176;</h2>
                                </div>
                                <div className="col">
                                    <h5 className="card-text fw-normal mb-1">{time}</h5>
                                    <h5 className="card-text fw-light">{data}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <Tabs  selectedTabClassName="active">
                                <TabList className="nav nav-tabs">
                                    <Tab><span className="nav-link">Today</span></Tab>
                                    <Tab><span className="nav-link">Week</span></Tab>
                                </TabList>
                                <div className="tab-content">
                                    <TabPanel>
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            Now
                                            <span><IconSunny /> 65&#176;</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            9:00 a.m.
                                            <span><IconPartlyCloudy /> 71&#176;</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            9:00 a.m.
                                            <span><IconPartlyCloudy /> 71&#176;</span>
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel>
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            8:00 a.m.
                                            <span><IconPartlyCloudy /> 88&#176;</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            10:00 a.m.
                                            <span><IconSunny /> 72&#176;</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            9:00 a.m.
                                            <span><IconPartlyCloudy /> 71&#176;</span>
                                            </li>
                                        </ul>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
};

export default City;