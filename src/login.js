class Login {
  constructor(props) {
    this.containerEl = props.containerEl;
    this.onLoginSuccess = props.onLoginSuccess;

    this.inputValues = {
      loginInputValue: '',
      passwordInputValue: '',
    };

    this.init();
  }

  init() {
    this.loginPageContainer = document.createElement('section');
    this.loginPageContainer.id = 'loginPage';

    this.loginInput = new Input({
      name: 'loginInput',
      type: 'text',
      id: 'loginInput',
      class: 'inpAuth',
      placeholder: 'Enter your login',
      onChange: this.handleEmailChange,
    });

    this.passwordInput = new Input({
      name: 'passwordInput',
      type: 'password',
      id: 'passwordInput',
      class: 'inpAuth',
      placeholder: 'Enter your password',
      onChange: this.passwordInputHandler,
    });

    this.authorizeButton = new Button({
      type: 'button',
      id: 'submitBtn',
      classes: ['authBtn'],
      innerHtml: 'SUBMIT',
      onClick: this.authorizeButtonHandler,
    });
  }

  handleEmailChange = (event) => {
    this.inputValues.loginInputValue = event.target.value;
  };

  passwordInputHandler = (event) => {
    this.inputValues.passwordInputValue = event.target.value;
  };

  authorizeButtonHandler = () => {
    const isAuthenticated =
      user.login === this.inputValues.loginInputValue &&
      user.password == this.inputValues.passwordInputValue;

    if (!isAuthenticated) {
      return;
    }
    user.isAuthenticated = true;

    this.onLoginSuccess();
  };

  render() {
    let toEl = this.containerEl;
    this.loginInput.render(this.loginPageContainer);
    this.passwordInput.render(this.loginPageContainer);
    this.authorizeButton.render(this.loginPageContainer);

    toEl.append(this.loginPageContainer);
  }
}
