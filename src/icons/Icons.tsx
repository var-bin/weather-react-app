import React from 'react';

import { ReactComponent as IconGridComponent } from './layout-icons/grid.svg';
import { ReactComponent as IconListComponent } from './layout-icons/list.svg';

import { ReactComponent as IconHeartComponent } from './status-icons/heart.svg';
import { ReactComponent as IconHeartFillComponent } from './status-icons/heart-fill.svg';
import { ReactComponent as IconDeleteComponent } from './status-icons/x-circle.svg';

import { ReactComponent as IconCloudyComponent } from './weather-icons/icon-cloudy.svg';
import { ReactComponent as IconFrostComponent } from './weather-icons/icon-frost.svg';
import { ReactComponent as IconHeavyRainComponent } from './weather-icons/icon-heavy-rain.svg';
import { ReactComponent as IconIntenseFogComponent } from './weather-icons/icon-intense-fog.svg';
import { ReactComponent as IconIntenseRainComponent } from './weather-icons/icon-intense-rain.svg';
import { ReactComponent as IconMostlyCloudyComponent } from './weather-icons/icon-mostly-cloudy.svg';
import { ReactComponent as IconPartlyCloudyComponent } from './weather-icons/icon-partly-cloudy.svg';
import { ReactComponent as IconPrecipitationComponent } from './weather-icons/icon-precipitation.svg';
import { ReactComponent as IconRainComponent } from './weather-icons/icon-rain.svg';
import { ReactComponent as IconSnowComponent } from './weather-icons/icon-snow.svg';
import { ReactComponent as IconStrongMistComponent } from './weather-icons/icon-strong-mist.svg';
import { ReactComponent as IconSunnyComponent } from './weather-icons/icon-sunny.svg';

export const IconGrid = () => <IconGridComponent />;
export const IconList = () => <IconListComponent />;

export const IconHeart = () => <IconHeartComponent />;
export const IconHeartFill = () => <IconHeartFillComponent />;
export const IconDelete = () => <IconDeleteComponent />;

type Props = {
    iconNumb: any;
};

export const IconWeather: React.FC<Props> = props => {
    const iconByWeather: any  = {
        '7':  <IconCloudyComponent />,
        '31': <IconFrostComponent />,
        '24': <IconFrostComponent />,
        '16': <IconHeavyRainComponent />,
        '17': <IconHeavyRainComponent />,
        '11': <IconIntenseFogComponent />,
        '15': <IconIntenseRainComponent />,
        '6':  <IconMostlyCloudyComponent />,
        '20': <IconMostlyCloudyComponent />,
        '23': <IconMostlyCloudyComponent />,
        '38': <IconMostlyCloudyComponent />,
        '40': <IconMostlyCloudyComponent />,
        '42': <IconMostlyCloudyComponent />,
        '43': <IconMostlyCloudyComponent />,
        '44': <IconMostlyCloudyComponent />,
        '3':  <IconPartlyCloudyComponent />,
        '4':  <IconPartlyCloudyComponent />,
        '35': <IconPartlyCloudyComponent />,
        '12': <IconPrecipitationComponent />,
        '13': <IconPrecipitationComponent />,
        '14': <IconPrecipitationComponent />,
        '18': <IconRainComponent />,
        '22': <IconSnowComponent />,
        '8':  <IconStrongMistComponent />,
        '1':  <IconSunnyComponent />,
        '2':  <IconSunnyComponent />,
        '33': <IconSunnyComponent />,
    }
    return iconByWeather[props.iconNumb] || null;
};