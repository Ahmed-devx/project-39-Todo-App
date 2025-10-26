var list = document.getElementById("list");

function addTodo() {
  var todo = document.getElementById("todo");
  if (todo.value == "") {
    alert("Please enter a todo");
  } else {
    list.innerHTML += `<li>
 <div class="box1">
 <input type="checkbox" onchange="status(event)" id="tik">
 <input type="text" value="${todo.value}" disabled / id="edit">
 <span class="status">Pending</span>
 </div>
 <div class="box2">
 <button onclick="deleteTodo(event)">Delete</button>
 <button onclick="editTodo(event)">Edit</button>
 </div>
 </li>`;
    todo.value = "";
  }
}

function addTodoEnter(event) {
  if (event.keyCode === 13) {
    addTodo();
  }
}

function deleteTodo(event) {
  event.target.parentNode.parentNode.remove();
}

function editTodo(event) {
  var input =
    event.target.parentNode.parentNode.querySelector("input[type='text']");
  input.disabled = false;
  input.focus();
  event.target.innerHTML = "Update";
  event.target.setAttribute("onclick", "updateTodo(event)");
}

function updateTodo(event) {
  var input =
    event.target.parentNode.parentNode.querySelector("input[type='text']");
  input.disabled = true;
  event.target.innerHTML = "Edit";
  event.target.setAttribute("onclick", "editTodo(event)");
}

function deleteAll() {
  list.innerHTML = "";
}

function status(event) {
  var checkbox = event.target;
  var li = checkbox.parentNode.parentNode;
  var textInput = li.querySelector("input[type='text']");
  var statusText = li.querySelector(".status");
  if (checkbox.checked) {
    statusText.innerHTML = "Completed";
    statusText.style.color = "#942cfc";
    textInput.classList.add("line");
  } else {
    statusText.innerHTML = "Pending";
    statusText.style.color = "#942cfc";
    textInput.classList.remove("line");
  }
}
