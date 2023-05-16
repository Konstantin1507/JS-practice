function createButtonAll(arg) {
  const li1 = document.createElement('li');
  buttons.append(li1);

  let buttonAll = new Button(arg);
  buttonAll.render(li1);
}
