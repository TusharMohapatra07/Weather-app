// fetch("http://localhost:3300/weather?info=city&cityname=bengaluru")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

const form = document.querySelector(".form");
const cityInput = document.querySelector(".city");
const latitude = document.querySelector(".latitude");
const longitude = document.querySelector(".longitude");
const placeholder = document.querySelector(".placeholder");

form.addEventListener("submit", async (eve) => {
  eve.preventDefault();
  try {
    if (
      cityInput.value !== "" &&
      (latitude.value !== "" || longitude.value !== "")
    ) {
      alert("Please enter either city or latitude & longitude");
      return;
    }
    if (cityInput.value !== "") {
      const data = await sendData(
        `http://localhost:10000/weather?info=city&cityname=${cityInput.value}`
      );
      display(data);
      cityInput.value = "";
      return;
    }
    if (latitude.value !== "" && longitude.value !== "") {
      const data = await sendData(
        `http://localhost:10000/weather?info=coordinates&lat=${latitude.value}&long=${longitude.value}`
      );
      display(data);
      latitude.value = "";
      longitude.value = "";
      return;
    } else {
      alert("Please enter both latitude and longitude");
    }
  } catch (err) {
    display({
      message: "Unexpected error",
    });
  }
});

const sendData = async function (url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const display = function (data) {
  placeholder.innerHTML = "";
  if (Object.hasOwn(data, "message")) {
    const h4 = document.createElement("h4");
    h4.className = "error";
    h4.innerText = `${data.message}`;
    placeholder.appendChild(h4);
    return;
  }
  const div = document.createElement("div");
  div.className = "weather-body";
  div.innerHTML = `<div class="weather-element">
        <div class="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 190 190"
            xml:space="preserve"
          >
            <path
              fill="#282828"
              d="M100.232 149.198c-2.8 0-5.4-1.8-7.2-5.2-22.2-41-22.4-41.4-22.4-41.6-3.2-5.1-4.9-11.3-4.9-17.6 0-19.1 15.5-34.6 34.6-34.6s34.6 15.5 34.6 34.6c0 6.5-1.8 12.8-5.2 18.2 0 0-1.2 2.4-22.2 41-1.9 3.4-4.4 5.2-7.3 5.2zm.1-95c-16.9 0-30.6 13.7-30.6 30.6 0 5.6 1.5 11.1 4.5 15.9.6 1.3 16.4 30.4 22.4 41.5 2.1 3.9 5.2 3.9 7.4 0 7.5-13.8 21.7-40.1 22.2-41 3.1-5 4.7-10.6 4.7-16.3-.1-17-13.8-30.7-30.6-30.7z"
            />
            <path
              fill="#282828"
              d="M100.332 105.598c-10.6 0-19.1-8.6-19.1-19.1s8.5-19.2 19.1-19.2c10.6 0 19.1 8.6 19.1 19.1s-8.6 19.2-19.1 19.2zm0-34.3c-8.3 0-15.1 6.8-15.1 15.1s6.8 15.1 15.1 15.1 15.1-6.8 15.1-15.1-6.8-15.1-15.1-15.1z"
            />
          </svg>
        </div>
        <p class="name">Location :</p>
        <p class="weather-value">${data.name}</p>
      </div>
      <div class="weather-element">
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 70">
            <path
              d="M53.85 47.85A27 27 0 0 1 24 57.8V56l3-3v-4l4-4v-3l4 4h5l2-2h8z"
            />
            <path
              d="M42 20.59v2.56L38.07 27H31l-5.36 5.26L31 37.51v5.06L27.44 39h-4.58L16 32.11V24.2L11.8 20h-4A27 27 0 0 1 32 5a26.55 26.55 0 0 1 7.06.94L36 9h-6v4l4 4h4.33z"
            />
            <path
              d="M32 60a28 28 0 1 1 28-28 28 28 0 0 1-28 28zm0-54a26 26 0 1 0 26 26A26 26 0 0 0 32 6z"
            />
          </svg>
        </div>
        <p class="name">Country :</p>
        <p class="weather-value">${data.sys?.country}</p>
      </div>
      <div class="weather-element">
        <div class="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 70 70"
            xml:space="preserve"
            style="
              fill-rule: evenodd;
              clip-rule: evenodd;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 2;
            "
          >
            <path
              d="M23.634 36.002a2.284 2.284 0 0 0 2.162-1.554 6.098 6.098 0 0 1 5.813-4.214 6.166 6.166 0 0 1 5.842 4.204 2.25 2.25 0 0 0 2.133 1.532c.964.032 1.949.032 1.949.032a6.498 6.498 0 0 1 6.5 6.5v.003a6.501 6.501 0 0 1-6.5 6.499H21.684a6.5 6.5 0 0 1-6.499-6.499v-.003a6.497 6.497 0 0 1 6.499-6.5h1.95z"
              style="fill: none; stroke: #222a33; stroke-width: 1.5px"
            />
            <path
              d="M11.864 44.68a6.499 6.499 0 0 1-4.5-6.184v-.003a6.499 6.499 0 0 1 6.499-6.5h3.778a6.163 6.163 0 0 1 6.147-5.768c2.76 0 5.099 1.82 5.88 4.324M37.232 26.996a6.107 6.107 0 0 1 2.98-.771 6.165 6.165 0 0 1 5.842 4.205 2.251 2.251 0 0 0 2.133 1.531c.964.032 1.95.032 1.95.032a6.501 6.501 0 0 1 6.499 6.5v.003a6.499 6.499 0 0 1-6.499 6.5h-2.6"
              style="fill: none; stroke: #222a33; stroke-width: 1.5px"
            />
            <path
              d="M38.864 25.996c0-3.312 2.688-6 6-6a6.003 6.003 0 0 1 5.658 8M44.864 14.996v2M52.642 18.217l-1.414 1.415M55.864 25.996h-2M37.085 18.217l1.415 1.415"
              style="fill: none; stroke: #222a33; stroke-width: 1.5px"
            />
          </svg>
        </div>
        <p class="name">Weather :</p>
        <p class="weather-value">${data.weather[0]?.main}</p>
      </div>
      <div class="weather-element">
        <div class="logo temperature">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 150 150"
            style="enable-background: new 0 0 128 128"
            xml:space="preserve"
          >
            <path
              style="fill: #171617"
              d="M64.595 127.81c-.162 0-.321-.001-.485-.004-16.868-.294-30.978-13.871-30.978-30.266 0-11.018 5.067-19.474 11.236-24.612v-60.58C44.368 5.612 50.62.191 57.353.191h11.106c6.733 0 12.924 5.421 12.924 12.157v61.021c8.225 6.253 14.118 16.595 12.875 27.494l-.179.001c-1.736 15.2-14.738 26.946-29.484 26.946zM57.352 8.42c-2.453 0-4.76 1.473-4.76 3.927v65.031l-1.838 1.11c-6.389 3.559-9.552 9.969-9.552 19.052 0 11.981 10.556 22.286 23.005 22.502 10.941.262 20.657-8.622 21.963-20.06.983-8.614-3.114-16.489-11.181-21.064l-1.833-1.116V12.347c0-2.454-2.246-3.927-4.699-3.927H57.352zm9.635 74.95V20.765h-8.225v63.2c-8.225 2.226-9.785 7.609-9.785 13.925 0 8.308 6.199 15.038 14.503 15.038s14.934-6.73 14.934-15.038c0-6.937-3.202-12.786-11.427-14.52z"
            />
          </svg>
        </div>
        <p class="name">Temperature :</p>
        <p class="weather-value">${data.main?.temp}&deg;C</p>
      </div>
      <div class="weather-element">
        <div class="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            xml:space="preserve"
          >
            <path
              fill="#282828"
              d="M100.382 157.898c-20.1 0-36.4-17.1-36.4-38.2 0-24.4 32.7-75.5 33-76 .4-.6 1.4-2.2 3.2-2.2h.4c1.7 0 2.6.9 3.1 1.7.3.5 33 52.1 32.9 76.6 0 21-16.3 38.1-36.2 38.1zm.1-112.3c-.1.1-.1.2-.2.3-.3.5-32.3 50.9-32.3 73.8 0 18.9 14.5 34.2 32.3 34.2h.1c17.8 0 32.2-15.3 32.3-34.1 0-19.2-23-59.8-32.2-74.2z"
            />
            <path
              fill="#282828"
              d="M83.282 134.998c-.7 0-1.5-.4-1.8-1.1-2.3-4.9-3.5-10.2-3.5-15.7 0-13.3 10.4-35.2 19.2-51.2.5-1 1.7-1.3 2.7-.8s1.3 1.7.8 2.7c-12.2 22.3-18.7 39.4-18.7 49.3 0 5 1.1 9.6 3.1 13.9.5 1 .1 2.2-.9 2.7-.3.1-.6.2-.9.2z"
            />
          </svg>
        </div>
        <p class="name">Humidity :</p>
        <p class="weather-value">${data.main?.humidity} g/Kg</p>
      </div>
      <div class="weather-element">
        <div class="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 70 80"
            xml:space="preserve"
            style="
              fill-rule: evenodd;
              clip-rule: evenodd;
              stroke-linecap: round;
              stroke-linejoin: round;
              stroke-miterlimit: 2;
            "
          >
            <path
              d="M17 29.307h18M39.5 29.307h10.848A5.652 5.652 0 0 0 56 23.655v-.003A5.651 5.651 0 0 0 50.348 18h-4.372M17 34.693h8M33.446 34.693h16.902A5.651 5.651 0 0 1 56 40.345v.003A5.651 5.651 0 0 1 50.348 46h-4.372M8 17.921h22.726a2.719 2.719 0 0 0 2.72-2.72V15.2a2.719 2.719 0 0 0-2.72-2.72h-2.291M8 46.079h22.726a2.719 2.719 0 0 1 2.72 2.72v.001a2.719 2.719 0 0 1-2.72 2.72h-2.291"
              style="fill: none; stroke: #222a33; stroke-width: 1.5px"
            />
          </svg>
        </div>
        <p class="name">Wind Speed :</p>
        <p class="weather-value">${data.wind?.speed} m/s</p>
      </div>`;
  placeholder.appendChild(div);
};
