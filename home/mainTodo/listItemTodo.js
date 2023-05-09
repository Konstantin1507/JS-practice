function createListElem(createListElemArgs) {
  let {isAllChecked, changeTaskStatus, showHideControle, showClearCompleted} =
    createListElemArgs;
  const listElem = document.createElement('ul');
  listElem.id = 'listElem';
  mainTodo.append(listElem);

  //FILLING ARRAY of tasks
  if (localStorage.getItem('tasks')) {
    tasks.map((task) => {
      createNewTask(task, isAllChecked, showHideControle);
    });
  }

  //РЕДАКТИРОВАНИЕ ТАСКИ
  listElem.addEventListener('dblclick', function reduct() {
    if (event.target.classList.contains('task')) {
      let taskName = event.target;
      taskName.setAttribute('contentEditable', true);
      taskName.classList.add('task-focus');
      const taskId = event.target.closest('li').id;

      //убрать  x
      taskName.nextElementSibling.classList.add('none');

      //saveChanges
      function saveChanges() {
        taskName.removeAttribute('contentEditable');
        taskName.classList.remove('task-focus');
        //вернуть x
        taskName.nextElementSibling.classList.remove('none');
        changeTask(taskId, event.target);
      }

      function changeTask(taskId, elem) {
        const task = tasks.find((task) => task.id === parseInt(taskId));

        task.name = elem.innerHTML;

        localStorage.setItem('tasks', JSON.stringify(tasks));
        itemsLeft.showItemsLeft();
        showClearCompleted();
      }
      //обработчик BLUR
      taskName.addEventListener('blur', saveChanges);

      //обработчик keypress ENTER
      taskName.addEventListener('keypress', function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          saveChanges();
        }
      });
    }
  });

  //ИЗМЕНЕНИЕ КЛАССА delete
  listElem.addEventListener('mouseover', (event) => {
    let target = event.target.closest('div');
    if (target) {
      target.lastElementChild.classList.add('showX');
    }
  });
  listElem.addEventListener('mouseout', (event) => {
    let target = event.target.closest('div');
    if (target) {
      target.lastElementChild.classList.remove('showX');
    }
  });

  listElem.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('delete')) {
      event.target.classList.add('showXFull');
    }
  });

  listElem.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('delete')) {
      event.target.classList.remove('showXFull');
    }
  });
  // УДАЛЕНИЕ ТАСКИ
  listElem.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
      const taskId = event.target.closest('li').id;
      removeTask(taskId);
      isAllChecked();
    }
  });

  function removeTask(taskId) {
    tasks = tasks.filter((task) => task.id !== +taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById(taskId).remove();
    showHideControle();
    showClearCompleted();
    itemsLeft.showItemsLeft();
    if (tasks.length === 0) {
      let inputLabel = document.querySelector('.inputLabel');
      inputLabel.classList.add('none');
    }
  }

  //ИЗМЕНЕНИЕ СТАТУСА
  listElem.addEventListener('click', (event) => {
    if (event.target.classList.contains('checkbox')) {
      const taskId = event.target.closest('li').id;
      changeTaskStatus(taskId, event.target);
    }
  });
}
