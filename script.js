document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Initialize tasks array
    let tasks = [];
  
    // Load tasks from Local Storage and display them
    function loadTasks() {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
          displayTask(task);
        });
      }
    }
  
    // Save current tasks array to Local Storage
    function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    // Display a single task in the DOM
    function displayTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
      li.classList.add('task-item');
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-btn');
  
      removeButton.addEventListener('click', function () {
        taskList.removeChild(li);
        tasks = tasks.filter(task => task !== taskText); // Remove from array
        saveTasks(); // Update Local Storage
      });
  
      li.appendChild(removeButton);
      taskList.appendChild(li);
    }
  
    // Function to add a new task
    function addTask() {
      const taskText = taskInput.value.trim();
  
      if (taskText === '') {
        alert('Please enter a task!');
        return;
      }
  
      tasks.push(taskText);      // Add to array
      saveTasks();               // Save to Local Storage
      displayTask(taskText);     // Display in DOM
      taskInput.value = '';      // Clear input
    }
  
    // Event listeners
    addButton.addEventListener('click', addTask);
  
    taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Load existing tasks on page load
    loadTasks();
  });