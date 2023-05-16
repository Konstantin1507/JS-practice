//FOOTER

class Footer {
  init() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    const p1 = document.createElement('p');
    p1.innerHTML = 'Double-click to edit a todo';
    footer.append(p1);
    const p2 = document.createElement('p');
    p2.innerHTML = 'Written by TasteJS';
    footer.append(p2);
    const p3 = document.createElement('p');
    p3.innerHTML = 'Part of TodoMVC';
    footer.append(p3);
    return footer;
  }
  render(toEl) {
    toEl.append(this.init());
  }
}
