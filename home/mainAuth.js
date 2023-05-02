function createMainAuth() {
  const mainAuth = document.createElement('section');
  mainAuth.id = 'mainAuth';
  main.append(mainAuth);

  createInpAuth('loginInput', 'text', 'loginInput', 'Enter your login');

  createInpAuth(
    'passwordInput',
    'password',
    'passwordInput',
    'Enter your password'
  );

  createSubmitBtn();
}
