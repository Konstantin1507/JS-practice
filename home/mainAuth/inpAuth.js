class InpAuth {
  constructor(name, type, id, placeholder, userProp) {
    this.name = name;
    this.type = type;
    this.id = id;
    this.placeholder = placeholder;
    this.value = '';
    this.isCorrect = false;
    this.userProp = userProp;
  }
  init() {
    let inp = document.createElement('input');
    inp.name = this.name;
    inp.type = this.type;
    inp.id = this.id;
    inp.classList.add('inpAuth');
    inp.setAttribute('placeholder', this.placeholder);

    inp.addEventListener('change', () => {
      this.value = inp.value;
      console.log(this.value);

      if (this.value == this.userProp) {
        this.isCorrect = true;
      }
      console.log(this);
    });
    return inp;
  }
  render(toEl) {
    toEl.append(this.init());
  }
}
