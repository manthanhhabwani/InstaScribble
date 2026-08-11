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

  const createdAt = new Date();
  const dateText = createdAt.toLocaleDateString();
  const note = {
    title: title,
    content: notes,
    createdAt: new Date(),
  };

  const article = document.createElement("article");
  article.classList.add("note-card");
  article.innerHTML = `
  <header class="note-header">
  <h3>${note.title}</h3>
  <time>${note.createdAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
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
