//INPUT
function createInputTodo(createInputTodoArgs) {
  console.log(createInputTodoArgs);
  let {isAllChecked, changeTaskStatus, showHideControle, showClearCompleted} =
    createInputTodoArgs;

  //todo input div
  const todoInputHolder = document.createElement('div');
  todoInputHolder.id = 'todoInputHolder';
  mainTodo.append(todoInputHolder);

  // todo input label + checkbox

  const inputLabel = document.createElement('label');
  inputLabel.innerHTML = 'V';

  inputLabel.classList.add('inputLabel');
  todoInputHolder.append(inputLabel);
  const inputCheckbox = document.createElement('input');
  inputCheckbox.type = 'checkbox';
  inputCheckbox.classList.add('checkbox');
  inputLabel.append(inputCheckbox);
  if (tasks.length === 0) {
    inputLabel.classList.add('none');
  }

  isAllChecked();

  //ИЗМЕНЕНИЕ СТАТУСА INPUT CHECKBOX and all checkboxes
  inputCheckbox.addEventListener('click', () => {
    let allCheckBoxes = document.querySelectorAll('.task-checkbox');

    for (let checkBox of allCheckBoxes) {
      const taskId = checkBox.closest('li').id;
      changeTaskStatus(taskId, checkBox);
    }
  });

  //todo input
  const todoInput = document.createElement('input');
  todoInput.type = 'text';
  todoInput.id = 'todoInput';
  todoInput.classList.add('todo-validate-input');

  todoInput.setAttribute('placeholder', 'What needs to be done?');
  todoInputHolder.append(todoInput);

  todoInput.addEventListener('keypress', (event) => {
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

      createNewTask(task, isAllChecked, showHideControle);

      todoInput.value = '';
    }
  });
}
