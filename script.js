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

  const article = document.createElement("article");
  article.classList.add("note-card");
  article.innerHTML = `
  <h3>${note.title}</h3>
  <p>${note.content}</p>
  <footer class="note-actions">
    <button type="button">Delete</button>
  </footer>
`;
  notesContainer.append(article);

  const deleteButton = article.querySelector("button");
  deleteButton.addEventListener("click", function (){
    article.remove();
  });
});
