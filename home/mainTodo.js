//MAIN SECTION
function createMainTodo() {
  const mainTodo = document.createElement('section');
  mainTodo.id = 'mainTodo';
  main.append(mainTodo);

  let filterButtonsState = {
    buttonActiveArgs: {
      type: 'button',
      id: 'active',
      class: 'control-button',
      classAdd: null,
      innerHtml: 'Active',
      onClick: buttonActiveHandler,
    },
    buttonAllArgs: {
      type: 'button',
      id: 'all',
      class: 'control-button',
      classAdd: 'activeButton',
      innerHtml: 'All',
      onClick: buttonAllHandler,
    },
    buttonCompletedArgs: {
      type: 'button',
      id: 'completed',
      class: 'control-button',
      classAdd: null,
      innerHtml: 'Completed',
      onClick: buttonCompletedHandler,
    },
  };

  let clearCompletedState = {
    clearCompletedArgs: {
      type: 'button',
      id: 'clearCompleted',
      class: 'clearCompleted',
      innerHtml: 'Clear completed',
      onClick: clearCompletedHandler,
    },
    showClearCompleted,
  };

  let controleBarState = {
    showHideControle,
  };

  let inputCheckboxState = {
    inputCheckboxArgs: {
      type: 'checkbox',
      class: 'checkbox',
      classAdd: null,
      onClick: inputCheckboxHandler,
    },
  };

  let todoInputState = {
    todoInputArgs: {
      name: 'todoInput',
      type: 'text',
      id: 'todoInput',
      class: 'todo-validate-input',
      placeholder: 'What needs to be done?',
      onChange: emptyFunc,
    },
    todoInputElemHandler,
  };

  function emptyFunc() {}
  //ActiveTasks
  function buttonActiveHandler() {
    tasks.forEach((task) => {
      const taskId = task.id;
      if (task.isDone === true) {
        document.getElementById(taskId).classList.add('none');
        return true;
      } else {
        document.getElementById(taskId).classList.remove('none');
        return true;
      }
    });
  }

  //allTasks
  function buttonAllHandler() {
    tasks.forEach((task) => {
      const taskId = task.id;
      if (document.getElementById(taskId).classList.contains('none')) {
        document.getElementById(taskId).classList.remove('none');
        return true;
      } else {
        return true;
      }
    });
  }

  //completedTasks
  function buttonCompletedHandler() {
    tasks.forEach((task) => {
      const taskId = task.id;
      if (task.isDone !== true) {
        document.getElementById(taskId).classList.add('none');
        return true;
      } else {
        document.getElementById(taskId).classList.remove('none');
        return true;
      }
    });
  }

  //clearCompleted
  function clearCompletedHandler() {
    let inputLabel = document.querySelector('.inputLabel');
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
    showHideControle();
    showClearCompleted();
    if (tasks.length === 0) {
      inputLabel.classList.add('none');
    }
  }
  // showClearCompleted;
  function showClearCompleted() {
    const doneTasks = tasks.filter((task) => task.isDone === true);
    if (doneTasks.length === 0) {
      clearCompleted.innerHTML = '';
    } else {
      clearCompleted.innerHTML = 'Clear completed';
    }
  }

  //showHideControle
  function showHideControle() {
    let control = document.getElementById('controlBar');

    if (tasks.length !== 0) {
      control.classList.remove('hidden');
    } else {
      control.classList.add('hidden');
    }
  }

  //isAllChecked
  function isAllChecked() {
    const doneTasks = tasks.filter((task) => task.isDone === true);
    let inputLabel = document.querySelector('.inputLabel');

    if (tasks.length === doneTasks.length && tasks.length > 0) {
      inputLabel.classList.add('all-checked');
    } else {
      inputLabel.classList.remove('all-checked');
    }
  }

  //changeTaskStatus
  function changeTaskStatus(taskId, elem) {
    let label = elem.parentElement;
    const span = label.nextElementSibling;

    let task = tasks.find((task) => task.id === parseInt(taskId));
    if (event.target.checked) {
      task.isDone = true;
      span.classList.add('done');
      label.classList.add('label-checked');
    } else if (event.target.checked == false) {
      task.isDone = false;
      span.classList.remove('done');
      label.classList.remove('label-checked');
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    itemsLeft.showItemsLeft();
    showClearCompleted();
    isAllChecked();
  }

  //ИЗМЕНЕНИЕ СТАТУСА INPUT CHECKBOX and all checkboxes
  function inputCheckboxHandler() {
    let allCheckBoxes = document.querySelectorAll('.task-checkbox');

    for (let checkBox of allCheckBoxes) {
      const taskId = checkBox.closest('li').id;
      changeTaskStatus(taskId, checkBox);
    }
  }

  function todoInputElemHandler(event) {
    if (event.keyCode === 13) {
      if (todoInput.value == '') {
        return;
      }

      const task = {
        id: new Date().getTime(),
        name: this.value,
        isDone: false,
      };

      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));

      createNewTask(task, isAllChecked, showHideControle);

      this.value = '';
    }
  }

  let createInputTodoArgs = {
    isAllChecked,
    inputCheckboxState,
    todoInputState,
  };

  let createListElemArgs = {
    isAllChecked,
    changeTaskStatus,
    showHideControle,
    showClearCompleted,
  };

  createControleBar(filterButtonsState, clearCompletedState, controleBarState);
  createInputTodo(createInputTodoArgs);
  createListElem(createListElemArgs);
}
