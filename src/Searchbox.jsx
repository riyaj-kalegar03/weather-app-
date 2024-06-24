import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./Searchbox.css";
export default function SerchBox({ updateinfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_KEY = "0286c693ecb122f3d3ba1c7dfff2654f";

  let getWeather = async () => {
    let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonres = await res.json();
    let result = {
      city: city,
      temp: jsonres.main.temp,
      tempMin: jsonres.main.temp_min,
      tempMax: jsonres.main.temp_max,
      humidity: jsonres.main.humidity,
      weather: jsonres.weather[0].description,
      feels_like: jsonres.main.feels_like,
    };
    console.log(result);
    return result;
  };
  let handleInputChange = (event) => {
    setCity(event.target.value);
  };
  let onSubmitHandle = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      setError(false);
      let newinfo = await getWeather();
      updateinfo(newinfo);
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="Searchbox">
      <form onSubmit={onSubmitHandle}>
        <h1>Search For Wheather</h1>
        <TextField
          id="outlined-basic"
          label="Enter city"
          variant="outlined"
          required
          value={city}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <Button variant="outlined" type="submit">
          Search
        </Button>
      </form>
      <p>{error && "No place exist"}</p>
    </div>
  );
}
