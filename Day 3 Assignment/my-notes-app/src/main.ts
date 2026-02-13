import { getNotes, getNoteById } from './store';
import { NoteListComponent } from './components/NoteListComponent';
import { CreateNoteComponent } from './components/CreateNoteComponent';
import { NoteItemComponent } from './components/NoteItemComponent';
import './style.css';

const router = () => {
  const hash = window.location.hash || '#/';
  const app = document.getElementById('app')!;

  if (hash === '#/') {
    new NoteListComponent(getNotes()).render();
  } 
  else if (hash === '#/create') {
    new CreateNoteComponent().render();
  } 
  else if (hash.startsWith('#/note/')) {
    const id = hash.split('#/note/')[1];
    const note = getNoteById(id);
    
    if (note) {
      const itemComp = new NoteItemComponent();
      app.innerHTML = itemComp.render({ note, isDetailView: true });
    } else {
      location.hash = '#/';
    }
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);