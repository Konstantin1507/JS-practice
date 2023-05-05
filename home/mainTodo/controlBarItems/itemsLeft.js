const itemsLeft = {
  remainNumber: document.createElement('span'),

  createItemsLeft() {
    const remain = document.createElement('div');
    control.append(remain);

    this.remainNumber.id = 'remainNumber';
    this.remainNumber.innerHTML = 0;
    remain.append(this.remainNumber);
    const remainText = document.createElement('span');
    remainText.innerHTML = ' items left';
    remain.append(remainText);
  },

  showItemsLeft() {
    const doneTasks = tasks.filter((task) => task.isDone === true);
    this.remainNumber.innerHTML = tasks.length - doneTasks.length;
  },
};
