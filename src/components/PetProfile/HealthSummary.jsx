export function HealthSummary({ data }) {
  if (!data) return null;
  return (
    <div className="pet-card bg-white p-5 rounded-lg shadow-2xl w-full max-w-[500px] text-center">
      <h3 className="section-title text-lg font-bold  mb-[10px]">
        🩺 Health Summary
      </h3>
      <ul className="info-list list-none p-0">
        <li className="py-1 px-0 text-base">
          <strong>Vaccines:</strong> {data.vaccines}
        </li>
        <li className="py-1 px-0 text-base">
          <strong>Allergies:</strong> {data.allergies}
        </li>
        <li className="py-1 px-0 text-base">
          <strong>Vet:</strong> {data.vet}
        </li>
      </ul>
    </div>
  );
}
export default HealthSummary;
