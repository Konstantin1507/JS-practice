﻿//buttons
function createButtons(state) {
  const buttons = document.createElement('ul');
  buttons.id = 'buttons';
  controlBar.append(buttons);

  //ИЗМЕНЕНИЕ АКТИВОСТИ КНОПКИ
  buttons.addEventListener('click', function () {
    const buttons = document.querySelectorAll('.control-button');

    for (let button of buttons) {
      if (button === event.target) {
        button.classList.add('activeButton');
      } else {
        button.classList.remove('activeButton');
      }
    }
  });
  createButtonAll(state.buttonAllArgs);
  createButtonActive(state.buttonActiveArgs);
  createButtonCompleted(state.buttonCompletedArgs);
}
