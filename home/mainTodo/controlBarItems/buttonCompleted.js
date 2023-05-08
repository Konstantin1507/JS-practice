function createButtonCompleted(arg) {
  const li3 = document.createElement('li');
  buttons.append(li3);

  // let arg = {...args, onClick};
  let buttonCompleted = new Button(arg);
  buttonCompleted.render(li3);
}
