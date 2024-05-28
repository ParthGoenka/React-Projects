import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
    return(
        <div className = "InfoBox">
            <Card sx={{ maxWidth: 345 }}>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <div>
            <h5>Temperature = {info.temp}&deg;C</h5>
            <h5>Humidity = {info.humidity}</h5>
            <h5>Min Temperature = {info.tempMin}&deg;C</h5>
            <h5>Max Temperature = {info.tempMax}&deg;C</h5>
            <h5>Wind Speed = {info.wind}</h5>
            <h5>Feels Like = {info.feelsLike} &nbsp;&nbsp; {info.weather}</h5>
        </div>
        </Typography>
        </CardContent>
        </Card>
        </div>
    );
}