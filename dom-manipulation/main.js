
var numberOfClicks = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCounter = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  $clickCounter.textContent = 'Clicks: ' + ++numberOfClicks;

  if (numberOfClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numberOfClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numberOfClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numberOfClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numberOfClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
});
