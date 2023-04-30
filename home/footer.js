//FOOTER

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');
  root.append(footer);

  let texts = {
    p1: 'Double-click to edit a todo',
    p2: 'Written by TasteJS',
    p3: 'Part of TodoMVC',
  };

  function createFooterP(name, text) {
    name = document.createElement('p');
    name.innerHTML = text;
    footer.append(name);
  }

  createFooterP('p1', texts.p1);
  createFooterP('p2', texts.p2);
  createFooterP('p3', texts.p3);
}
