const saveButton = document.querySelector('#save')

saveButton.addEventListener('click', () => {
  console.log(4, 'click');

  const req = new XMLHttpRequest();
  req.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  req.send();

  // fetch("https://jsonplaceholder.typicode.com/users")
})
