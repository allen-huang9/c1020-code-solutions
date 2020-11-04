
var $arrowLeft = document.querySelector('.fa-chevron-left');
var $arrowRight = document.querySelector('.fa-chevron-right');
var $pokemonImage = document.querySelector('img');
var $circleIndex = document.querySelectorAll('.fa-circle');

var index = 0;
var imageArray = ['001.png', '004.png', '007.png', '025.png', '039.png'];
$pokemonImage.setAttribute('src', 'images/' + imageArray[index]);
$circleIndex[index].className = 'fas fa-circle mod-font-size';

function moveRight() {
  index++;

  if (index > 4) {
    $circleIndex[4].className = 'far fa-circle mod-font-size';
    index = 0;
  } else {
    $circleIndex[index - 1].className = 'far fa-circle mod-font-size';
  }

  $pokemonImage.setAttribute('src', 'images/' + imageArray[index]);
  $circleIndex[index].className = 'fas fa-circle mod-font-size';
  clearInterval(timer);
  timer = setInterval(moveRight, 3000);
}

$arrowRight.addEventListener('click', moveRight);

$arrowLeft.addEventListener('click', function (e) {
  index--;

  if (index < 0) {
    $circleIndex[0].className = 'far fa-circle mod-font-size';
    index = 4;
  } else {
    $circleIndex[index + 1].className = 'far fa-circle mod-font-size';
  }

  $pokemonImage.setAttribute('src', 'images/' + imageArray[index]);
  $circleIndex[index].className = 'fas fa-circle mod-font-size';
  clearInterval(timer);
  timer = setInterval(moveRight, 3000);
});

var circleID = 0;
for (var i = 0; i < $circleIndex.length; i++) {

  $circleIndex[i].setAttribute('id', circleID++);
  $circleIndex[i].addEventListener('click', function (e) {

    $circleIndex[index].className = 'far fa-circle mod-font-size';
    e.target.className = 'fas fa-circle mod-font-size';

    index = parseInt(e.target.getAttribute('id'));
    $pokemonImage.setAttribute('src', 'images/' + imageArray[index]);
    clearInterval(timer);
    timer = setInterval(moveRight, 3000);
  });
}

var timer = setInterval(moveRight, 3000);
