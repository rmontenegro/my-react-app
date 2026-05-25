import { useState, useEffect } from 'react'

export default function DigitalClock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours().toString().padStart(2, '0')
  const minutes = time.getMinutes().toString().padStart(2, '0')
  const seconds = time.getSeconds().toString().padStart(2, '0')

  const dateStr = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="card clock-card">
      <div className="clock-time">
        <span className="clock-digits">
          {hours}
          <span className="clock-colon">:</span>
          {minutes}
        </span>
        <span className="clock-seconds">{seconds}</span>
      </div>
      <div className="clock-date">{dateStr}</div>
    </div>
  )
}
