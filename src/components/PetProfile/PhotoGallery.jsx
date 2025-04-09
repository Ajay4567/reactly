export function PhotoGallery({ images }) {
    if (!images || images.length === 0) return null;
    return (
        <div className="pet-card">
            <h3 className="section-title">📷 Gallery</h3>
            <div className="photo-grid">
                {images.map((src, idx) => (
                    <img
                        key={idx}
                        src={src}
                        alt={`Pet pic ${idx + 1}`}
                        className="photo-item"
                    />
                ))}
            </div>
        </div>
    );
}
export default PhotoGallery;