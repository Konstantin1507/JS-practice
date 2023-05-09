class Button {
  constructor(args) {
    this.type = args.type;
    this.id = args.id;
    this.class = args.class;
    this.classAdd = args.classAdd;
    this.innerHtml = args.innerHtml;
    this.onClick = args.onClick;
  }

  init() {
    let btn = document.createElement('button');
    btn.type = this.type;
    btn.id = this.id;
    btn.classList.add(this.class);
    btn.classList.add(this.classAdd);
    btn.innerHTML = this.innerHtml;
    btn.onclick = () => {
      this.onClick();
    };
    return btn;
  }
  render(toEl) {
    toEl.append(this.init());
  }
}
