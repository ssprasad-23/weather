# React Native Weather App

A modern, location-based weather application built with React Native that provides real-time weather information and forecasts.

![Weather App Screenshot](https://github.com/ssprasad-23/Weather/assets/89695486/680903e4-0933-4f11-8717-8a23f38277a1)

## Features

- **Real-time Weather Data**: Fetches and displays current weather conditions using OpenWeatherMap API
- **Location-based**: Automatically detects user's location for accurate weather information
- **5-Day Forecast**: Shows upcoming weather predictions with temperature trends
- **Modern UI**: Clean and intuitive interface with dynamic background
- **Performance Optimized**: Efficient data fetching and rendering
- **Cross-platform**: Works on both iOS and Android devices

## Technical Stack

- **React Native**: Core framework for mobile development
- **TypeScript**: For type-safe code and better development experience
- **OpenWeatherMap API**: Weather data source
- **@react-native-community/geolocation**: Location services
- **react-native-dotenv**: Environment variable management
- **dayjs**: Date formatting and manipulation

## Technical Highlights

- Implemented custom TypeScript interfaces for type-safe weather data handling
- Used React hooks (useState, useEffect) for state management and side effects
- Integrated native geolocation services with proper error handling
- Built responsive layouts using React Native's StyleSheet and Flexbox
- Followed modern React Native best practices and coding standards

## Getting Started

1. Clone the repository:
```sh
git clone https://github.com/ssprasad-23/Weather.git
```

2. Install dependencies:
```sh
cd Weather
npm install
```

3. Create a `.env` file and add your OpenWeatherMap API key:
```sh
API_KEY=your_api_key_here
```

4. Run the app:
```sh
# For iOS
npx react-native run-ios

# For Android
npx react-native run-android
```

## Architecture

- **App.tsx**: Main application entry point
- **Weather.tsx**: Core weather component with business logic
- **Types**: Strong TypeScript typing for weather data models
- **Styling**: Modular StyleSheet implementation for maintainable UI
- **API Integration**: Structured approach to external data fetching

## Learning Outcomes

- Deep understanding of React Native's component lifecycle
- Experience with TypeScript in a real-world mobile application
- Implementation of geolocation services in mobile apps
- API integration and data handling
- Mobile-specific UI/UX considerations

## Future Enhancements

- Add weather alerts and notifications
- Implement weather maps visualization
- Add multiple location support
- Enhance UI with animations
- Add unit tests for core functionality

## Contact

- Email: pshynal23@gmail.com
