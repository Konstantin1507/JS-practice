function createButtonActive(args) {
  const li2 = document.createElement('li');
  buttons.append(li2);
  console.log(args);

  let arg = {...args, onClick};
  let buttonActive = new Button(arg);
  buttonActive.render(li2);

  function onClick() {
    args.buttonActiveHandler();
  }
}
