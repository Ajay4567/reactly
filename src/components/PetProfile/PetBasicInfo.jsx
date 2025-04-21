export function PetBasicInfo({ data }) {
  if (!data) return null;
  const { name, breed, gender, age, weight, profileImage } = data;
  return (
    <div className="pet-card bg-white p-5 rounded-lg shadow-2xl w-full max-w-[500px] text-center">
      <img
        src={profileImage}
        alt={name}
        className="pet-profile-image w-[120px] h-[120px] rounded-full object-cover mb-[10px]"
      />
      <h2 className="pet-name text-lg font-bold">{name}</h2>
      <div className="pet-info-grid">
        <p className="my-1 mx-0 text-base">
          <strong>Breed:</strong> {breed}
        </p>
        <p className="my-1 mx-0 text-base">
          <strong>Age:</strong> {age}
        </p>
        <p className="my-1 mx-0 text-base">
          <strong>Gender:</strong> {gender}
        </p>
        <p className="my-1 mx-0 text-base">
          <strong>Weight:</strong> {weight}
        </p>
      </div>
    </div>
  );
}

export default PetBasicInfo;
