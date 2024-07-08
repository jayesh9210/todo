document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const task = {
        text: taskText,
        addedAt: new Date().toLocaleString()
    };

    const li = document.createElement('li');
    li.innerHTML = `
        ${task.text} (Added: ${task.addedAt})
        <button class="completeBtn">Complete</button>
    `;
    document.getElementById('todoList').appendChild(li);
    taskInput.value = '';

    li.querySelector('.completeBtn').addEventListener('click', () => completeTask(li, task));
}

function completeTask(taskElement, task) {
    taskElement.remove();

    const completedTaskElement = document.createElement('li');
    task.completedAt = new Date().toLocaleString();
    completedTaskElement.innerHTML = `
        ${task.text} (Added: ${task.addedAt}, Completed: ${task.completedAt})
    `;
    document.getElementById('completedList').appendChild(completedTaskElement);
}
