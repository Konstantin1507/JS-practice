class Checkbox {
  constructor(args) {
    this.type = args.type;
    this.class = args.class;
    this.classAdd = args.classAdd;
    this.onClick = args.onClick;
  }
  init() {
    let checkbox = document.createElement('input');
    checkbox.type = this.type;
    checkbox.classList.add(this.class);
    checkbox.classList.add(this.classAdd);
    checkbox.onclick = () => {
      this.onClick();
    };
    return checkbox;
  }
  render(toEl) {
    toEl.append(this.init());
  }
}
