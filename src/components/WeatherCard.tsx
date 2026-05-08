import React from 'react';
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge } from 'lucide-react';
import { WeatherData } from '../types/weather';

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  const getWeatherIcon = (description: string) => {
    switch (description.toLowerCase()) {
      case 'clear':
        return <Sun className="w-16 h-16 text-yellow-400" />;
      case 'clouds':
        return <Cloud className="w-16 h-16 text-gray-400" />;
      case 'rain':
      case 'drizzle':
        return <CloudRain className="w-16 h-16 text-blue-400" />;
      default:
        return <Cloud className="w-16 h-16 text-gray-400" />;
    }
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg p-6 md:p-8 text-white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {data.city}, {data.country}
          </h2>
          <p className="text-blue-100 text-lg">{data.description}</p>
        </div>
        {getWeatherIcon(data.description)}
      </div>

      <div className="mb-2">
        <div className="text-5xl md:text-6xl font-bold">{data.temperature}°C</div>
        <p className="text-blue-100">Feels like {data.feelsLike}°C</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mt-6">
        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-5 h-5" />
            <span className="text-sm">Humidity</span>
          </div>
          <p className="text-2xl font-bold">{data.humidity}%</p>
        </div>

        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Wind className="w-5 h-5" />
            <span className="text-sm">Wind</span>
          </div>
          <p className="text-2xl font-bold">{data.windSpeed.toFixed(1)} m/s</p>
        </div>

        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Gauge className="w-5 h-5" />
            <span className="text-sm">Pressure</span>
          </div>
          <p className="text-2xl font-bold">{data.pressure} hPa</p>
        </div>

        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-5 h-5" />
            <span className="text-sm">Visibility</span>
          </div>
          <p className="text-2xl font-bold">{data.visibility.toFixed(1)} km</p>
        </div>

        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Sun className="w-5 h-5" />
            <span className="text-sm">Sunrise</span>
          </div>
          <p className="text-sm font-bold">{formatTime(data.sunrise)}</p>
        </div>

        <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Sun className="w-5 h-5" />
            <span className="text-sm">Sunset</span>
          </div>
          <p className="text-sm font-bold">{formatTime(data.sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
