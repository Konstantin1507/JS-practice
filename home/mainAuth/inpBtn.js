function createSubmitBtn() {
  const submitBtn = document.createElement('button');
  submitBtn.id = 'submitBtn';
  submitBtn.innerHTML = 'SUBMIT';
  mainAuth.append(submitBtn);

  //FUNCTIONS
  submitBtn.addEventListener('click', function () {
    let loginInp = document.getElementById('loginInput');
    let passwordInp = document.getElementById('passwordInput');
    let mainAuth = document.getElementById('mainAuth');
    if (loginInp.value === user.login && +passwordInp.value === user.password) {
      console.log('!!!!');
      createMainTodo();
      mainAuth.classList.add('none');
    }
  });
}
