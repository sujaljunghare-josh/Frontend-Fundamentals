import { Component } from '../component';
import { addNote } from '../store';

interface CreateState {
  title: string;
  content: string;
}

export class CreateNoteComponent extends Component<CreateState> {
  constructor() {
    super('app', {}, { title: '', content: '' });
  }

  render() {
    this.element.innerHTML = `
      <h1>Create Note</h1>
      <form id="note-form">
        <p><input type="text" id="title" placeholder="Title" value="${this.state.title}">
        </p>
        <p>
        <textarea id="content" placeholder="Content...">${this.state.content}</textarea>
        <div class="actions">
          <button type="submit">Save</button>
          <button type="button" onclick="location.hash='#/'">Cancel</button>
        </div>
        </p>
      </form>
    `;

    const form = this.element.querySelector('#note-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      // Sync local state from DOM
      const title = (this.element.querySelector('#title') as HTMLInputElement).value;
      const content = (this.element.querySelector('#content') as HTMLTextAreaElement).value;
      
      this.setState({ title, content });
      addNote(this.state.title, this.state.content);
      window.location.hash = '#/';
    });
  }
}