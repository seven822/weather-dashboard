import axios from 'axios';
import { WeatherData, ForecastData } from '../types/weather';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY || '';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

if (!API_KEY) {
  console.warn('REACT_APP_WEATHER_API_KEY is not set. Please add it to your .env file.');
}

export const fetchWeatherByCity = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });

    const data = response.data;
    return {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather[0].main,
      icon: data.weather[0].icon,
      pressure: data.main.pressure,
      visibility: data.visibility / 1000,
      uvIndex: 0,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      throw new Error('City not found');
    }
    throw new Error('Failed to fetch weather data');
  }
};

export const fetchWeatherByCoords = async (
  lat: number,
  lon: number
): Promise<WeatherData> => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
      },
    });

    const data = response.data;
    return {
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather[0].main,
      icon: data.weather[0].icon,
      pressure: data.main.pressure,
      visibility: data.visibility / 1000,
      uvIndex: 0,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
    };
  } catch (error) {
    throw new Error('Failed to fetch weather data for your location');
  }
};

export const fetchForecast = async (city: string): Promise<ForecastData[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });

    return response.data.list.slice(0, 8).map((item: any) => ({
      date: item.dt,
      temp: Math.round(item.main.temp),
      description: item.weather[0].main,
      icon: item.weather[0].icon,
      humidity: item.main.humidity,
      windSpeed: item.wind.speed,
    }));
  } catch (error) {
    throw new Error('Failed to fetch forecast data');
  }
};
