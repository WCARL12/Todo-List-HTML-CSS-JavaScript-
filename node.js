let taskInputElement = document.querySelector(".js-Todotask-input");
let dateInputElement = document.querySelector(".js-Tododate-input");
let addButtonElement = document.querySelector(".js-add-button");
let todoListElement = document.querySelector(".js-todo-list");
let taskOverloadElement = document.querySelector(".js-task-overload");
// let todoListObject = {};
todoListObject = JSON.parse(localStorage.getItem("todoListObject")) || {};

loopTodo();
function addTodo() {
  if (Object.keys(todoListObject).length < 3) {
    todoListObject[taskInputElement.value] = dateInputElement.value;
    taskOverloadElement.style.display = "none";
    localStorage.setItem("todoListObject", JSON.stringify(todoListObject));
    taskOverloadElement.innerHTML = "";
  } else {
    taskOverloadElement.style.display = "block";
    taskOverloadElement.innerHTML = "Sorry your to-do taks are full";
  }

  loopTodo();
  taskInputElement.value = "";
  dateInputElement.value = "";
}

function loopTodo() {
  todoListElement.innerHTML = "";

  for (task in todoListObject) {
    todoListElement.innerHTML += `<li><p class='todotask task-added'>${task}</p> <div class='date-delete'><p class='todotask date-added'>${todoListObject[task]}</p> <button class='delete-button' onclick='deleteTask(task)'>Delete</button></div></li>`;
  }
}

function deleteTask(task) {
  delete todoListObject[task];
  loopTodo();
}
