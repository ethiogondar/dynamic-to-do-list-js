// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM Elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Create the addTask Function
    function addTask() {
      // Retrieve and trim the task input value
      const taskText = taskInput.value.trim();
  
      // Check if taskText is empty
      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }
  
      // Create a new list item for the task
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Create a remove button for the task
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';
  
      // Assign onclick event to remove the task
      removeButton.onclick = function () {
        taskList.removeChild(li);
      };
  
      // Append remove button to the task item
      li.appendChild(removeButton);
  
      // Append the task item to the task list
      taskList.appendChild(li);
  
      // Clear the task input field
      taskInput.value = '';
    }
  
    // Attach Event Listener to Add Task button
    addButton.addEventListener('click', addTask);
  
    // Attach Event Listener to input field for Enter key
    taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });