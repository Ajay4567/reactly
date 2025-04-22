export function NotesJournal({ notes }) {
  if (!notes || notes.length === 0) return null;
  return (
    <div className="pet-card bg-white p-5 rounded-lg shadow-2xl w-full max-w-[500px] text-center">
      <h3 className="section-title text-lg font-bold  mb-[10px]">
        📝 Notes / Journal
      </h3>
      <ul className="info-list list-none p-0">
        {notes.map((note, idx) => (
          <li
            key={idx}
            className="note-item bg-[#eef] p-[10px] rounded-md mb-1"
          >
            <p className="note-date text-base text-[#555]">{note.date}</p>
            <p>{note.entry}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default NotesJournal;
