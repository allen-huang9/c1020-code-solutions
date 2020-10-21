
var $openModalButton = document.querySelector('.open-modal-button');
var $modal = document.querySelector('.not-shown');

$openModalButton.addEventListener('click', function () {
  $modal.className = 'shown';
});

var $closeModalButton = document.querySelector('.close-modal');

$closeModalButton.addEventListener('click', function () {
  $modal.className = 'not-shown';
});
