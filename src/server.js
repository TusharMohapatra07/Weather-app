const dotenv = require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

const apiurl =
  `https://api.openweathermap.org/data/2.5/weather?lat={%LAT%}&lon={%LONG%}&appid={%API_KEY%}&units=metric`.replace(
    /{%API_KEY%}/g,
    process.env.API_KEY
  );

app.get("/wheather", async (req, res) => {
  const data = await fetch(
    apiurl.replace(/{%LAT%}/g, 12.9716).replace(/{%LONG%}/g, 77.5946)
  );
  const response = await data.json();
  res.send(response);
});

app.listen(port, () => {
  console.log(`app serving on localhost:${port}`);
});
