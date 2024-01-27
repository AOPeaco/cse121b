// events.js
let tasks = [];

function renderTasks(tasks) {
    let listElement = document.querySelector("#todoList");
    listElement.innerHTML = "";
    tasks.forEach((task) => {
        listElement.innerHTML += `
         <li ${task.completed ? 'class="strike"' : ""}>
            <p>${task.detail}</p>
             <div>
                 <span data-function="delete">❎</span>
                 <span data-function="complete">✅</span>
             </div>
         </li>`;
    });
}

function newTask() {
    let task = document.querySelector("#todo").value;
    tasks.push({ detail: task, completed: false });
    renderTasks(tasks);
}

function removeTask(taskElement) {
    // note the use of Array.filter to remove the element from our task array
    tasks = tasks.filter(
        (task) => task.detail != taskElement.childNodes[0].innerText
    );
    // this line removes the HTML element from the DOM
    taskElement.remove();
}

function completeTask(taskElement) {
    // In this case we need to find the index of the task so we can modify it.
    const taskIndex = tasks.findIndex(
        (task) => task.detail === taskElement.childNodes[0].innerText
    );
    // once we have the index we can modify the complete field.
    // tasks[taskIndex].completed ? false : true is a ternary expression.
    // If the first part is true (left of the ?), then the value on the left of the : will get returned, otherwise the value on the right of the : will be returned.
    tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
    // toggle adds a class if it is not there, removes it if it is.
    taskElement.classList.toggle("strike");
    console.log(tasks);
}

function manageTasks(event) {
    // did they click the delete or complete icon?
    console.log(event.target);
    let parent = event.target.closest("li");
    if (event.target.dataset.function === "delete") {
        removeTask(parent);
    }
    if (event.target.dataset.function === "complete") {
        completeTask(parent);
    }
}

document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);

renderTasks(tasks);