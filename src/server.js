const dotenv = require("dotenv").config();
const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;
const app = express();

const publicPath = path.resolve(__dirname, "..", "public");
const viewsPath = path.resolve(__dirname, "..", "views");
app.set("views", viewsPath);
app.set("view engine", "ejs");
app.use(express.static(publicPath));

const latLongUrl =
  `https://api.openweathermap.org/data/2.5/weather?lat={%LAT%}&lon={%LONG%}&appid={%API_KEY%}&units=metric`.replace(
    /{%API_KEY%}/g,
    process.env.API_KEY
  );

const cityUrl =
  `https://api.openweathermap.org/data/2.5/weather?q={%CITY_NAME%}&appid={%API_KEY%}`.replace(
    /{%API_KEY%}/g,
    process.env.API_KEY
  );

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/help", (req, res) => {
  res.render("help");
});

app.get("/weather", async (req, res) => {
  const { query } = req;
  if (Object.hasOwn(query, "info")) {
    if (
      query.info === "coordinates" &&
      Object.hasOwn(query, "lat") &&
      Object.hasOwn(query, "long")
    ) {
      const data = await fetch(
        latLongUrl
          .replace(/{%LAT%}/g, query.lat)
          .replace(/{%LONG%}/g, query.long)
      );
      const json = await data.json();
      return res.send(json);
    } else if (query.info === "city" && Object.hasOwn(query, "cityname")) {
      const data = await fetch(
        cityUrl.replace(/{%CITY_NAME%}/g, query.cityname)
      );
      const json = await data.json();
      return res.send(json);
    } else {
      return res.sendStatus(404);
    }
  } else {
    return res.sendStatus(400);
  }
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`app serving on http://localhost:${port}`);
});
