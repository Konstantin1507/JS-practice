class Button {
  constructor(args) {
    this.btn = document.createElement('button');
    this.type = args.type;
    this.id = args.id;
    this.classes = args.classes;
    this.innerHtml = args.innerHtml;
    this.onClick = args.onClick;
    this.toListen = args.toListen;
    this.init();
  }

  init() {
    this.btn = document.createElement('button');
    this.btn.type = this.type;
    this.btn.id = this.id;
    this.classes.forEach((className) => {
      this.btn.classList.add(className);
    });
    this.btn.innerHTML = this.innerHtml;
    this.btn.onclick = () => {
      this.toListen();
      this.onClick();
    };
  }
  render(toEl) {
    toEl.append(this.btn);
  }
}
