function createMainAuth() {
  const mainAuth = document.createElement('section');
  mainAuth.id = 'mainAuth';
  main.append(mainAuth);

  let loginInput = new InpAuth(
    'loginInput',
    'text',
    'loginInput',
    'Enter your login',
    function () {
      inputValues.loginInputValue = this.value;
    }
  );
  let loginInputElem = loginInput.render(mainAuth);

  let passwordInput = new InpAuth(
    'passwordInput',
    'password',
    'passwordInput',
    'Enter your password',
    function () {
      inputValues.passwordInputValue = this.value;
    }
  );
  let passwordInputElem = passwordInput.render(mainAuth);

  let inputValues = {
    loginInputValue: '',
    passwordInputValue: '',
  };

  function isChecked() {
    if (
      inputValues.loginInputValue == user.login &&
      inputValues.passwordInputValue == user.password
    ) {
      console.log('!!!!!!!!!!!!');
    }
  }

  createSubmitBtn(isChecked);
}
