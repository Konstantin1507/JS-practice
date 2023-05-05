function createButtonAll() {
  const li1 = document.createElement('li');
  buttons.append(li1);
  const allTasks = document.createElement('button');
  allTasks.id = 'all';
  allTasks.classList.add('control-button');
  allTasks.classList.add('activeButton');
  allTasks.innerHTML = 'All';
  li1.append(allTasks);

  //allTasks
  allTasks.addEventListener('click', function () {
    tasks = tasks.filter((task) => {
      const taskId = task.id;
      if (document.getElementById(taskId).classList.contains('none')) {
        document.getElementById(taskId).classList.remove('none');
        return true;
      } else {
        return true;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });
}
