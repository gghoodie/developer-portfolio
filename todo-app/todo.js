const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Load saved tasks on page load
tasks.forEach(task => {
  addTaskToDOM(task);
});

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  addTaskToDOM(taskText);
  taskInput.value = "";
});

function addTaskToDOM(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    taskList.removeChild(li);
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  taskList.appendChild(li);
}
