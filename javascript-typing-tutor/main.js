/* eslint no-console: 0 */
var $sentence = document.querySelectorAll('span');
var index = 0;

document.addEventListener('keydown', function (e) {
  if ($sentence[index].textContent !== e.key) {
    $sentence[index].className += ' incorrect';
  } else {
    $sentence[index].className = 'correct';

    if (index !== $sentence.length) {
      $sentence[++index].className = 'current-letter';
    }
  }
});
