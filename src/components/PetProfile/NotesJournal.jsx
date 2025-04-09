export function NotesJournal({ notes }) {
    if (!notes || notes.length === 0) return null;
    return (
        <div className="pet-card">
            <h3 className="section-title">📝 Notes / Journal</h3>
            <ul className="info-list">
                {notes.map((note, idx) => (
                    <li key={idx} className="note-item">
                        <p className="note-date">{note.date}</p>
                        <p>{note.entry}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default NotesJournal;