class Home {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    this.allTasksDone = false;
    this.init();
  }

  init() {
    this.homePageContainer = document.createElement('section');
    this.homePageContainer.id = 'homePageContainer';

    //INPUT
    this.taskInputWrapper = document.createElement('div');
    this.taskInputWrapper.id = 'taskInputWrapper';
    this.homePageContainer.append(this.taskInputWrapper);

    this.inputLabel = document.createElement('label');
    this.inputLabel.innerHTML = 'V';
    this.inputLabel.classList.add('inputLabel');
    this.taskInputWrapper.append(this.inputLabel);

    this.inputCheckbox = new Checkbox({
      type: 'checkbox',
      class: 'checkbox',
      classAdd: null,
      isChecked: false,
      onClick: this.inputCheckboxHandler,
    });

    this.taskInput = new Input({
      name: 'taskInput',
      type: 'text',
      id: 'taskInput',
      class: 'todo-validate-input',
      placeholder: 'What needs to be done?',
      onChange: null,
      onKeydown: this.taskInputHandler,
    });

    this.listElem = document.createElement('ul');
    this.listElem.id = 'listElem';
    this.homePageContainer.append(this.listElem);
  }

  render(toEl) {
    toEl.append(this.homePageContainer);

    this.inputCheckbox.render(this.inputLabel);

    // this.hideInputLabel();
    // this.isAllChecked();

    this.taskInput.render(this.taskInputWrapper);

    //ИЗМЕНЕНИЕ СТАТУСА
    this.listElem.addEventListener('click', (event) => {
      if (event.target.classList.contains('checkbox')) {
        const taskId = event.target.closest('li').id;
        this.changeTaskStatus(taskId, event.target);
      }
    });

    this.menuWrapper = document.createElement('div');
    this.menuWrapper.id = 'menuWrapper';
    this.homePageContainer.append(this.menuWrapper);

    //FILLING ARRAY of tasks
    if (localStorage.getItem('tasks')) {
      this.renderListElem(this.tasks);
      this.renderMenu();
    }

    //РЕДАКТИРОВАНИЕ ТАСКИ
    this.listElem.addEventListener('dblclick', this.reduct);

    //ИЗМЕНЕНИЕ КЛАССА delete
    this.listElem.addEventListener('mouseover', (event) => {
      let target = event.target.closest('div');
      if (target) {
        target.lastElementChild.classList.add('showX');
      }
    });
    this.listElem.addEventListener('mouseout', (event) => {
      let target = event.target.closest('div');
      if (target) {
        target.lastElementChild.classList.remove('showX');
      }
    });
    this.listElem.addEventListener('mouseover', (event) => {
      if (event.target.classList.contains('delete')) {
        event.target.classList.add('showXFull');
      }
    });
    this.listElem.addEventListener('mouseout', (event) => {
      if (event.target.classList.contains('delete')) {
        event.target.classList.remove('showXFull');
      }
    });

    // УДАЛЕНИЕ ТАСКИ
    this.listElem.addEventListener('click', (event) => {
      if (event.target.classList.contains('delete')) {
        let taskId = event.target.closest('li').id;
        this.removeTask(taskId);
        // this.isAllChecked();
      }
    });
  }

  //METHODS
  //toggleCheckbox
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  //input handler
  taskInputHandler = (event) => {
    if (event.keyCode === 13) {
      if (event.target.value == '') {
        return;
      }

      const task = {
        id: new Date().getTime(),
        name: event.target.value,
        isDone: false,
      };
      this.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));

      event.target.value = '';
      this.renderListElem(this.tasks);
      this.renderMenu();
    }
  };
  //ИЗМЕНЕНИЕ СТАТУСА INPUT CHECKBOX and all
  inputCheckboxHandler = () => {
    let allCheckBoxes = document.querySelectorAll('.task-checkbox');
    console.log(allCheckBoxes);
    for (let checkBox of allCheckBoxes) {
      const taskId = checkBox.closest('li').id;
      this.changeTaskStatus(taskId, checkBox);
    }
  };

  //changeTaskStatus
  changeTaskStatus(taskId, elem) {
    let label = elem.parentElement;
    const span = label.nextElementSibling;

    const task = this.tasks.find((task) => task.id === parseInt(taskId));
    if (event.target.checked) {
      task.isDone = true;
      span.classList.add('done');
      label.classList.add('label-checked');
    } else if (event.target.checked === false) {
      task.isDone = false;
      span.classList.remove('done');
      label.classList.remove('label-checked');
    }

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.renderMenu();
  }

  //removeTask
  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== +taskId);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.renderListElem(this.tasks);
    this.renderMenu();
  }

  //changeTask
  changeTask(taskId, elem) {
    const task = this.tasks.find((task) => task.id === parseInt(taskId));
    task.name = elem.innerHTML;

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  reduct = () => {
    if (event.target.classList.contains('task')) {
      let taskName = event.target;
      taskName.setAttribute('contentEditable', true);
      taskName.classList.add('task-focus');
      const taskId = event.target.closest('li').id;

      //убрать  x
      taskName.nextElementSibling.classList.add('none');

      //saveChanges
      let saveChanges = () => {
        taskName.removeAttribute('contentEditable');
        taskName.classList.remove('task-focus');
        //вернуть x
        taskName.nextElementSibling.classList.remove('none');
        console.log(this);

        this.changeTask(taskId, event.target);
      };

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
  };

  //itemsLeft
  showItemsLeft() {
    const doneTasks = this.tasks.filter((task) => !task.isDone);
    this.remainNumber.innerHTML = doneTasks.length;
  }

  //clearCompleted
  clearCompletedHandler = () => {
    this.tasks = this.tasks.filter((task) => task.isDone !== true);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));

    this.renderListElem(this.tasks);
    this.renderMenu();
  };

  //allTasks
  buttonAllHandler = () => {
    let visibletasks = this.tasks;
    this.renderListElem(visibletasks);
  };

  //activeTasks
  buttonActiveHandler = () => {
    let visibletasks = this.tasks.filter((task) => task.isDone === false);
    this.renderListElem(visibletasks);
  };

  //completedTasks
  buttonCompletedHandler = () => {
    let visibletasks = this.tasks.filter((task) => task.isDone);
    this.renderListElem(visibletasks);
  };

  //renderListElem
  renderListElem(visibletasks) {
    this.listElem.innerHTML = '';
    visibletasks.map((task) => {
      this.newTask = new NewTask(
        task,
        this.listElem,
        // this.renderMenu,
        this.inputLabel,
        this.isAllChecked,
        this.toggleCheckbox
      );
      this.newTask.render(this.listElem);
    });
  }

  //hideInputLabel
  hideInputLabel() {
    if (this.tasks.length === 0) {
      this.inputLabel.classList.add('none');
    }
  }

  renderMenu = () => {
    this.menuWrapper.innerHTML = '';
    if (this.tasks.length !== 0) {
      this.menu = new Menu({
        buttonAllHandler: this.buttonAllHandler,
        buttonActiveHandler: this.buttonActiveHandler,
        buttonCompletedHandler: this.buttonCompletedHandler,
        clearCompletedHandler: this.clearCompletedHandler,
        showItemsLeft: this.showItemsLeft,
        tasks: this.tasks,
      });
      this.menu.render(this.menuWrapper);
    } else return;
  };

  //isAllChecked
  isAllChecked = () => {
    console.log('isAllChecked');
  };

  // isAllChecked = () => {
  //   const doneTasks = this.tasks.filter((task) => task.isDone === true);
  //   if (this.tasks.length === doneTasks.length && this.tasks.length > 0) {
  //     this.inputLabel.classList.add('all-checked');
  //   } else {
  //     this.inputLabel.classList.remove('all-checked');
  //   }
  // };
}
