class Authentific {
  constructor() {
    this.authentification = document.createElement('section');
    this.authentification.id = 'authentification';

    this.inputValues = {
      loginInputValue: '',
      passwordInputValue: '',
    };

    //loginInput
    this.loginInputArgs = {
      name: 'loginInput',
      type: 'text',
      id: 'loginInput',
      class: 'inpAuth',
      placeholder: 'Enter your login',
      onChange: this.loginInputHandler,
    };
    this.loginInput = new Input({...this.loginInputArgs});
    this.loginInput.render(this.authentification);

    //passwordInput
    this.passwordInputArgs = {
      name: 'passwordInput',
      type: 'password',
      id: 'passwordInput',
      class: 'inpAuth',
      placeholder: 'Enter your password',
      onChange: this.passwordInputHandler,
    };
    this.passwordInput = new Input({...this.passwordInputArgs});
    this.passwordInput.render(this.authentification);

    //authorizButton
    this.authorizButtonArgs = {
      type: 'button',
      id: 'submitBtn',
      class: 'authBtn',
      innerHtml: 'SUBMIT',
      onClick: this.authorizButtonHandler,
    };
    this.authorizButton = new Button({...this.authorizButtonArgs});
    this.authorizButton.render(this.authentification);
  }
  //METHODS

  //INPUT LOGIN
  loginInputHandler = (event) => {
    this.inputValues.loginInputValue = event.target.value;
    console.log(this.inputValues);
  };

  //INPUT PASSWORD
  passwordInputHandler = (event) => {
    this.inputValues.passwordInputValue = event.target.value;
    console.log(this.inputValues);
  };

  //BUTTON SUBMIT
  authorizButtonHandler = () => {
    if (
      user.login === this.inputValues.loginInputValue &&
      user.password == this.inputValues.passwordInputValue
    ) {
      user.isAuthenticated = true;
      renderApp();
    } else return;
  };

  //RENDER
  render(toEl) {
    toEl.append(this.authentification);
  }
}
