// Get the task list element
const taskList = document.getElementById('task-list');

// Get the add task form element
const addTaskForm = document.getElementById('add-task-form');

// Get the task input element
const taskInput = document.getElementById('task-input');

/* Get the add task button element
const addTaskButton = document.getElementById('add-task-btn');*/

// Add event listener to the add task button
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Get the task text from the input field
    const taskText = taskInput.value.trim();
  
    // Create a new task element
    const newTask = document.createElement('LI');
    newTask.textContent = taskText;
  
    // Create a delete button for the new task
    const deleteBtn = document.createElement('BUTTON');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.style.marginLeft= '10px';
    newTask.appendChild(deleteBtn);
  
    // Add the new task to the task list
    taskList.appendChild(newTask);
  
    // Clear the task input field
    taskInput.value = '';
});

// Function to delete a task
function deleteTask(task) {
    task.remove();
}

// Add event listener to the task list
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        e.target.parentNode.remove();
        //const taskToDelete = e.target.parentNode;
        //taskList.removeChild(taskToDelete);
    }
  });
 
// Add event listener to delete button
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      deleteTask(e.target.parentNode);
    }
});

/*Get the delete task form element
const deleteTaskForm = document.getElementById('delete-task-form');

// Add event listener to the delete task form
deleteTaskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the task ID to delete
  const taskIdToDelete = document.getElementById('task-id-to-delete').value;

  const taskList = document.getElementById('task-list');
  const tasks = taskList.children;
  for (let i = 0; i < tasks.length; i++) {
    if (i + 1 === parseInt(taskIdToDelete)) {
      taskList.removeChild(tasks[i]);
      break;
    }
  }
});*/


// Get the current date and time elements
const currentDateElement = document.getElementById('current-date');
const currentTimeElement = document.getElementById('current-time');

// Function to update the current date and time
function updateDateTime() {
  const now = new Date();
  const dateString = now.toLocaleDateString();
  const timeString = now.toLocaleTimeString();

  currentDateElement.textContent = dateString;
  currentTimeElement.textContent = timeString;
}

// Update the current date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();


  
/* Create a new task with a delete button
const newTask = document.createElement('LI');
newTask.textContent = "New task added!";
const deleteBtn = document.createElement('BUTTON');
deleteBtn.classList.add('delete-btn');
deleteBtn.textContent = "Delete";
newTask.appendChild(deleteBtn);
taskList.appendChild(newTask);
  

// Get the task list element
const taskList = document.getElementById('task-list');
// Add a new task to the list
const newTask = document.createElement('LI');
newTask.textContent = "New task added!";
taskList.appendChild(newTask);*/