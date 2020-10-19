
console.log('Hello, World');

var tagH1 = document.querySelector('h1');
console.log('h1: ', tagH1);
console.dir(tagH1);

var tagWithId = document.querySelector('#explanation');
console.log('ID explanation: ', tagWithId);
console.dir(tagWithId);

var tagWithClassHint = document.querySelector('.hint');
console.log('class hint: ', tagWithClassHint);
console.dir(tagWithClassHint);

var pList = document.querySelectorAll('p');
console.log('all p: ', pList);

var tagWithExampleLink = document.querySelectorAll('.example-link');
console.log('class example-link: ', tagWithExampleLink);
