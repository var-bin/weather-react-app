import React from 'react';
import { format } from 'date-fns';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

// Import necessary weather-icon's component from folder './weather-icons'
import { ReactComponent as IconIntenseFog } from './weather-icons/icon-intense-fog.svg';
import { ReactComponent as IconPartlyCloudy } from './weather-icons/icon-partly-cloudy.svg';
import { ReactComponent as IconStrongMist } from './weather-icons/icon-strong-mist.svg';
import { ReactComponent as IconSunny } from './weather-icons/icon-sunny.svg';

// Import necessary favorites icon's component from folder './heart-icons'
import { ReactComponent as IconHeart } from './status-icons/heart.svg';
import { ReactComponent as IconHeartFill } from './status-icons/heart-fill.svg';
import { ReactComponent as IconDelete } from './status-icons/x-circle.svg';

const City = ({img, city, country, onIsFavorite, isFavorite, isShowDelete, onDeleteFavorite}) => {
    const time =  format(new Date(), "k':'mm bbbb");
    const data =  format(new Date(), "EEEE',' MMMM do");
         
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
                            <IconPartlyCloudy width={50} height={50} />
                            <h4 className="card-text fw-light">Partly Cloudy</h4>
                        </div>
                    </div>
                    <div className="row align-items-end">
                        <div className="col">
                            <div className="row mb-5">
                                {!isFavorite && 
                                    <div className="col d-flex justify-content-center" onClick={() => onIsFavorite()}>
                                        <IconHeart width={50} height={50} role="button" />
                                    </div>
                                }
                                {isFavorite &&
                                    <div className="col d-flex justify-content-center">
                                        <IconHeartFill width={50} height={50} role="button" />
                                    </div>
                                }
                                {isShowDelete &&
                                    <div className="col d-flex justify-content-center"  onClick={() => onDeleteFavorite()}>
                                        <IconDelete width={50} height={50} role="button" />
                                    </div>
                                }
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
                                            <span><IconSunny width={25} height={25} /> 65&#176;</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            9:00 a.m.
                                            <span><IconPartlyCloudy width={25} height={25} /> 71&#176;</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            10:00 a.m.
                                            <span><IconSunny width={25} height={25} /> 73&#176;</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            11:00 a.m.
                                            <span><IconStrongMist width={25} height={25} /> 75&#176;</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            12:00 a.m.
                                            <span><IconIntenseFog width={25} height={25} /> 84&#176;</span>
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel>
                                        <ul className="list-group">
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            8:00 a.m.
                                            <span><IconPartlyCloudy width={25} height={25} /> 88&#176;</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            10:00 a.m.
                                            <span><IconSunny width={25} height={25} /> 72&#176;</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            12:00 a.m.
                                            <span><IconSunny width={25} height={25} /> 73&#176;</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            14:00 a.m.
                                            <span><IconStrongMist width={25} height={25} /> 55&#176;</span>
                                            </li>
                                            <li className="list-group-item d-flex justify-content-between align-items-center fw-light">
                                            16:00 a.m.
                                            <span><IconSunny width={25} height={25} /> 64&#176;</span>
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