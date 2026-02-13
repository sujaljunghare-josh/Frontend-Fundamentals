import type { Note } from '../store';

export interface NoteItemProps {
  note: Note;
  isDetailView?: boolean; 
}

export class NoteItemComponent {
  render(props: NoteItemProps): string {
    const { note, isDetailView } = props;

    if (isDetailView) {
      return `
        <div class="note-detail">
          <button onclick="location.hash='#/'">← Back to List</button>
          <h1>${note.title}</h1>
          <p><small>${note.timestamp}</small></p>
          <div class="content">${note.content}</div>
        </div>
      `;
    }

    return `
      <div class="note-item" onclick="location.hash='#/note/${note.id}'">
        <h3>${note.title}</h3>
        <small>${note.timestamp}</small>
      </div>
    `;
  }
}