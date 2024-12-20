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

## Setup Instructions :

1.  **Clone the Repository (if applicable):**

    If this project is hosted on a version control system like Git:

    ```bash
    git clone https://github.com/TusharMohapatra07/Weather-app.git
    cd Weather-app
    ```

2.  **Install Dependencies:**

    This project uses Node.js and npm. Install the project dependencies:

    ```bash
    npm install
    ```

    This command installs all packages listed in `package.json` into the `node_modules` directory.

3.  **Start the Development Server:**

    This project is configured with a development server that automatically reloads the browser when you make changes. To start it, use the following command:

    ```bash
    npm run dev
    ```

    **Important:** Once you run `npm dev`, the server will usually run in your terminal. You'll need to keep this terminal window open while you're developing. The server will provide you with a local URL (usually `http://localhost:<port>` or `http://127.0.0.1:<port>`) that you can open in your web browser to view the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
