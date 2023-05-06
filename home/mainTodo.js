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
  };

  inputTodo.createInput();
  createListElem();
  createControleBar({...state});
}
