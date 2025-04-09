export function GroomingReminders({ data }) {
    if (!data) return null;
    return (
        <div className="pet-card">
            <h3 className="section-title">🛁 Grooming Reminders</h3>
            <ul className="info-list">
                <li><strong>Next Bath:</strong> {data.nextBath}</li>
                <li><strong>Nail Trim:</strong> {data.nextNailTrim}</li>
            </ul>
        </div>
    );
}
export default GroomingReminders;