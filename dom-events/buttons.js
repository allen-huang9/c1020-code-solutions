
function handleClick(event) {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

var $classClickButton = document.querySelector('.click-button');
$classClickButton.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

var $classButtonHover = document.querySelector('.hover-button');
$classButtonHover.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event: ', event);
  console.log('event.target: ', event.target);
}

var $classDoubleClick = document.querySelector('.double-click-button');
$classDoubleClick.addEventListener('dblclick', handleDoubleClick, false);
