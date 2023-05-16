const root = document.getElementById('root');

//HEADER
let header = new Header();
header.render(root);

const container = document.createElement('main');
container.id = 'main';
root.append(container);

//AUTHENTIFICATION
let login = new Authentific();
login.render(container);

// let home = new Home();
// home.render(container);

//FOOTER
let footer = new Footer();
footer.render(root);

function renderApp() {
  container.innerHTML = '';
  let home = new Home();
  home.render(container);
}
