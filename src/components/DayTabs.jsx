export default function DayTabs({ days, activeDay, onSelect }) {
  return (
    <nav className="day-tabs" aria-label="Day of week">
      {days.map((day) => (
        <button
          key={day.key}
          type="button"
          className={`day-tab ${activeDay === day.key ? 'active' : ''}`}
          onClick={() => onSelect(day.key)}
        >
          <span className="day-tab-short">{day.short}</span>
          <span className="day-tab-full">{day.label}</span>
        </button>
      ))}
    </nav>
  )
}
