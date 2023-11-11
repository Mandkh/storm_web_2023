// Get reference to HTML elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        return; //Don't add an empty task
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = ''; //Clear the input field
}

// Add a task when the button is clicked
addTaskButton.addEventListener('click', addTask);
// Add a task when the Enter key is pressed. Use keydown event
taskInput.addEventListener('keydown', addBar)
function addBar(e) {

    if (e.key == "Enter") {
        addTask()
    }
}