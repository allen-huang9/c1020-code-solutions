
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(jsonArray => console.log(jsonArray));
