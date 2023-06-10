class Menu {
  constructor(props) {
    this.buttonAllHandler = props.buttonAllHandler;
    this.buttonActiveHandler = props.buttonActiveHandler;
    this.buttonCompletedHandler = props.buttonCompletedHandler;
    this.clearCompletedHandler = props.clearCompletedHandler;
    this.showItemsLeft = props.showItemsLeft;
    this.tasks = props.tasks;

    this.init();
  }

  init() {
    this.menu = document.createElement('div');
    this.menu.classList.add('menu');

    this.remain = document.createElement('div');
    this.remainNumber = document.createElement('span');
    this.remainNumber.id = 'remainNumber';
    this.remainNumber.innerHTML = 0;
    this.remainText = document.createElement('span');
    this.remainText.innerHTML = ' items left';
    //buttons
    this.buttons = document.createElement('div');
    this.buttons.id = 'buttons';

    this.buttonData = [
      {
        type: 'button',
        id: 'all',
        classes: ['menu-button', 'activeButton'],
        innerHtml: 'All',
        onClick: this.buttonAllHandler,
        toListen: this.buttonClassChanger,
      },
      {
        type: 'button',
        id: 'active',
        classes: ['menu-button'],
        innerHtml: 'Active',
        onClick: this.buttonActiveHandler,
        toListen: this.buttonClassChanger,
      },
      {
        type: 'button',
        id: 'completed',
        classes: ['menu-button'],
        innerHtml: 'Completed',
        onClick: this.buttonCompletedHandler,
        toListen: this.buttonClassChanger,
      },
    ];

    //clearCompleted
    this.clearCompletedDiv = document.createElement('div');
    this.clearCompletedDiv.id = 'clearCompletedDiv';
  }
  buttonClassChanger = () => {
    this.buttonData = this.buttonData.map((data) => {
      if (event.target.id === data.id) {
        return {...data, classes: ['menu-button', 'activeButton']};
      } else {
        return {...data, classes: ['menu-button']};
      }
    });
    this.renderButtons();
  };

  renderButtons() {
    this.buttons.innerHTML = '';
    console.log(this.buttonData);

    this.buttonData.forEach((data) => {
      let button = new Button(data);
      button.render(this.buttons);
    });
  }

  renderClearCompleted() {
    this.clearCompletedDiv.innerHTML = '';
    let doneTasks = this.tasks.filter((task) => task.isDone === true);
    let clearCompletedArgs = {
      type: 'button',
      id: 'clearCompleted',
      classes: ['clearCompleted'],
      onClick: this.clearCompletedHandler,
    };
    if (doneTasks.length === 0) {
      let clearCompleted = new Button({
        innerHtml: '',
        ...clearCompletedArgs,
      });
      clearCompleted.render(this.clearCompletedDiv);
    } else {
      let clearCompleted = new Button({
        innerHtml: 'Clear completed',
        ...clearCompletedArgs,
      });
      clearCompleted.render(this.clearCompletedDiv);
    }
  }

  render(toEl) {
    this.menu.append(this.remain);
    this.remain.append(this.remainNumber);
    this.remain.append(this.remainText);

    this.menu.append(this.buttons);

    this.renderButtons();

    this.menu.append(this.clearCompletedDiv);
    this.renderClearCompleted();
    this.showItemsLeft();

    toEl.append(this.menu);
  }
}
