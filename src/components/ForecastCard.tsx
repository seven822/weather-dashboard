import React from 'react';
import { Cloud, CloudRain, Sun, CloudSnow } from 'lucide-react';
import { ForecastData } from '../types/weather';

interface ForecastCardProps {
  forecast: ForecastData[];
}

const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  const getWeatherIcon = (description: string) => {
    switch (description.toLowerCase()) {
      case 'clear':
        return <Sun className="w-8 h-8 text-yellow-400" />;
      case 'clouds':
        return <Cloud className="w-8 h-8 text-gray-400" />;
      case 'rain':
      case 'drizzle':
        return <CloudRain className="w-8 h-8 text-blue-400" />;
      case 'snow':
        return <CloudSnow className="w-8 h-8 text-blue-200" />;
      default:
        return <Cloud className="w-8 h-8 text-gray-400" />;
    }
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        📅 5-Hour Forecast
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
        {forecast.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 md:p-4 text-center hover:shadow-lg transition-shadow"
          >
            <p className="text-xs md:text-sm text-gray-600 font-semibold mb-2">
              {formatDate(item.date).split(' ').pop()}
            </p>
            <p className="text-xs text-gray-500 mb-2">
              {formatDate(item.date).split(' ').slice(0, 2).join(' ')}
            </p>
            <div className="flex justify-center mb-2">
              {getWeatherIcon(item.description)}
            </div>
            <p className="text-lg md:text-xl font-bold text-gray-800 mb-1">
              {item.temp}°C
            </p>
            <p className="text-xs text-gray-600 mb-2">{item.description}</p>
            <div className="flex items-center justify-center gap-1 text-xs text-blue-600">
              <span>💧 {item.humidity}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
