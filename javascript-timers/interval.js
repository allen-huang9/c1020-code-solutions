
var $h1 = document.querySelector('h1');
var counter = parseInt($h1.textContent);

function countDown() {
  counter--;
  if (counter !== 0) {
    $h1.textContent = counter;
  } else {
    $h1.textContent = '~Earth Beeeeloooow Us~';
    clearInterval(intervalID);
  }
}

var intervalID = setInterval(countDown, 1000);
