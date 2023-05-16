//HEADER

class Header {
  init() {
    const header = document.createElement('header');
    header.classList.add('headerSection');
    let headerName = document.createElement('h1');
    headerName.textContent = 'todos';
    headerName.classList.add('header');
    header.append(headerName);
    return header;
  }
  render(toEl) {
    toEl.append(this.init());
  }
}
