// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Function to add a task
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }
  
      // Create task list item
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Create and configure remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-btn';
      removeButton.onclick = function () {
        taskList.removeChild(li);
      };
  
      // Append remove button and list item
      li.appendChild(removeButton);
      taskList.appendChild(li);
  
      // Clear input
      taskInput.value = '';
    }
  
    // Click event for Add Task button
    addButton.addEventListener('click', addTask);
  
    // Enter key triggers addTask
    taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });