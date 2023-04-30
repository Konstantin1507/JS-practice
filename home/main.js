//MAIN SECTION
function createMain() {
  const main = document.createElement('section');
  main.id = 'main';
  root.append(main);

  inputTodo.createInput();
  createListElem();
  controleBar.createControleBar();
}
