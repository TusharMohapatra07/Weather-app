# Weather App

A simple weather application built with Express.js and EJS for templating. This app allows you to get weather information using either coordinates or city name.

## Routes

### Home Route - `/`

The home route provides a form to get weather information in the user interface. You can use this form to:

- Get weather information by city name.
- Get weather information by latitude and longitude.

### Help Route - `/help`

The help route provides information on how to use the weather app.

### Weather Route - `/weather`

Use the `/weather` route to get weather data in JSON format.

- Using Coordinates

To get weather information using coordinates, use the following format:

    `/weather?info=coordinates&lat={LATITUDE}&long={LONGITUDE}`

- Using City Name

To get weather information using a city name, use the following format:

    `/weather?info=city&cityname={CITY NAME}`

## Usage

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/TusharMohapatra07/Weather-app.git
    cd weather-app
    ```

2.  Create a .env file with following fields:

    ```
    API_KEY(Required) =
    PORT(Optional) =
    ```

3.  **Install dependencies:**

    ```sh
    npm install
    ```

4.  **Start the server:**

    ```sh
    npm run dev
    ```

5.  **Open your browser and navigate to:**

    ```
    http://localhost:3000
    ```

## Examples

#### Get weather information using city name

http://localhost:3000/weather?info=city&cityname=London

#### Get weather information using coordinates

http://localhost:3000/weather?info=coordinates&lat=51.5074&long=-0.1278

## API

This app uses the OpenWeather API to fetch weather information. You will need an API key from OpenWeather to use this app.
