import React, { useEffect, useState} from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { API_KEY } from "@env";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.787419&lon=-122.448586&appid=${API_KEY}&units=imperial`;

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
    
    const fetchWeather = async () => {
        //fetch data from api
        const results = await fetch (url);
        const data = await results.json();
        console.log(JSON.stringify(data, null, 2));
        setWeather(data);
    }    

    useEffect(() => {
        fetchWeather();
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