//MAIN SECTION
function createMainTodo() {
  const mainTodo = document.createElement('section');
  mainTodo.id = 'mainTodo';
  main.append(mainTodo);

  inputTodo.createInput();
  createListElem();
  controleBar.createControleBar();
}
