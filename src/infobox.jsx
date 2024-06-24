import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
import "./infobox.css";
export default function InfoBox({ info }) {
  const img_url =
    "https://images.unsplash.com/photo-1487621167305-5d248087c724?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  return (
    <div className="infobox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={img_url}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temprature =&nbsp;{info.temp}&deg;C</p>
              <p>Max Temprature =&nbsp;{info.tempMax}&deg;C</p>
              <p>Min Temprature =&nbsp;{info.tempMin}&deg;C</p>
              <p>Humidity =&nbsp;{info.humidity}</p>
              <p>
                the weather can be described as {info.weather} and feels like
                &nbsp;{info.feels_like} &deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
