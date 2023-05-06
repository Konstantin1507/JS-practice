//buttons
function createButtons(state) {
  const buttons = document.createElement('ul');
  buttons.id = 'buttons';
  controlBar.append(buttons);

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
        ll;
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
    localStorage.setItem('tasks', JSON.stringify(tasks));
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

  //ИЗМЕНЕНИЕ АКТИВОСТИ КНОПКИ
  buttons.addEventListener('click', function () {
    const buttons = document.querySelectorAll('.control-button');

    for (let button of buttons) {
      if (button === event.target) {
        button.classList.add('activeButton');
      } else {
        button.classList.remove('activeButton');
      }
    }
  });
  createButtonAll({...state.buttonAllArgs, buttonAllHandler});
  createButtonActive({...state.buttonActiveArgs, buttonActiveHandler});
  createButtonCompleted({...state.buttonCompletedArgs, buttonCompletedHandler});
}
