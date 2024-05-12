const dotenv = require("dotenv").config();

const apiurl =
  `https://api.openweathermap.org/data/2.5/weather?lat={%LAT%}&lon={%LONG%}&appid={%API_KEY%}&units=metric`.replace(
    /{%API_KEY%}/g,
    process.env.API_KEY
  );

fetch(apiurl.replace(/{%LAT%}/g, 12.9716).replace(/{%LONG%}/g, 77.5946))
  .then((data) => data.json())
  .then((response) => console.log(response));
