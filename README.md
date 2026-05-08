# 🌤️ Weather Dashboard

A modern, responsive weather dashboard built with React, TypeScript, and Tailwind CSS. Fetches real-time weather data from OpenWeather API and displays current conditions plus a 5-day forecast.

## ✨ Features

- 🔍 **Search by City**: Find weather for any city in the world
- 📍 **Current Location**: Get weather for your current GPS location
- 🌡️ **Current Conditions**: Temperature, humidity, wind speed, pressure, visibility
- 📅 **5-Day Forecast**: Future weather predictions
- 🎨 **Beautiful UI**: Modern gradient design with Tailwind CSS
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- ⚡ **Loading States**: Visual feedback during data fetching
- ❌ **Error Handling**: User-friendly error messages

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/seven822/weather-dashboard.git
cd weather-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in the root directory:
```bash
cp .env.example .env
```

4. Add your OpenWeather API key to `.env`:
```
REACT_APP_WEATHER_API_KEY=your_actual_api_key_here
```

5. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 📁 Project Structure

```
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx        # City search input
│   │   ├── WeatherCard.tsx      # Current weather display
│   │   └── ForecastCard.tsx     # 5-day forecast
│   ├── services/
│   │   └── weatherService.ts    # API integration
│   ├── types/
│   │   └── weather.ts           # TypeScript interfaces
│   ├── App.tsx                  # Main application
│   ├── index.tsx                # Entry point
│   └── index.css                # Global styles
├── .env.example                 # Environment variables template
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
└── package.json                 # Dependencies
```

## 🔑 Getting an API Key

1. Visit [OpenWeatherMap API](https://openweathermap.org/api)
2. Sign up for a free account
3. Go to "My API Keys" section
4. Copy your default API key
5. Paste it in your `.env` file

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Lucide React** - Icons
- **OpenWeather API** - Weather data

## 📖 API Endpoints Used

- `GET /weather` - Current weather by city name or coordinates
- `GET /forecast` - 5-day weather forecast

## 🎯 Usage

### Search by City
1. Enter a city name in the search bar
2. Click "Search" or press Enter
3. View current weather and forecast

### Get Current Location Weather
1. Click the "Current" button
2. Allow browser to access your location
3. Weather data for your location will load automatically

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🐛 Troubleshooting

### "Failed to fetch weather data"
- Verify your API key is correct
- Check your internet connection
- Ensure the city name is spelled correctly

### "Geolocation is not supported"
- Use a modern browser (Chrome, Firefox, Safari, Edge)
- Geolocation requires HTTPS (except localhost)

### API Rate Limit Exceeded
- Free tier has 60 calls/minute limit
- Wait a few minutes before making more requests

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📞 Support

If you have questions or need help, please open an issue on GitHub.

## 🌟 Future Enhancements

- [ ] Weather alerts and warnings
- [ ] Historical weather data
- [ ] Multiple language support
- [ ] Dark mode toggle
- [ ] Favorite cities list
- [ ] Air quality index
- [ ] UV index details
- [ ] Weather maps
- [ ] Local storage for preferences
- [ ] PWA support for offline mode

---

Made with ❤️ by seven822
