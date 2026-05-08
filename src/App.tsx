import React, { useState, useEffect } from 'react';
import { fetchWeatherByCity, fetchWeatherByCoords, fetchForecast } from './services/weatherService';
import { WeatherData, ForecastData } from './types/weather';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastCity, setLastCity] = useState<string>('London');

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherByCity(city);
      setWeather(data);
      setLastCity(city);
      const forecastData = await fetchForecast(city);
      setForecast(forecastData);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unable to fetch weather data. Please try again.';
      setError(errorMessage);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    setLoading(true);
    setError(null);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const data = await fetchWeatherByCoords(latitude, longitude);
          setWeather(data);
          setLastCity(data.city);
          const forecastData = await fetchForecast(data.city);
          setForecast(forecastData);
        } catch (err) {
          const errorMessage = err instanceof Error ? err.message : 'Unable to fetch weather data for your location';
          setError(errorMessage);
          console.error(err);
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError('Unable to access your location. Please check your browser permissions.');
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    handleSearch(lastCity);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            🌤️ Weather Dashboard
          </h1>
          <p className="text-gray-600">Get real-time weather and 5-day forecast</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 bg-white rounded-lg shadow-md p-4 md:p-6">
          <SearchBar
            onSearch={handleSearch}
            onLocationClick={handleLocationClick}
            loading={loading}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg mb-6 shadow-md">
            <p className="font-semibold">⚠️ Error</p>
            <p>{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && !weather && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-500 mb-4"></div>
            <p className="text-gray-600 text-lg">Loading weather data...</p>
          </div>
        )}

        {/* Weather Content */}
        {weather && !loading && (
          <>
            {/* Current Weather Card */}
            <div className="mb-8">
              <WeatherCard data={weather} />
            </div>

            {/* Forecast Card */}
            {forecast.length > 0 && (
              <div>
                <ForecastCard forecast={forecast} />
              </div>
            )}
          </>
        )}

        {/* Footer */}
        {weather && (
          <div className="mt-12 text-center text-gray-600 text-sm">
            <p>
              Last updated: {new Date().toLocaleString()}
            </p>
            <p className="mt-2">
              Data provided by{' '}
              <a
                href="https://openweathermap.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                OpenWeatherMap
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
