
var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (e) {
  var isTab = e.target.matches('.tab');
  var $currentDataView = e.target.getAttribute('data-view');

  if (isTab) {
    for (var i = 0; i < $tabList.length; i++) {
      if (e.target !== $tabList[i]) {
        $tabList[i].className = 'tab';
      } else {
        e.target.className = 'tab active';
      }
    }
  }

  for (var j = 0; j < $viewList.length; j++) {
    if ($currentDataView !== $viewList[j].getAttribute('data-view')) {
      $viewList[j].className = 'view hidden';
    } else {
      $viewList[j].className = 'view';
    }
  }
});
