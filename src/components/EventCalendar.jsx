import { useState } from 'react'

const EVENTS = [
  { date: 3, title: 'Team Standup', time: '9:00 AM', color: '#6366f1' },
  { date: 7, title: 'Sprint Review', time: '2:00 PM', color: '#ec4899' },
  { date: 12, title: 'Design Sync', time: '11:00 AM', color: '#14b8a6' },
  { date: 15, title: 'Release Day', time: '4:00 PM', color: '#f59e0b' },
  { date: 20, title: 'Retro', time: '3:00 PM', color: '#8b5cf6' },
  { date: 22, title: '1:1 w/ Manager', time: '10:00 AM', color: '#ef4444' },
  { date: 24, title: 'Demo Day', time: '1:00 PM', color: '#6366f1' },
  { date: 28, title: 'Planning', time: '10:00 AM', color: '#06b6d4' },
]

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay()
}

export default function EventCalendar() {
  const [currentDate] = useState(new Date())
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const today = currentDate.getDate()
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)
  const monthName = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  const eventsByDate = {}
  for (const evt of EVENTS) {
    eventsByDate[evt.date] = evt
  }

  const cells = []

  for (let i = 0; i < firstDay; i++) {
    cells.push(
      <div key={`empty-${i}`} className="cal-cell empty" />
    )
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === today
    const event = eventsByDate[d]
    cells.push(
      <div key={d} className={`cal-cell${isToday ? ' today' : ''}`}>
        <span className="cal-cell-number">{d}</span>
        {event && (
          <div className="cal-cell-event" style={{ background: event.color + '22', borderLeftColor: event.color }}>
            <span className="cal-cell-event-title">{event.title}</span>
            <span className="cal-cell-event-time">{event.time}</span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="card calendar-card">
      <div className="card-header">
        <h2>Calendar</h2>
        <span className="card-badge">{monthName}</span>
      </div>

      <div className="cal-grid">
        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((d) => (
          <span key={d} className="cal-label">{d}</span>
        ))}
        {cells}
      </div>
    </div>
  )
}
