export function HealthSummary({ data }) {
    if (!data) return null;
    return (
        <div className="pet-card">
            <h3 className="section-title">🩺 Health Summary</h3>
            <ul className="info-list">
                <li><strong>Vaccines:</strong> {data.vaccines}</li>
                <li><strong>Allergies:</strong> {data.allergies}</li>
                <li><strong>Vet:</strong> {data.vet}</li>
            </ul>
        </div>
    );
}
export default HealthSummary;