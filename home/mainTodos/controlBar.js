//CONTROL BAR - bottom buttons

const controleBar = {
  control: document.createElement('div'),
  createControleBar() {
    this.control.id = 'control';
    this.control.classList.add('control');
    this.showHideControle();
    main.append(this.control);

    itemsLeft.createItemsLeft();
    createButtons();
    clearCompletedButton.createClearComplited();
  },

  showHideControle() {
    if (tasks.length !== 0) {
      this.control.classList.remove('hidden');
    } else {
      this.control.classList.add('hidden');
    }
  },
};
