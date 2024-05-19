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

// app.get("/weather", async (req, res) => {
//   const data = await fetch(
//     apiurl.replace(/{%LAT%}/g, 12.9716).replace(/{%LONG%}/g, 77.5946)
//   );
//   const response = await data.json();
//   res.send(response);
// });
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/help", (req, res) => {
  res.render("help");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(port, () => {
  console.log(`app serving on http://localhost:${port}`);
});
