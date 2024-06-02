// fetch("http://localhost:3300/weather?info=city&cityname=bengaluru")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const form = document.querySelector(".first-form");
const cityInput = document.querySelector(".city");
const latitude = document.querySelector(".latitude");
const longitude = document.querySelector(".longitude");

form.addEventListener("submit", async (eve) => {
  eve.preventDefault();
  if (
    cityInput.value !== "" &&
    (latitude.value !== "" || longitude.value !== "")
  ) {
    alert("Please enter either city or latitude & longitude");
    return;
  }
  if (cityInput.value !== "") {
    const data = await sendData(
      `http://localhost:3300/weather?info=city&cityname=${cityInput.value}`
    );
    console.log(data);
    cityInput.value = "";
    return;
  }
  if (latitude.value !== "" && longitude.value !== "") {
    const data = await sendData(
      `http://localhost:3300/weather?info=coordinates&lat=${latitude.value}&long=${longitude.value}`
    );
    console.log(data);
    latitude.value = "";
    longitude.value = "";
    return;
  } else {
    alert("Please enter both latitude and longitude");
  }
});

const sendData = async function (url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
