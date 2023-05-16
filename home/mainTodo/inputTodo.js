//INPUT
function createInputTodo(createInputTodoArgs) {
  console.log(createInputTodoArgs);
  let {isAllChecked, inputCheckboxState, todoInputState} = createInputTodoArgs;

  //todo input div
  const todoInputHolder = document.createElement('div');
  todoInputHolder.id = 'todoInputHolder';
  mainTodo.append(todoInputHolder);

  // todo input label + checkbox
  const inputLabel = document.createElement('label');
  inputLabel.innerHTML = 'V';
  inputLabel.classList.add('inputLabel');
  todoInputHolder.append(inputLabel);

  const inputCheckbox = new Checkbox(inputCheckboxState.inputCheckboxArgs);
  inputCheckbox.render(inputLabel);

  if (tasks.length === 0) {
    inputLabel.classList.add('none');
  }

  isAllChecked();

  const todoInput = new Input(todoInputState.todoInputArgs);
  todoInput.render(todoInputHolder);

  let todoInputElem = document.getElementById('todoInput');
  todoInputElem.addEventListener(
    'keypress',
    todoInputState.todoInputElemHandler
  );
}
