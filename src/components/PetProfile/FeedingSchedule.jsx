export function FeedingSchedule({ data }) {
    if (!data || data.length === 0) return null;
    return (
        <div className="pet-card">
            <h3 className="section-title">🍖 Feeding Schedule</h3>
            <ul className="info-list">
                {data.map((entry, idx) => (
                    <li key={idx}>• {entry.time} - {entry.food}</li>
                ))}
            </ul>
        </div>
    );
}
export default FeedingSchedule;