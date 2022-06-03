class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');

    document.querySelector('#add-note-button').addEventListener('click', () => {
      const newNote = document.querySelector('#user-input').value;
      this.addNewNote(newNote);
    })
  }

  addNewNote(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }
  
  displayNotes() {
    document.querySelectorAll('.note').forEach(element => {
      element.remove();
    });
  
    const notes = this.model.getNotes()
  
    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }
}

module.exports = NotesView;