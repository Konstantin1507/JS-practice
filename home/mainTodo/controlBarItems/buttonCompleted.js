function createButtonCompleted(args) {
  const li3 = document.createElement('li');
  buttons.append(li3);

  let arg = {...args, onClick};
  let buttonActive = new Button(arg);
  buttonActive.render(li3);

  function onClick() {
    args.buttonCompletedHandler();
  }
}
