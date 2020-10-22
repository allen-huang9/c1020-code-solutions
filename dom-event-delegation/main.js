
function handleClick(e) {
  console.log('e.target: ', e.target);
  console.log('e.target.tagName: ', e.target.tagName);
  if (e.target.tagName === 'BUTTON') {
    console.log('closest: ', e.target.closest('.task-list-item'));
    e.target.closest('.task-list-item').remove();
  }
}

var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', handleClick);
