function createNewTask(task, isAllChecked, showItemsLeft, showHideControle) {
  const newElem = document.createElement('li');
  newElem.classList.add('listElem-li');
  newElem.id = task.id;
  listElem.append(newElem);
  //div
  const divElem = document.createElement('div');
  divElem.classList.add('listElem-div');
  newElem.append(divElem);
  //label + checkbox
  const label = document.createElement('label');
  label.innerHTML = 'V';
  label.classList.add('label');
  divElem.append(label);
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');
  checkbox.classList.add('task-checkbox');
  label.append(checkbox);
  if (task.isDone === true) {
    checkbox.setAttribute('checked', '');
    checkbox.parentElement.classList.add('label-checked');
  }
  //span
  const taskName = document.createElement('span');
  taskName.classList.add('task');
  taskName.innerHTML = task.name;
  divElem.append(taskName);
  if (task.isDone) {
    taskName.classList.add('done');
  }
  //delete button
  const delBtn = document.createElement('button');
  delBtn.classList.add('delete');
  delBtn.innerHTML = 'X';
  divElem.append(delBtn);

  showHideControle();
  showItemsLeft();
  let inputLabel = document.querySelector('.inputLabel');
  inputLabel.classList.remove('none');

  isAllChecked();
}
