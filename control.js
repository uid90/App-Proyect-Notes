window.addEventListener('DOMContentLoaded', () => {
    const notesContainer = document.querySelector('.notes-container');
    
    function checkNotes() {
      const noteButtons = notesContainer.querySelectorAll('.note-button');
      if (noteButtons.length > 5) {
        notesContainer.style.overflowY = 'auto';  
      } else {
        notesContainer.style.overflowY = 'hidden';  
      }
    }
    
    function addNote(text, date) {
      const noteButton = document.createElement('a');
      noteButton.classList.add('note-button');
      noteButton.href = `notes/${date}.html`;  
      noteButton.textContent = text;
      notesContainer.appendChild(noteButton);
      
      checkNotes();
    }
    
    addNote('Nota (10/11/24) 🧃', '10-11-24');

  });
  