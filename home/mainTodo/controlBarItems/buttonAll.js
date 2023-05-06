function createButtonAll(args) {
  const li1 = document.createElement('li');
  buttons.append(li1);

  let arg = {...args, onClick};
  let buttonAll = new Button(arg);
  buttonAll.render(li1);

  function onClick() {
    args.buttonAllHandler();
  }
}
