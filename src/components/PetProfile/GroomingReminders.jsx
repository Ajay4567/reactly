export function GroomingReminders({ data }) {
    if (!data) return null;
    return (
      <div className="pet-card bg-white p-5 rounded-lg shadow-2xl w-full max-w-[500px] text-center">
        <h3 className="section-title text-lg font-bold  mb-[10px]">
          🛁 Grooming Reminders
        </h3>
        <ul className="info-list list-none p-0">
          <li className="py-1 px-0 text-base">
            <strong>Next Bath:</strong> {data.nextBath}
          </li>
          <li className="py-1 px-0 text-base">
            <strong>Nail Trim:</strong> {data.nextNailTrim}
          </li>
        </ul>
      </div>
    );
}
export default GroomingReminders;