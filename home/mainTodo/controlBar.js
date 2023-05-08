//CONTROL BAR - bottom buttons

function createControleBar(
  filterButtonsState,
  clearCompletedState,
  controleBarState
) {
  const controlBarDiv = document.createElement('div');
  controlBarDiv.id = 'controlBar';
  controlBarDiv.classList.add('controlBar');
  mainTodo.insertAdjacentElement('afterend', controlBarDiv);

  console.log(controleBarState);

  controleBarState.showHideControleFunc();

  itemsLeft.createItemsLeft();

  createButtons(filterButtonsState);
  createClearComplited(clearCompletedState);
}
