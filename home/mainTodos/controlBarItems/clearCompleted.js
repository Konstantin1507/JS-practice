//clearCompleted

const clearCompletedButton = {
  createClearComplited() {
    const clearCompletedDiv = document.createElement('div');
    clearCompletedDiv.id = 'clearCompletedDiv';
    control.append(clearCompletedDiv);

    const clearCompleted = document.createElement('button');
    clearCompleted.id = 'clearCompleted';
    clearCompleted.innerHTML = 'Clear completed';
    clearCompletedDiv.append(clearCompleted);
    this.showClearCompleted();

    clearCompleted.addEventListener('click', () => {
      tasks = tasks.filter((task) => {
        if (task.isDone !== true) {
          return true;
        } else {
          const taskId = task.id;
          document.getElementById(taskId).remove();
          return false;
        }
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
      controleBar.showHideControle();
      this.showClearCompleted();
      if (tasks.length === 0) {
        inputTodo.inputLabel.classList.add('none');
      }
    });
  },

  // showClearCompleted;
  showClearCompleted() {
    const doneTasks = tasks.filter((task) => task.isDone === true);
    if (doneTasks.length === 0) {
      clearCompleted.innerHTML = '';
    } else {
      clearCompleted.innerHTML = 'Clear completed';
    }
  },
};
