//HEADER

function createHeader() {
  let headerSection = document.createElement('div');
  headerSection.classList.add('headerSection');
  root.append(headerSection);

  let header = document.createElement('h1');
  header.textContent = 'todos';
  header.classList.add('header');
  headerSection.append(header);
}
