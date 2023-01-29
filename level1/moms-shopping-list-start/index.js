// submit event
//create form

const form = document["addItem"];
const div = document.getElementsByClassName("todos");
const ul = document.getElementById("list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // addItem event handler for submit event on submit
  const typedInput = document.getElementById("title").value;
  console.log(typedInput);
  const list = document.getElementById("list");
  document.addEventListener("click", addItem);

  // created elements and appended to list to display on the website
  const div = document.createElement("div");
  const ul = document.createElement("list");
  const li = document.createElement("li");
  div.appendChild(document.createTextNode(typedInput));
  ul.appendChild(li);
  li.appendChild(div);
  document.getElementById("list").appendChild(li);
  // added button to represent the edit button when clicked
  const editButton = document.createElement("button");
  editButton.textContent = "edit";

  editButton.addEventListener("click", function () {
    const input = document.createElement("input");
    input.value = typedInput;
    li.replaceWith(input);
   deleteBtn.remove();
   editButton.remove();
    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.addEventListener("click", function () {
      li.textContent = input.value;
      input.replaceWith(li);
      li.insertAdjacentElement("afterEnd", deleteBtn);
      li.insertAdjacentElement("afterEnd", editButton);
      
      saveBtn.remove();
    });
  input.insertAdjacentElement("afterEnd",saveBtn)
  });

  // added deleteBtn to store delete button, inserted adjacent to make it a sibling element to remove the list item
  //after submission
  const deleteBtn = document.createElement("button");
  deleteBtn.name = "removeItem";
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", function () {
    li.remove();
    deleteBtn.remove();
    editButton.remove();
    console.log(div);
  });
  li.insertAdjacentElement("afterEnd", deleteBtn);
  li.insertAdjacentElement("afterEnd", editButton);
});
