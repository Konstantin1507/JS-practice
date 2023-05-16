class Input {
  constructor(args) {
    this.name = args.name;
    this.type = args.type;
    this.id = args.id;
    this.class = args.class;
    this.placeholder = args.placeholder;
    this.onChange = args.onChange;
    this.onKeydown = args.onKeydown;
  }
  init() {
    let inp = document.createElement('input');
    inp.name = this.name;
    inp.type = this.type;
    inp.id = this.id;
    inp.classList.add(this.class);
    inp.setAttribute('placeholder', this.placeholder);
    inp.onchange = this.onChange;
    inp.onkeydown = this.onKeydown;
    return inp;
  }
  render(toEl) {
    toEl.append(this.init());
  }
}
