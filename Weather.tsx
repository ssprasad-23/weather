import React, { useEffect, useState} from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { API_KEY } from "@env";
import Geolocation from '@react-native-community/geolocation';

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather`;

type Weather = {
    name: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
};

const Home = () => {
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    Geolocation.getCurrentPosition(
        async (position) => {
            const { latitude, longitude } = position.coords;
            console.log(latitude, longitude);

            const results = await fetch(
                `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            );
            const data = await results.json();
            console.log(JSON.stringify(data, null, 2));
            setWeather(data);
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
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 0,
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
      color: 'gray'
    }
});

export default Home;
