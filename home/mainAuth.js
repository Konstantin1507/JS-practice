function createMainAuth(onChangeMain, onClickMain) {
  const mainAuth = document.createElement('section');
  mainAuth.id = 'mainAuth';
  main.append(mainAuth);

  let loginInputArgs = {
    name: 'loginInput',
    type: 'text',
    id: 'loginInput',
    class: 'inpAuth',
    placeholder: 'Enter your login',
    onChange: onChageParent,
  };

  let loginInput = new Input({...loginInputArgs});
  loginInput.render(mainAuth);
  console.log(loginInput);

  let passwordInputArgs = {
    name: 'passwordInput',
    type: 'password',
    id: 'passwordInput',
    class: 'inpAuth',
    placeholder: 'Enter your password',
    onChange: onChageParent,
  };

  let passwordInput = new Input({...passwordInputArgs});
  passwordInput.render(mainAuth);

  function onChageParent(value) {
    onChangeMain(value);
  }

  let authorizButtonArgs = {
    type: 'button',
    id: 'submitBtn',
    class: 'authBtn',
    innerHtml: 'SUBMIT',
    onClick: onClickParent,
  };

  let authorizButton = new Button({...authorizButtonArgs});
  authorizButton.render(mainAuth);

  function onClickParent() {
    onClickMain();
  }
}
