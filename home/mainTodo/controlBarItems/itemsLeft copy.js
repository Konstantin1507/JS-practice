function createItemsLeft() {
  const remain = document.createElement('div');
  controlBar.append(remain);
  const remainNumber = document.createElement('span');
  remainNumber.id = 'remainNumber';
  remainNumber.innerHTML = 0;
  remain.append(remainNumber);
  const remainText = document.createElement('span');
  remainText.innerHTML = ' items left';
  remain.append(remainText);
}
