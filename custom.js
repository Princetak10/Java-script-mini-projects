// take data from input and display the data from this func takedata()
function takedata() {
    let inputdata = document.getElementById('taskInput').value;

    if (inputdata.trim() === "") {
        alert('You have to Enter a task!')
    } else {
        let li = document.createElement('li');

        li.innerHTML = `
         &#9675; &nbsp;<span class="task-text">${inputdata}</span>
        <button class="edit-btn" onclick="editTask(this)">Edit</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>

        `
        document.getElementById('taskList').appendChild(li);

        document.getElementById('taskInput').value = "";
    }
}
// to get data from add button
document.getElementById("taskInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        takedata(); 
    }
});

// to edit the task in to-do click the button and edit
function editTask(button) {
    let taskText = button.parentElement.querySelector('.task-text');
    let newTask = prompt("Edit your task:", taskText.innerText);
    if (newTask !== null && newTask.trim() !== "") {
        taskText.innerText = newTask;
    }
}
// to remove the task from the task area
function deleteTask(button) {
    button.parentElement.remove();
}

// to clear all the task make like a new to-do list 
function deleteAll() {
    let clear = document.getElementById('taskList');
    if (clear.children.length === 0) {
        alert("No task to Clear.");
        return;
}if (confirm("Are you sure want to clear all.")) {
    clear.innerHTML = "";
}
}



