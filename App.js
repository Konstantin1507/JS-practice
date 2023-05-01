//ROOT

const root = document.getElementById('root');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

createHeader();
createMain();
createFooter();
