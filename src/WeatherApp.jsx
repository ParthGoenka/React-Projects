import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Vancouver",
        feelsLike: -0.62,
        humidity: 89,
        temp: 0.77,
        tempMax: 2.53,
        tempMin: -0.43,
        weather: "snow",
        wind: 1.34,
    });

    let updateInfo = (newinfo) => {
        setWeatherInfo(newinfo);
    }

    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    );
}