import ThemeToggle from './components/ThemeToggle'
import DigitalClock from './components/DigitalClock'
import WeatherForecast from './components/WeatherForecast'
import EventCalendar from './components/EventCalendar'
import TodoList from './components/TodoList'
import CurrentEvents from './components/CurrentEvents'
import './App.css'

export default function App() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <ThemeToggle />
      </header>

      <main className="dashboard-grid">
        <DigitalClock />
        <WeatherForecast />
        <EventCalendar />
        <TodoList />
        <CurrentEvents />
      </main>
    </div>
  )
}
