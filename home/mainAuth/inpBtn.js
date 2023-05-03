function createSubmitBtn(callback) {
  const submitBtn = document.createElement('button');
  submitBtn.id = 'submitBtn';
  submitBtn.innerHTML = 'SUBMIT';
  mainAuth.append(submitBtn);

  submitBtn.addEventListener('click', callback);
}
