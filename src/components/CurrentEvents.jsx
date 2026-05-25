const NEWS = [
  {
    id: 1,
    category: 'Breaking',
    title: 'G7 Leaders Agree on New Climate Finance Package',
    summary: 'World leaders commit $500B in climate adaptation funding for developing nations through 2030.',
    source: 'Reuters',
    time: '12 min ago',
    color: '#ef4444',
  },
  {
    id: 2,
    category: 'Tech',
    title: 'Apple Unveils On-Device AI Assistant at WWDC',
    summary: 'New personal AI runs entirely on-device with no cloud dependency, available on iPhone and Mac this fall.',
    source: 'The Verge',
    time: '43 min ago',
    color: '#6366f1',
  },
  {
    id: 3,
    category: 'Markets',
    title: 'S&P 500 Hits Record Close on Strong Jobs Data',
    summary: 'U.S. employers added 280,000 jobs in May, beating forecasts and pushing markets to new highs.',
    source: 'Bloomberg',
    time: '1h ago',
    color: '#22c55e',
  },
  {
    id: 4,
    category: 'World',
    title: 'EU Passes Landmark Digital Infrastructure Bill',
    summary: 'New regulations require tech companies to open interoperability standards across messaging platforms.',
    source: 'BBC News',
    time: '2h ago',
    color: '#f59e0b',
  },
  {
    id: 5,
    category: 'Science',
    title: 'CERN Detects New Subatomic Particle in Collider Data',
    summary: 'Physicists confirm a previously theorized particle that could reshape the Standard Model.',
    source: 'Nature',
    time: '3h ago',
    color: '#06b6d4',
  },
  {
    id: 6,
    category: 'Sports',
    title: 'NBA Finals Game 5: Dallas Takes 3-2 Series Lead',
    summary: 'Luka Doncic scores 41 points as the Mavericks edge closer to the championship on the road.',
    source: 'ESPN',
    time: '4h ago',
    color: '#ec4899',
  },
]

export default function CurrentEvents() {
  return (
    <div className="card events-card">
      <div className="card-header">
        <h2>Top Stories</h2>
        <span className="card-badge">Live</span>
      </div>

      <div className="events-list">
        {NEWS.map((item) => (
          <article key={item.id} className="event-item">
            <div className="event-meta">
              <span className="event-category" style={{ color: item.color }}>
                {item.category}
              </span>
              <span className="event-time">{item.time}</span>
            </div>
            <h3 className="event-title">{item.title}</h3>
            <p className="event-summary">{item.summary}</p>
            <span className="event-source">{item.source}</span>
          </article>
        ))}
      </div>
    </div>
  )
}
