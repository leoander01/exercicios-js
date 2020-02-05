const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
}

inputTask.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

function cleanInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createDeleteButton(li) {
    //espaço entre o li e o button
    li.innerText += ' ';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Apagar';
    deleteButton.setAttribute('class', 'delete');
    li.appendChild(deleteButton);
}

function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    tasks.appendChild(li);
    cleanInput();
    createDeleteButton(li);
    saveTasks();
}

btnTask.addEventListener('click', function(e) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', function(e) {
    const element = e.target;
    if (element.classList.contains('delete')){
        element.parentElement.remove(); 
        saveTasks();
    }
});

function saveTasks() {
    const liTasks = tasks.querySelectorAll('li');
    const taskList = [];

    for (let task of liTasks) {
        let textTask = task.innerText;
        textTask = textTask.replace('Apagar', '').trim();
        taskList.push(textTask );
    }

    const tasksJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', tasksJSON);
}

function addSavedTasks() {
    const tasks = localStorage.getItem('tasks');
    const tasksList = JSON.parse(tasks);
    for (let task of tasksList) {
        createTask(task);
    }
}

addSavedTasks();
