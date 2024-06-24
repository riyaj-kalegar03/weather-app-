import { useState } from "react";
import SerchBox from "./Searchbox";
import InfoBox from "./infobox";

export default function Weather() {
  let [weatherInfo, setWeatherinfo] = useState({
    city: "delhi",
    temp: 20,
    tempMax: 10,
    tempMin: 30,
    humidity: 50,
    weather: "hazy",
    feels_like: 28.5,
  });
  let updateinfo = (result) => {
    setWeatherinfo(result);
  };
  return (
    <div>
      <SerchBox updateinfo={updateinfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
