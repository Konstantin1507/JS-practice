//CONTROL BAR - bottom buttons

function createControleBar(state) {
  const controlBar = document.createElement('div');
  controlBar.id = 'controlBar';
  controlBar.classList.add('controlBar');
  // showHideControle();
  mainTodo.append(controlBar);

  itemsLeft.createItemsLeft();
  createButtons(state);
  clearCompletedButton.createClearComplited();

  // function showHideControle() {
  //   if (tasks.length !== 0) {
  //     this.control.classList.remove('hidden');
  //   } else {
  //     this.control.classList.add('hidden');
  //   }
  // }
}
