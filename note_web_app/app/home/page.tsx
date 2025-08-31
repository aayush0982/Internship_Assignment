"use client";

import { useEffect, useState } from "react";

interface Note {
  id: number;
  title: string;
}

const HomePage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNoteTitle, setNewNoteTitle] = useState<string>("");

  useEffect(() => {
    const storedName = localStorage.getItem('userName') || "";
    const storedEmail = localStorage.getItem('userEmail') || "";
    setName(storedName);
    setEmail(storedEmail);

    if (storedEmail) {
      const notesJson = localStorage.getItem(storedEmail);
      if (notesJson) {
        setNotes(JSON.parse(notesJson));
      }
    }
  }, []);

  const handleAddNote = () => {
    if (newNoteTitle.trim() === "") return;
    
    const newNote: Note = { 
      id: Date.now(), 
      title: newNoteTitle 
    };

    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);

    if (email) {
      localStorage.setItem(email, JSON.stringify(updatedNotes));
    }

    setNewNoteTitle("");
  };

  const handleDeleteNote = (id: number) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);

    if (email) {
      localStorage.setItem(email, JSON.stringify(updatedNotes));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white px-4 py-4 md:px-6 md:py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
              <img src="/assets/logo.png" alt="HD Logo" className="w-8 h-8" />
            </div>
            <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>

          {/* Sign Out Button */}
          <button className="text-blue-500 hover:text-blue-600 font-medium text-sm md:text-base">
            <p><u>Sign Out</u></p>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 md:px-6 md:py-8">
        <div className="bg-white rounded-2xl p-6 mb-6 md:p-8 md:mb-8 shadow-[0px_2px_6px_0px_#00000096]">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Welcome, {name || "User"} !
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Email: {email || "No email found"}
          </p>
        </div>

        {/* Create Note Input and Button */}
        <div className="mb-6">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-xl p-3 mb-3 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Enter note title..."
            value={newNoteTitle}
            onChange={(e) => setNewNoteTitle(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddNote()}
          />
          <button
            onClick={handleAddNote}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-2xl transition-colors text-lg md:text-xl"
          >
            Create Note
          </button>
        </div>

        {/* Notes Section - Dynamic notes array */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 md:mb-6">
            Notes ({notes.length})
          </h3>

          {notes.length === 0 ? (
            <div className="bg-white rounded-2xl p-6 text-center shadow-[0px_2px_6px_0px_#00000096]">
              <p className="text-gray-500">No notes yet. Create your first note!</p>
            </div>
          ) : (
            <div className="space-y-3 md:space-y-4">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="bg-white rounded-2xl p-4 md:p-6 flex items-center justify-between shadow-[0px_2px_6px_0px_#00000096]"
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-base md:text-lg">
                      {note.title}
                    </h4>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className="ml-4 p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <div className="h-20 md:h-0"></div>
    </div>
  );
};

export default HomePage;
