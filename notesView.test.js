/**
 * @jest-environment jsdom
 */

 const fs = require('fs');

 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView'); 
 
 describe('Notes view', () => {
   it('displays two notes', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
 
     const model = new NotesModel();
     const view = new NotesView(model);
     model.addNote('A first note');
     model.addNote('Another one');
     
     view.displayNotes();
 
     expect(document.querySelectorAll('div.note').length).toEqual(2);
   });

   it('adds a new note', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NotesView(model);

    const input = document.querySelector('#user-input')
    input.value = 'test note'

    const buttonEl = document.querySelector('#add-note-button')
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual('test note');
  });
 });