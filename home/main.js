//MAIN SECTION
function createMain() {
  const main = document.createElement('main');
  main.id = 'main';
  root.append(main);

  function onChangeMain(value) {
    console.log(value);
    console.log(event.target.value);
    console.log(event.target);
    console.log(event.target.id);
    console.log('this is main');
  }

  function onClickMain() {
    console.log('this is submit button');
  }

  // let inputValues = {
  //   loginInputValue: '',
  //   passwordInputValue: '',
  // };

  createMainAuth(onChangeMain, onClickMain);
  // createMainTodo();
}
