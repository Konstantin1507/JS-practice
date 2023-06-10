class App {
  constructor() {
    this.init();
  }

  init() {
    this.header = new Header();

    this.container = document.createElement('main');
    this.container.id = 'main';

    this.loginPage = new Login({
      onLoginSuccess: this.renderPage,
      containerEl: this.container,
    });

    this.homePage = new Home();
    this.footer = new Footer();
  }

  render(root) {
    this.header.render(root);
    root.append(this.container);
    this.footer.render(root);

    this.renderPage();
  }

  // renderPage = () => {
  //   this.container.innerHTML = '';
  //   if (!user.isAuthenticated) {
  //     this.loginPage.render({
  //       // onLoginSuccess: this.render,
  //       // containerEl: this.container,
  //     });
  //   } else {
  //     this.homePage.render(this.container);
  //   }
  // };
  renderPage = () => {
    this.homePage.render(this.container);
  };
}
