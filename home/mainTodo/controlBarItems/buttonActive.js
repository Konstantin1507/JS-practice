function createButtonActive() {
  const li2 = document.createElement('li');
  buttons.append(li2);
  const activeTasks = document.createElement('button');
  activeTasks.id = 'active';
  activeTasks.classList.add('control-button');
  activeTasks.innerHTML = 'Active';
  li2.append(activeTasks);

  //activeTasks
  activeTasks.addEventListener('click', function () {
    tasks = tasks.filter((task) => {
      const taskId = task.id;
      if (task.isDone === true) {
        document.getElementById(taskId).classList.add('none');
        return true;
      } else {
        document.getElementById(taskId).classList.remove('none');
        return true;
      }
    });
  });
}
