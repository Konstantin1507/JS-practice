const root = document.getElementById('root');
//HEADER
let header = document.createElement('h1');
header.textContent = 'todos';
header.classList.add('header');
root.append(header);

//INPUT
const todoInput = document.createElement('input');
todoInput.type = 'text';
todoInput.id = 'todoInput';
todoInput.setAttribute('placeholder', 'What needs yo be done?');
root.append(todoInput);

//UL - list
const listElem = document.createElement('ul');
listElem.id = 'listElem';
root.append(listElem);

//CONTROL - bottom
const control = document.createElement('div');
control.classList.add('control');
root.append(control);

//items left
const remain = document.createElement('div');
control.append(remain);
const remainNumber = document.createElement('span');
remainNumber.id = 'remainNumber';
remainNumber.innerHTML = 0;
remain.append(remainNumber);
const remainText = document.createElement('span');
remainText.innerHTML = ' items left';
remain.append(remainText);

//buttons
const buttons = document.createElement('ul');
buttons.id = 'buttons';
control.append(buttons);

const li1 = document.createElement('li');
buttons.append(li1);
const allTasks = document.createElement('button');
allTasks.id = 'all';
allTasks.innerHTML = 'All';
li1.append(allTasks);

const li2 = document.createElement('li');
buttons.append(li2);
const activeTasks = document.createElement('button');
activeTasks.id = 'active';
activeTasks.innerHTML = 'Active';
li2.append(activeTasks);

const li3 = document.createElement('li');
buttons.append(li3);
const completedTasks = document.createElement('button');
completedTasks.id = 'completed';
completedTasks.innerHTML = 'Completed';
li3.append(completedTasks);

//clearCompleted
const clearCompleted = document.createElement('button');
clearCompleted.id = completed;
clearCompleted.innerHTML = 'Clear completed';
control.append(clearCompleted);

//FOOTER
const footer = document.createElement('footer');
footer.classList.add('footer');
root.append(footer);

const p1 = document.createElement('p');
p1.innerHTML = 'Double-click to edit a todo';
footer.append(p1);

const p2 = document.createElement('p');
p2.innerHTML = 'Written by TasteJS';
footer.append(p2);

const p3 = document.createElement('p');
p3.innerHTML = 'Part of TodoMVC';
footer.append(p3);

//creating ARRAY of tasks
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

if (localStorage.getItem('tasks')) {
  tasks.map((task) => {
    createNewTask(task);
  });
}
console.log(tasks);

//input handler
todoInput.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    if (todoInput.value == '') {
      return;
    }

    const task = {
      id: new Date().getTime(),
      name: todoInput.value,
      isDone: false,
    };

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    createNewTask(task);

    todoInput.value = '';
  }
});

// createNewTask
function createNewTask(task) {
  const newElem = document.createElement('li');
  newElem.id = task.id;
  listElem.append(newElem);

  const divElem = document.createElement('div');
  divElem.classList.add('div-elem');
  newElem.append(divElem);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');
  divElem.append(checkbox);
  if (task.isDone === true) {
    checkbox.setAttribute('checked', '');
  }

  const taskName = document.createElement('span');
  taskName.classList.add('task');
  taskName.innerHTML = task.name;
  divElem.append(taskName);
  if (task.isDone) {
    taskName.classList.add('done');
  }

  const delBtn = document.createElement('button');
  delBtn.classList.add('delete');
  delBtn.innerHTML = 'X';
  divElem.append(delBtn);

  showItemsLeft();
}

//РЕДАКТИРОВАНИЕ ТАСКИ
listElem.addEventListener('dblclick', function reduct() {
  if (event.target.classList.contains('task')) {
    let taskName = event.target;
    let input = document.createElement('input');
    input.value = taskName.innerHTML;
    taskName.innerHTML = '';
    taskName.append(input);
    taskName.removeEventListener('dblclick', reduct);

    input.addEventListener('blur', function () {
      taskName.innerHTML = this.value;
      taskName.addEventListener('dblclick', reduct);
    });
  }
});

// УДАЛЕНИЕ
listElem.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    const taskId = event.target.closest('li').id;
    removeTask(taskId);
  }
});

function removeTask(taskId) {
  tasks = tasks.filter((task) => task.id !== +taskId);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  document.getElementById(taskId).remove();
  showItemsLeft();
}

//ИЗМЕНЕНИЕ СТАТУСА
listElem.addEventListener('click', (event) => {
  if (event.target.classList.contains('checkbox')) {
    const taskId = event.target.closest('li').id;
    changeTaskStatus(taskId, event.target);
  }
});

function changeTaskStatus(taskId, elem) {
  const span = elem.nextElementSibling;

  const task = tasks.find((task) => task.id === parseInt(taskId));
  if (event.target.checked) {
    task.isDone = true;
    span.classList.add('done');
  } else if (event.target.checked == false) {
    task.isDone = false;
    span.classList.remove('done');
  }

  localStorage.setItem('tasks', JSON.stringify(tasks));
  showItemsLeft();
}
//itemsLeft
function showItemsLeft() {
  const doneTasks = tasks.filter((task) => task.isDone === true);
  remainNumber.innerHTML = tasks.length - doneTasks.length;
}

//clearCompleted
clearCompleted.addEventListener('click', function () {
  tasks = tasks.filter((task) => {
    if (task.isDone !== true) {
      return true;
    } else {
      const taskId = task.id;
      document.getElementById(taskId).remove();
      return false;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
});

//completedTasks
completedTasks.addEventListener('click', function () {
  tasks = tasks.filter((task) => {
    const taskId = task.id;
    if (task.isDone !== true) {
      document.getElementById(taskId).classList.add('none');
      return true;
    } else {
      document.getElementById(taskId).classList.remove('none');
      return true;
    }
  });
});

//activeTasks
activeTasks.addEventListener('click', function () {
  tasks = tasks.filter((task) => {
    const taskId = task.id;
    if (task.isDone === true) {
      document.getElementById(taskId).classList.add('none');
      return true;
    } else {
      document.getElementById(taskId).classList.remove('none');
      return true;
    }
  });
});

//allTasks
allTasks.addEventListener('click', function () {
  tasks = tasks.filter((task) => {
    const taskId = task.id;
    if (document.getElementById(taskId).classList.contains('none')) {
      document.getElementById(taskId).classList.remove('none');
      return true;
    } else {
      return true;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
});
