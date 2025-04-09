export function PetBasicInfo({ data }) {
    if (!data) return null;
    const { name, breed, gender, age, weight, profileImage } = data;
    return (
        <div className="pet-card">
            <img src={profileImage} alt={name} className="pet-profile-image" />
            <h2 className="pet-name">{name}</h2>
            <div className="pet-info-grid">
                <p><strong>Breed:</strong> {breed}</p>
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Weight:</strong> {weight}</p>
            </div>
        </div>
    );
}

export default PetBasicInfo;