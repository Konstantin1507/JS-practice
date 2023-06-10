class NewTask {
  constructor(
    task,
    listElem,
    // renderMenu,
    inputLabel,
    isAllChecked,
    toggleCheckbox
  ) {
    this.task = task;
    this.listElem = listElem;
    // this.renderMenu = renderMenu;
    this.inputLabel = inputLabel;
    this.isAllChecked = isAllChecked;
    this.toggleCheckbox = toggleCheckbox;
    this.init();
  }
  init() {
    //li
    this.newElem = document.createElement('li');
    this.newElem.classList.add('listElem-li');
    this.newElem.id = this.task.id;

    //div
    this.divElem = document.createElement('div');
    this.divElem.classList.add('listElem-div');
    this.newElem.append(this.divElem);

    //label + checkbox
    this.label = document.createElement('label');
    this.label.innerHTML = 'V';
    this.label.classList.add('label');
    this.divElem.append(this.label);

    //span
    this.taskName = document.createElement('span');
    this.taskName.classList.add('task');
    this.taskName.innerHTML = this.task.name;
    this.divElem.append(this.taskName);
    if (this.task.isDone) {
      this.taskName.classList.add('done');
    }
    //delete button
    this.delBtn = document.createElement('button');
    this.delBtn.classList.add('delete');
    this.delBtn.innerHTML = 'X';
    this.divElem.append(this.delBtn);
  }
  render(toEl) {
    toEl.append(this.newElem);
    this.newTaskCheckboxArgs = {
      type: 'checkbox',
      class: 'checkbox',
      classAdd: 'task-checkbox',
      isChecked: true,
      onClick: this.toggleCheckbox,
    };

    if (this.task.isDone === true) {
      this.label.classList.add('label-checked');
      this.newTaskCheckbox = new Checkbox({
        isChecked: true,
        ...this.newTaskCheckboxArgs,
      });
      this.newTaskCheckbox.render(this.label);
    } else {
      this.newTaskCheckbox = new Checkbox({
        isChecked: false,
        ...this.newTaskCheckboxArgs,
      });
      this.newTaskCheckbox.render(this.label);
    }
    // this.renderMenu();
    // this.showItemsLeft();
    this.inputLabel.classList.remove('none');
    this.isAllChecked();
  }
}
