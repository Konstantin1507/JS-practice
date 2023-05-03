function createMainAuth() {
  const mainAuth = document.createElement('section');
  mainAuth.id = 'mainAuth';
  main.append(mainAuth);

  let loginInput = new InpAuth(
    'loginInput',
    'text',
    'loginInput',
    'Enter your login',
    user.login
  );
  let loginInputElem = loginInput.render(mainAuth);
  console.log(loginInputElem);

  let passwordInput = new InpAuth(
    'passwordInput',
    'password',
    'passwordInput',
    'Enter your password',
    user.password
  );
  let passwordInputElem = passwordInput.render(mainAuth);
  console.log(passwordInputElem);

  console.log(loginInput.isCorrect);
  console.log(passwordInput.isCorrect);

  createSubmitBtn();

  function isChecked() {
    console.log(loginInput.isCorrect);
    console.log(passwordInput.isCorrect);
  }
}
