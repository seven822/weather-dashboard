export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
  pressure: number;
  visibility: number;
  uvIndex: number;
  sunrise: number;
  sunset: number;
}

export interface ForecastData {
  date: number;
  temp: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}
