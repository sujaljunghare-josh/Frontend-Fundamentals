import { Component } from '../component';
import type { Note } from '../store';
import { NoteItemComponent } from './NoteItemComponent';

export class NoteListComponent extends Component<{notes: Note[]}> {
  private itemComp = new NoteItemComponent();

  constructor(notes: Note[]) {
    super('app', {}, { notes });
  }

  render() {
    this.element.innerHTML = `
      <h1>My Notes</h1>
      <button onclick="location.hash='#/create'">+ New Note</button>
      <div class="note-list">
        ${this.state.notes.map(n => this.itemComp.render({ note: n, isDetailView: false })).join('')}
      </div>
    `;
  }
}