const WEATHER_DATA = [
  { day: 'Mon', icon: '☀️', condition: 'Sunny', high: 82, low: 65 },
  { day: 'Tue', icon: '⛅', condition: 'Partly Cloudy', high: 78, low: 62 },
  { day: 'Wed', icon: '\u{1F326}️', condition: 'Light Rain', high: 71, low: 58 },
  { day: 'Thu', icon: '\u{1F327}️', condition: 'Rainy', high: 66, low: 55 },
  { day: 'Fri', icon: '⛈️', condition: 'Thunderstorm', high: 68, low: 57 },
  { day: 'Sat', icon: '☀️', condition: 'Sunny', high: 79, low: 63 },
  { day: 'Sun', icon: '\u{1F324}️', condition: 'Clear', high: 84, low: 67 },
]

export default function WeatherForecast() {
  const today = WEATHER_DATA[0]

  return (
    <div className="card weather-card">
      <div className="card-header">
        <h2>Weather</h2>
        <span className="card-badge">7-Day Forecast</span>
      </div>

      <div className="weather-today">
        <span className="weather-today-icon">{today.icon}</span>
        <div className="weather-today-info">
          <span className="weather-today-temp">{today.high}&deg;</span>
          <span className="weather-today-condition">{today.condition}</span>
        </div>
      </div>

      <div className="weather-forecast">
        {WEATHER_DATA.map((day) => (
          <div key={day.day} className="weather-day">
            <span className="weather-day-name">{day.day}</span>
            <span className="weather-day-icon">{day.icon}</span>
            <span className="weather-day-temps">
              <span className="weather-high">{day.high}&deg;</span>
              <span className="weather-low">{day.low}&deg;</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
