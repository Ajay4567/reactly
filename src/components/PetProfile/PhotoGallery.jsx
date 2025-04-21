export function PhotoGallery({ images }) {
  if (!images || images.length === 0) return null;
  return (
    <div className="pet-card bg-white p-5 rounded-lg shadow-2xl w-full max-w-[500px] text-center">
      <h3 className="section-title text-lg font-bold  mb-[10px]">📷 Gallery</h3>
      <div className="photo-grid grid gap-[10px] justify-items-center [grid-template-columns:repeat(auto-fit,_minmax(100px,_1fr))]">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Pet pic ${idx + 1}`}
            className="photo-item w-[100px] h-[100px] object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
export default PhotoGallery;
