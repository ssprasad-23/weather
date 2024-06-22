import React, { useEffect, useState} from "react";
import { View, Text, ActivityIndicator, StyleSheet, FlatList} from "react-native";
import { API_KEY } from "@env";
import Geolocation from '@react-native-community/geolocation';

const BASE_URL = `https://api.openweathermap.org/data/2.5/`;

type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};

type Weather = {
  name: string;
  main: MainWeather;
};

type WeatherForecast = {
  main: MainWeather;
  dt: number;
};

const Home = () => {
  const [weather, setWeather] = useState<Weather>();
  const [forecast, setForecast] = useState<WeatherForecast[]>();

  useEffect(() => {
    Geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            console.log(latitude, longitude);

            const results = await fetch(`${BASE_URL}weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
            const forecast = await fetch(`${BASE_URL}forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
            const data = await results.json();
            const forecastData = await forecast.json();
            console.log(JSON.stringify(forecastData, null, 2));
            console.log(JSON.stringify(data, null, 2));
            setWeather(data);
            setForecast(forecastData.list);
        },
        (error) => console.log(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  if (!weather) {
    return <ActivityIndicator />;
  }
    
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{weather.name}</Text>
      <Text style={styles.temp}>{weather.main.temp}</Text>
      <FlatList
        data={forecast}
        horizontal
        contentContainerStyle={{
          gap: 10,
          height:108,
        }}
        renderItem={({item}) => (
          <View style={styles.forecast}>
            <Text>{item.main.temp}°</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    location: {
      fontFamily: 'InterSemi',
      fontSize: 40,
    },
    temp: {
      fontFamily: 'InterBlack',
      fontSize: 100,
      fontWeight: 'bold',
      color: 'gray'
    },
    forecast:{
      backgroundColor: 'snow',
      padding: 10,
      aspectRatio: 9/16,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default Home;
