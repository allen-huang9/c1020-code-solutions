
function handleFocus(event) {
  console.log('Focus event fired');
  console.log('event.target.name: ', event.target.name);
}

function handleBlur(event) {
  console.log('Blur event fired');
  console.log('event.target.name: ', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name: ', event.target.name);
  console.log('event.target.value: ', event.target.value);
}

var $allInput = document.querySelectorAll('input');
var $textArea = document.querySelector('textarea');

for (var i = 0; i < $allInput.length; i++) {
  $allInput[i].addEventListener('focus', handleFocus);
  $allInput[i].addEventListener('blur', handleBlur);
  $allInput[i].addEventListener('input', handleInput);
}

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
