function createButtonCompleted() {
  const li3 = document.createElement('li');
  buttons.append(li3);
  const completedTasks = document.createElement('button');
  completedTasks.id = 'completed';
  completedTasks.classList.add('control-button');
  completedTasks.innerHTML = 'Completed';
  li3.append(completedTasks);

  //completedTasks
  completedTasks.addEventListener('click', function () {
    tasks = tasks.filter((task) => {
      const taskId = task.id;
      if (task.isDone !== true) {
        document.getElementById(taskId).classList.add('none');
        return true;
      } else {
        document.getElementById(taskId).classList.remove('none');
        return true;
      }
    });
  });
}
