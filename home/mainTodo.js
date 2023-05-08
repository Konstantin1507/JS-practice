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
      innerHtml: 'Active',
      onClick: buttonActiveHandler,
    },
    buttonAllArgs: {
      type: 'button',
      id: 'all',
      class: 'control-button',
      innerHtml: 'All',
      onClick: buttonAllHandler,
    },
    buttonCompletedArgs: {
      type: 'button',
      id: 'completed',
      class: 'control-button',
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
    showClearCompletedFunc: showClearCompleted,
  };

  let controleBarState = {
    showHideControleFunc: showHideControle,
  };

  //ActiveTasks
  function buttonActiveHandler() {
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
  }

  //allTasks
  function buttonAllHandler() {
    tasks = tasks.filter((task) => {
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
  }

  //clearCompleted
  function clearCompletedHandler() {
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
    // controleBar.showHideControle();
    showClearCompleted();
    if (tasks.length === 0) {
      inputTodo.inputLabel.classList.add('none');
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
    console.log(control);

    if (tasks.length !== 0) {
      control.classList.remove('hidden');
    } else {
      control.classList.add('hidden');
    }
  }

  inputTodo.createInput();
  createListElem();
  createControleBar(filterButtonsState, clearCompletedState, controleBarState);
}
