//CONTROL BAR - bottom buttons

function createControleBar(
  filterButtonsState,
  clearCompletedState,
  controleBarState
) {
  const controlBarDiv = document.createElement('div');
  controlBarDiv.id = 'controlBar';
  controlBarDiv.classList.add('controlBar');
  mainTodo.append(controlBarDiv);

  controleBarState.showHideControleFunc();

  itemsLeft.createItemsLeft();

  createButtons(filterButtonsState);
  createClearComplited(clearCompletedState);

  // function showHideControle() {
  //   if (tasks.length !== 0) {
  //     this.control.classList.remove('hidden');
  //   } else {
  //     this.control.classList.add('hidden');
  //   }
  // }
}
