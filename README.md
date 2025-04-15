WeatherApp
A React Native CLI weather application that fetches and displays current weather and forecast data based on the user's geolocation. This app uses the OpenWeatherMap API for weather data and @react-native-community/geolocation for geolocation services.

Features
-Fetches current weather data based on user's geolocation.
-Displays a 5-day weather forecast.
-Background image.
-Displays temperature.
-Smooth and intuitive UI.

Installation
1. Clone the repository:
   https://github.com/ssprasad-23/Weather.git

2. Create a .env file in the root of the directory and add your OpenWeatherMap API key:
   API_KEY=


Running the app
1. Start the emtro bundler:
   npx react-native start

2. Run the app on the desired platform:
   * For IOS:
      npx react-native run-ios
   * For Android:
      npx react-native run-android

Dependencies
* React Native
* OpenWeatherMap API
* @react-native-community/geolocation
* dayjs
* react-native-dotenv

Code Structure
* App.tsx: Entry point of the application.
* components/: Contains reusable UI components.
* screens/: Contains the main screens of the application.
* styles/: Contains style definitions for the components and screens.


<img width="422" alt="Screenshot" src="https://github.com/ssprasad-23/Weather/assets/89695486/680903e4-0933-4f11-8717-8a23f38277a1">
