import { styled } from "goober";
import { useEffect, useState } from "react";
import { Subtitle } from "../core/Typography";

interface WeatherData {
  temperature: number;
  weatherCode: number;
}

// Weather code mappings from Open-Meteo
const getWeatherEmoji = (code: number): string => {
  if (code === 0) return "☀️";
  if (code <= 3) return "🌤️";
  if (code <= 49) return "🌫️";
  if (code <= 67) return "🌧️";
  if (code <= 77) return "🌨️";
  if (code <= 82) return "🌧️";
  if (code <= 86) return "🌨️";
  return "⛈️";
};

const getWeatherDescription = (code: number): string => {
  if (code === 0) return "Clear";
  if (code <= 3) return "Partly Cloudy";
  if (code <= 49) return "Foggy";
  if (code <= 67) return "Rainy";
  if (code <= 77) return "Snowy";
  if (code <= 82) return "Rain Showers";
  if (code <= 86) return "Snow Showers";
  return "Thunderstorm";
};

export const Location = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      const amsterdamTime = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Amsterdam",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
      setCurrentTime(amsterdamTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Fetch weather data
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Amsterdam coordinates
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=52.3676&longitude=4.9041&current=temperature_2m,weather_code&timezone=Europe/Amsterdam",
        );
        const data = await response.json();
        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          weatherCode: data.current.weather_code,
        });
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch weather:", error);
        setLoading(false);
      }
    };

    fetchWeather();
    // Refresh weather every 10 minutes
    const interval = setInterval(fetchWeather, 600000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LocationContainer>
      <LocationRow>
        <span>Based in Amsterdam, Noord-Holland</span>
        {currentTime && <Divider>•</Divider>}
        {currentTime && <span>🕐 {currentTime}</span>}
        {!loading && weather && <Divider>•</Divider>}
        {!loading && weather && (
          <span>
            {getWeatherEmoji(weather.weatherCode)}{" "}
            {getWeatherDescription(weather.weatherCode)}, {weather.temperature}
            °C
          </span>
        )}
      </LocationRow>
    </LocationContainer>
  );
};

const LocationContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const LocationRow = styled(Subtitle)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Divider = styled("span")`
  opacity: 1;
`;
