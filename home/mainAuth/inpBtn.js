function createSubmitBtn() {
  const submitBtn = document.createElement('button');
  submitBtn.id = 'submitBtn';
  submitBtn.innerHTML = 'SUBMIT';
  mainAuth.append(submitBtn);

  function isChecked() {
    console.log(loginInput.isCorrect);
    console.log(passwordInput.isCorrect);
  }

  submitBtn.addEventListener('click', () => {
    isChecked();
  });
}
