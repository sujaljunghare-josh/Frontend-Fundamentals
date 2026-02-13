export interface Note {
    id: string;
    title: string;
    content: string;
    timestamp: string;
  }
  
  let notes: Note[] = JSON.parse(localStorage.getItem('notes') || '[]');
  
  export const getNotes = (): Note[] => [...notes];
  
  export const getNoteById = (id: string): Note | undefined => {
    return notes.find(n => n.id === id);
  };
  
  export const addNote = (title: string, content: string): void => {
    const newNote: Note = {
      id: crypto.randomUUID(), 
      title,
      content,
      timestamp: new Date().toLocaleString()
    };
    notes = [newNote, ...notes];
    saveToDisk();
  };
  
  export const deleteNote = (id: string): void => {
    notes = notes.filter(n => n.id !== id);
    saveToDisk();
  };
  
  const saveToDisk = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };