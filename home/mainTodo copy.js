//MAIN SECTION
function createMainTodo() {
  const mainTodo = document.createElement('section');
  mainTodo.id = 'mainTodo';
  main.append(mainTodo);

  let state = {
    buttonActiveArgs: {
      type: 'button',
      id: 'active',
      class: 'control-button',
      innerHtml: 'Active',
      // onClick: onClickActiveButtons,
    },
    buttonAllArgs: {
      type: 'button',
      id: 'all',
      class: 'control-button',
      innerHtml: 'All',
      // onClick: onClickAllButtons,
    },
    buttonCompletedArgs: {
      type: 'button',
      id: 'completed',
      class: 'control-button',
      innerHtml: 'Completed',
      // onClick: onClickCompletedButtons,
    },

    //ActiveTasks
    buttonActiveHandler() {
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
    },

    //allTasks
    buttonAllHandler() {
      tasks = tasks.filter((task) => {
        const taskId = task.id;
        if (document.getElementById(taskId).classList.contains('none')) {
          document.getElementById(taskId).classList.remove('none');
          return true;
        } else {
          return true;
        }
      });
    },

    //completedTasks
    buttonCompletedHandler() {
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
    },
  };

  // inputTodo.createInput();
  createInputTodo();
  createListElem();
  // let mainTodoState = {
  //   ...state,
  //   buttonActiveHandler,
  //   buttonAllHandler,
  //   buttonCompletedHandler,
  // };
  // createControleBar(mainTodoState);
  createControleBar(state);
}
