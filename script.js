// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Function to add a new task
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }
  
      // Create new list item for the task
      const li = document.createElement('li');
      li.textContent = taskText;
      li.classList.add('task-item'); // Add class to list item
  
      // Create remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn'); // Use classList.add instead of className
  
      // Remove the task when the button is clicked
      removeButton.addEventListener('click', function () {
        taskList.removeChild(li);
      });
  
      // Append the button to the list item and the list item to the task list
      li.appendChild(removeButton);
      taskList.appendChild(li);
  
      // Clear the input field
      taskInput.value = '';
    }
  
    // Click event to add task
    addButton.addEventListener('click', addTask);
  
    // Pressing "Enter" key also adds task
    taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  });