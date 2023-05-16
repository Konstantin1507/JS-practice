function createButtonActive(arg) {
  const li2 = document.createElement('li');
  buttons.append(li2);

  let buttonActive = new Button(arg);
  buttonActive.render(li2);
}
