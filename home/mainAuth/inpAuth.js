function createInpAuth(name, type, id, placeholder) {
  let inp = document.createElement('input');
  inp.name = name;
  inp.type = type;
  inp.id = id;
  inp.classList.add('inpAuth');
  inp.setAttribute('placeholder', placeholder);
  mainAuth.append(inp);
}
