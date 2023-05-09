//clearCompleted

function createClearComplited(args) {
  const clearCompletedDiv = document.createElement('div');
  clearCompletedDiv.id = 'clearCompletedDiv';
  controlBar.append(clearCompletedDiv);

  const clearCompleted = new Button(args.clearCompletedArgs);
  clearCompleted.render(clearCompletedDiv);

  args.showClearCompletedFunc();
}
