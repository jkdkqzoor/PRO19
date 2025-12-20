const noteInput = document.getElementById('noteInput');
const addNote = document.getElementById('addNote');
const notesList = document.getElementById('notesList');

if (!localStorage.getItem('notes')) {
  localStorage.setItem('notes', JSON.stringify([]));
}

let notes = JSON.parse(localStorage.getItem('notes'));

renderNotes();

addNote.addEventListener('click', () => {
  if (noteInput.value.trim() === '') return;

  const note = {
    id: Date.now(),
    text: noteInput.value
  };

  notes.push(note);
  saveNotes();
  renderNotes();

  noteInput.value = '';
});

function saveNotes() {
  localStorage.setItem('notes', JSON.stringify(notes));
}

function renderNotes() {
  notesList.innerHTML = '';

  notes.forEach(el => {
    const li = document.createElement('li');
    li.textContent = el.text;

    const btn = document.createElement('button');
    btn.textContent = 'delNote';
    btn.style.marginLeft = '10px';

    btn.addEventListener('click', () => {
      deleteNote(el.id);
    });

    li.appendChild(btn);
    notesList.appendChild(li);
  });
}

function deleteNote(id) {
  notes = notes.filter(note => note.id !== id);
  saveNotes();
  renderNotes();
}
