var array = [
  {
    title: 'Harry Potter',
    isbn: '65165166',
    author: 'J. K. Rowling'
  },
  {
    title: 'Lord of The Rings',
    isbn: '984916846',
    author: 'J. R. R. Tolkien'
  },
  {
    title: 'Ranger"s Apprentice',
    isbn: '9846629542',
    author: 'John Flanagan'
  }
];
console.log('typeof array: ', typeof array);
console.log('array: ', array);

var jsonString = JSON.stringify(array);
console.log('typeof jsonString: ', typeof jsonString);
console.log('jsonString: ', jsonString);

var jsonFormat = '[{"Number id": 12, "name": "Calvin"}]';
console.log('typeof jsonFormat: ', typeof jsonFormat);
console.log('jsonFormat: ', jsonFormat);

var jsonObject = JSON.parse(jsonFormat);
console.log('typeof jsonObject: ', typeof jsonObject);
console.log('jsonObject: ', jsonObject);
