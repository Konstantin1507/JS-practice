//clearCompleted

function createClearComplited(args) {
  console.log(args);

  const clearCompletedDiv = document.createElement('div');
  clearCompletedDiv.id = 'clearCompletedDiv';
  controlBar.append(clearCompletedDiv);

  const clearCompleted = new Button(args.clearCompletedArgs);
  console.log(args.clearCompletedArgs);

  clearCompleted.render(clearCompletedDiv);

  args.showClearCompleted();
}
