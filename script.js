const noteForm = document.querySelector(".note-form");
const titleInput = document.querySelector("#title");
const notesTextarea = document.querySelector("#notes");
const notesContainer = document.querySelector(".notes-container");
let notes = [];

const savedNotes = localStorage.getItem("notes");

if (savedNotes !== null) {
  notes = JSON.parse(savedNotes);

  notes.forEach(function (note) {
    const article = document.createElement("article");
    article.classList.add("note-card");

    article.innerHTML = `
  <header class="note-header">
    <h3>${note.title}</h3>
    <time>${note.createdAt}</time>
  </header>

  <p>${note.content}</p>

  <footer class="note-actions">
    <button type="button">Delete</button>
  </footer>
`;

    notesContainer.append(article);

    const deleteButton = article.querySelector("button");
    deleteButton.addEventListener("click", function () {
      article.remove();
    });
  });
}
noteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = titleInput.value.trim();
  const noteContent = notesTextarea.value.trim();

  if (noteContent === "") {
    return;
  }

  const createdAt = new Date();
  const dateText = createdAt.toLocaleDateString();
  const note = {
    title: title,
    content: noteContent,
    createdAt: new Date(),
  };

  notes.push(note);

  localStorage.setItem("notes", JSON.stringify(notes));

  const article = document.createElement("article");
  article.classList.add("note-card");
  article.innerHTML = `
  <header class="note-header">
  <h3>${note.title}</h3>
  <time>${note.createdAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })}</time>
  </header>
  <p>${note.content}</p>
  <footer class="note-actions">
    <button type="button">Delete</button>
  </footer>
`;
  notesContainer.append(article);

  noteForm.reset();

  const deleteButton = article.querySelector("button");
  deleteButton.addEventListener("click", function () {
    article.remove();
  });
});
