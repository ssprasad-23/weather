import React, { useEffect, useState} from "react";
import { View, Text, ActivityIndicator, StyleSheet, FlatList, ImageBackground} from "react-native";
import { API_KEY } from "@env";
import Geolocation from '@react-native-community/geolocation';
import dayjs from 'dayjs';

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
  const bgimage = 'https://images.unsplash.com/photo-1570395141072-b3120d705942?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

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
    <ImageBackground source={{uri: bgimage}} style={styles.container}>
      <View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)'}}
      />
      <View>
          <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.location}>{weather.name}</Text>
            <Text style={styles.temp}>{Math.round(weather.main.temp)}°</Text>
          </View>

          <FlatList
            data={forecast}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ 
              flexGrow: 0, 
              height: 200,
              marginBottom: 40,
            }}
            contentContainerStyle={{
              gap: 10,
              paddingHorizontal: 25,
              height:150,
            }}
            renderItem={({item}) => (
                <View style={styles.forecast}>
                  <Text style={styles.date}>{dayjs(item.dt * 1000).format('ddd')}</Text>
                  <Text style={styles.date}>{dayjs(item.dt * 1000).format('hA')}</Text>
                  <Text style={styles.forecasttemp}>{Math.round(item.main.temp)}°</Text>
                </View>
            )}
          />
      </View>

    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
  },
  location: {
    fontFamily: 'Inter',
    fontSize: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  temp: {
    fontFamily: 'InterBlack',
    fontSize: 120,
    fontWeight: 'bold',
    color: 'white',
  },
  forecast:{
    backgroundColor: 'rgba(231, 222, 242 , 0.9)',
    padding: 10,
    aspectRatio: 9/16,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
  },
  forecasttemp: {
    fontFamily: 'InterBold',
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 10,
  }
});

export default Home;

