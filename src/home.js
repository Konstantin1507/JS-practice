class Home {
  constructor() {
    //MAIN SECTION
    this.main = document.createElement('section');
    this.main.id = 'main';
    // container.append(main);

    //creating ARRAY of tasks
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    //INPUT
    //todo input div
    this.todoInputHolder = document.createElement('div');
    this.todoInputHolder.id = 'todoInputHolder';
    this.main.append(this.todoInputHolder);

    // todo input label + checkbox
    this.inputLabel = document.createElement('label');
    this.inputLabel.innerHTML = 'V';
    this.inputLabel.classList.add('inputLabel');
    this.todoInputHolder.append(this.inputLabel);

    this.inputCheckboxArgs = {
      type: 'checkbox',
      class: 'checkbox',
      classAdd: null,
      isChecked: false,
      onClick: this.inputCheckboxHandler,
    };
    this.inputCheckbox = new Checkbox(this.inputCheckboxArgs);
    this.inputCheckbox.render(this.inputLabel);

    this.hideInputLabel();
    this.isAllChecked();

    //todo input
    this.todoInputArgs = {
      name: 'todoInput',
      type: 'text',
      id: 'todoInput',
      class: 'todo-validate-input',
      placeholder: 'What needs to be done?',
      onChange: null,
      onKeydown: this.todoInputElemHandler,
    };

    this.todoInput = new Input(this.todoInputArgs);
    console.log(this.todoInput);
    this.todoInput.render(this.todoInputHolder);

    //UL - list
    this.listElem = document.createElement('ul');
    this.listElem.id = 'listElem';
    this.main.append(this.listElem);

    //ИЗМЕНЕНИЕ СТАТУСА
    this.listElem.addEventListener('click', (event) => {
      if (event.target.classList.contains('checkbox')) {
        const taskId = event.target.closest('li').id;
        this.changeTaskStatus(taskId, event.target);
      }
    });

    //CONTROL - bottoms
    this.control = document.createElement('div');
    this.control.classList.add('control');
    this.showHideControle();
    this.main.append(this.control);

    //items left
    this.remain = document.createElement('div');
    this.control.append(this.remain);
    this.remainNumber = document.createElement('span');
    this.remainNumber.id = 'remainNumber';
    this.remainNumber.innerHTML = 0;
    this.remain.append(this.remainNumber);
    this.remainText = document.createElement('span');
    this.remainText.innerHTML = ' items left';
    this.remain.append(this.remainText);

    //buttons
    this.buttons = document.createElement('ul');
    this.buttons.id = 'buttons';
    this.control.append(this.buttons);

    this.buttonAllArgs = {
      type: 'button',
      id: 'all',
      class: 'control-button',
      classAdd: 'activeButton',
      innerHtml: 'All',
      onClick: this.buttonAllHandler,
    };
    this.li1 = document.createElement('li');
    this.buttons.append(this.li1);
    this.buttonAll = new Button(this.buttonAllArgs);
    this.buttonAll.render(this.li1);

    this.buttonActiveArgs = {
      type: 'button',
      id: 'active',
      class: 'control-button',
      classAdd: null,
      innerHtml: 'Active',
      onClick: this.buttonActiveHandler,
    };
    this.li2 = document.createElement('li');
    this.buttons.append(this.li2);
    this.buttonActive = new Button(this.buttonActiveArgs);
    this.buttonActive.render(this.li2);

    this.buttonCompletedArgs = {
      type: 'button',
      id: 'completed',
      class: 'control-button',
      classAdd: null,
      innerHtml: 'Completed',
      onClick: this.buttonCompletedHandler,
    };
    this.li3 = document.createElement('li');
    this.buttons.append(this.li3);
    this.buttonCompleted = new Button(this.buttonCompletedArgs);
    this.buttonCompleted.render(this.li3);

    //clearCompleted
    this.clearCompletedArgs = {
      type: 'button',
      id: 'clearCompleted',
      class: 'clearCompleted',
      innerHtml: 'Clear completed',
      onClick: this.clearCompletedHandler,
    };
    this.clearCompletedArgsInvisible = {
      type: 'button',
      id: 'clearCompleted',
      class: 'clearCompleted',
      innerHtml: '',
      onClick: this.clearCompletedHandler,
    };
    this.clearCompletedDiv = document.createElement('div');
    this.clearCompletedDiv.id = 'clearCompletedDiv';
    this.control.append(this.clearCompletedDiv);
    this.renderClearCompleted();

    //FILLING ARRAY of tasks
    if (localStorage.getItem('tasks')) {
      this.tasks.map((task) => {
        this.createNewTask(task);
      });
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
        const taskId = event.target.closest('li').id;
        this.removeTask(taskId);
        this.isAllChecked();
      }
    });

    //ИЗМЕНЕНИЕ АКТИВОСТИ КНОПКИ
    this.buttons.addEventListener('click', function () {
      const buttons = document.querySelectorAll('.control-button');

      for (let button of buttons) {
        if (button === event.target) {
          button.classList.add('activeButton');
        } else {
          button.classList.remove('activeButton');
        }
      }
    });
  }

  //METHODS

  //createNewTask
  createNewTask(task) {
    //li
    this.newElem = document.createElement('li');
    this.newElem.classList.add('listElem-li');
    this.newElem.id = task.id;
    this.listElem.append(this.newElem);

    //div
    this.divElem = document.createElement('div');
    this.divElem.classList.add('listElem-div');
    this.newElem.append(this.divElem);

    //label + checkbox
    this.label = document.createElement('label');
    this.label.innerHTML = 'V';
    this.label.classList.add('label');
    this.divElem.append(this.label);

    //Args
    this.newTaskCheckboxArgs = {
      type: 'checkbox',
      class: 'checkbox',
      classAdd: 'task-checkbox',
      isChecked: true,
      onClick: this.toggleCheckbox,
    };
    this.newTaskCheckboxArgsUncheck = {
      type: 'checkbox',
      class: 'checkbox',
      classAdd: 'task-checkbox',
      isChecked: false,
      onClick: this.toggleCheckbox,
    };
    if (task.isDone === true) {
      this.label.classList.add('label-checked');
      this.newTaskCheckbox = new Checkbox(this.newTaskCheckboxArgs);
      this.newTaskCheckbox.render(this.label);
    } else {
      this.newTaskCheckbox = new Checkbox(this.newTaskCheckboxArgsUncheck);
      this.newTaskCheckbox.render(this.label);
    }
    //span
    this.taskName = document.createElement('span');
    this.taskName.classList.add('task');
    this.taskName.innerHTML = task.name;
    this.divElem.append(this.taskName);
    if (task.isDone) {
      this.taskName.classList.add('done');
    }
    //delete button
    this.delBtn = document.createElement('button');
    this.delBtn.classList.add('delete');
    this.delBtn.innerHTML = 'X';
    this.divElem.append(this.delBtn);

    this.showHideControle();
    this.showItemsLeft();
    this.inputLabel.classList.remove('none');
    this.isAllChecked();
  }

  //toggleCheckbox
  toggleCheckbox() {
    this.isChecked = !this.isChecked;
    console.log(
      `Checkbox ' is now ${this.isChecked ? 'checked' : 'unchecked'}`
    );
  }

  //input handler
  todoInputElemHandler = (event) => {
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
      this.createNewTask(task);
      event.target.value = '';
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
    this.showItemsLeft();
    this.showClearCompleted();
    this.isAllChecked();
  }

  //removeTask
  removeTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== +taskId);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    document.getElementById(taskId).remove();
    this.showHideControle();
    this.showClearCompleted();
    this.showItemsLeft();
    this.hideInputLabel();
  }

  //changeTask
  changeTask(taskId, elem) {
    const task = this.tasks.find((task) => task.id === parseInt(taskId));
    task.name = elem.innerHTML;

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.showItemsLeft();
    this.showClearCompleted();
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
    const doneTasks = this.tasks.filter((task) => task.isDone === true);
    this.remainNumber.innerHTML = this.tasks.length - doneTasks.length;
  }

  //clearCompleted
  clearCompletedHandler = () => {
    this.tasks = this.tasks.filter((task) => task.isDone !== true);
    this.listElem.innerHTML = '';
    this.renderListElem(this.tasks);

    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.showHideControle();
    this.showClearCompleted();
    this.hideInputLabel();
  };

  //howClearCompleted
  showClearCompleted() {
    this.clearCompletedDiv.innerHTML = '';
    this.renderClearCompleted();
  }

  //renderClearCompleted
  renderClearCompleted() {
    const doneTasks = this.tasks.filter((task) => task.isDone === true);
    if (doneTasks.length === 0) {
      let clearCompleted = new Button(this.clearCompletedArgsInvisible);
      clearCompleted.render(this.clearCompletedDiv);
    } else {
      let clearCompleted = new Button(this.clearCompletedArgs);
      clearCompleted.render(this.clearCompletedDiv);
    }
  }

  //activeTasks
  buttonActiveHandler = () => {
    let visibletasks = this.tasks.filter((task) => task.isDone === false);
    this.listElem.innerHTML = '';
    this.renderListElem(visibletasks);
  };

  //allTasks
  buttonAllHandler = () => {
    let visibletasks = this.tasks;
    this.listElem.innerHTML = '';
    this.renderListElem(visibletasks);
  };

  //completedTasks
  buttonCompletedHandler = () => {
    let visibletasks = this.tasks.filter((task) => task.isDone);
    this.listElem.innerHTML = '';
    this.renderListElem(visibletasks);
  };

  //renderListElem
  renderListElem(visibletasks) {
    visibletasks.map((task) => {
      this.createNewTask(task);
    });
  }

  //hideInputLabel
  hideInputLabel() {
    if (this.tasks.length === 0) {
      this.inputLabel.classList.add('none');
    }
  }

  //showHideControle
  showHideControle() {
    if (this.tasks.length !== 0) {
      this.control.classList.remove('hidden');
    } else {
      this.control.classList.add('hidden');
    }
  }
  //
  //isAllChecked
  isAllChecked() {
    const doneTasks = this.tasks.filter((task) => task.isDone === true);
    if (this.tasks.length === doneTasks.length && this.tasks.length > 0) {
      this.inputLabel.classList.add('all-checked');
    } else {
      this.inputLabel.classList.remove('all-checked');
    }
  }
  render(toEl) {
    toEl.append(this.main);
  }
}
