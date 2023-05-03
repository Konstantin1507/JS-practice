class InpAuth {
  constructor(name, type, id, placeholder, callback) {
    this.name = name;
    this.type = type;
    this.id = id;
    this.placeholder = placeholder;
    this.callback = callback;
    this.value = '';
  }
  init() {
    let inp = document.createElement('input');
    inp.name = this.name;
    inp.type = this.type;
    inp.id = this.id;
    inp.classList.add('inpAuth');
    inp.setAttribute('placeholder', this.placeholder);

    inp.addEventListener('change', this.callback);
    return inp;
  }
  render(toEl) {
    toEl.append(this.init());
  }
}
