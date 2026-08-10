const noteForm = document.querySelector(".note-form");
const titleInput = document.querySelector("#title");
const notesTextarea = document.querySelector("#notes");
const notesContainer = document.querySelector(".notes-container");
noteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const notes = notesTextarea.value.trim();

  if (notes === "") {
    return;
  }

  console.log(title);
  console.log(notes);

  const note = {
    title: title,
    content: notes,
  };

  console.log(note);
});
