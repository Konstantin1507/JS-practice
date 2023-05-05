//INPUT

const inputTodo = {
  inputLabel: document.createElement('label'),

  createInput() {
    //todo input div
    const todoInputHolder = document.createElement('div');
    todoInputHolder.id = 'todoInputHolder';
    mainTodo.append(todoInputHolder);

    // todo input label + checkbox
    this.inputLabel.innerHTML = 'V';
    this.inputLabel.classList.add('inputLabel');
    todoInputHolder.append(this.inputLabel);
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.classList.add('checkbox');
    this.inputLabel.append(inputCheckbox);
    if (tasks.length === 0) {
      this.inputLabel.classList.add('none');
    }
    this.isAllChecked();

    //ИЗМЕНЕНИЕ СТАТУСА INPUT CHECKBOX and all checkboxes
    inputCheckbox.addEventListener('click', () => {
      let allCheckBoxes = document.querySelectorAll('.task-checkbox');

      for (let checkBox of allCheckBoxes) {
        const taskId = checkBox.closest('li').id;
        this.changeTaskStatus(taskId, checkBox);
      }
    });

    //todo input
    const todoInput = document.createElement('input');
    todoInput.type = 'text';
    todoInput.id = 'todoInput';
    todoInput.classList.add('todo-validate-input');

    todoInput.setAttribute('placeholder', 'What needs to be done?');
    todoInputHolder.append(todoInput);

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
  },

  //isAllChecked
  isAllChecked() {
    const doneTasks = tasks.filter((task) => task.isDone === true);
    if (tasks.length === doneTasks.length && tasks.length > 0) {
      this.inputLabel.classList.add('all-checked');
    } else {
      this.inputLabel.classList.remove('all-checked');
    }
  },

  // changeTaskStatus
  changeTaskStatus(taskId, elem) {
    let label = elem.parentElement;
    const span = label.nextElementSibling;

    const task = tasks.find((task) => task.id === parseInt(taskId));
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
    clearCompletedButton.showClearCompleted();
    this.isAllChecked();
  },
};
