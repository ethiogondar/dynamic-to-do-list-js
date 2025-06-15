// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Function to add a new task
    function addTask() {
      // Get and trim the input value
      const taskText = taskInput.value.trim();
  
      // Check if the input is empty
      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }
  
      // Create a new list item for the task
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Create a remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.className = 'remove-btn';
  
      // When the remove button is clicked, delete the task
      removeBtn.onclick = () => {
        taskList.removeChild(li);
      };
  
      // Append the remove button to the task, then add the task to the list
      li.appendChild(removeBtn);
      taskList.appendChild(li);
  
      // Clear the input field
      taskInput.value = '';
    }
  
    // Add event listener to the Add Task button
    addButton.addEventListener('click', addTask);
  
    // Add event listener to allow pressing "Enter" to add a task
    taskInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Optional: Initial function call if you want to run logic on page load
    // addTask(); // Not necessary unless you preload tasks
  });