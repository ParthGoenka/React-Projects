import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
import { colors } from '@mui/material';


export default function SearchBox({updateInfo}){
    
    let [city , setCity] = useState("");
    let [err , setErr] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7e4b1264f493f896d5110921c083cf50";

    let getWeatherInfo = async () => {
        try{
        let response  = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: jsonResponse.name,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            feelsLike: jsonResponse.main.feels_like,
            humidity: jsonResponse.main.humidity,
            wind: jsonResponse.wind.speed,
            weather: jsonResponse.weather[0].description,
        };
        return result;
    } catch(err)
    {
       throw err;
    }

};

   

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try{
        event.preventDefault();
        setCity("");
        let newinfo = await getWeatherInfo();
        updateInfo(newinfo);
        } catch(err)
        {
            setErr(true);
        }
    };

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City" variant="outlined" required value={city} onChange={handleChange} />
            <br></br>
            <br></br>  
            <Button variant="contained" type='submit'>Search</Button>
            {err && <p style={{color:"red"}}>No Such Place Exist</p>}
            </form>
        </div>
    );
}





