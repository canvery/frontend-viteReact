import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./StickyNotes.css";

function StickyNotes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || "Guest";

  const handleAddNote = () => {
    if (newNote) {
      const colors = ["#FFDDC1", "#FFABAB", "#FFC3A0", "#D4A5A5", "#E2F0CB"];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setNotes([...notes, { text: newNote, color: randomColor }]);
      setNewNote("");
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="notes-container">
      <h1>Sticky Notes</h1>
      <div className="notes-box">
        <h2>Welcome, {username}</h2>
        <textarea
          placeholder="Write a note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
        />
        <div className="button-group">
          <button onClick={handleAddNote}>Add Note</button>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
        <div className="notes-display">
          {notes.map((note, index) => (
            <div
              key={index}
              className="note"
              style={{ backgroundColor: note.color }}
            >
              {note.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StickyNotes;
