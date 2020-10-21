
var $elementsInForm = document.forms[0].elements;
var $form = document.querySelector('form');

function handleSubmit(event) {
  event.preventDefault();
  var formdDataObject = {};
  formdDataObject.name = $elementsInForm.name.value;
  formdDataObject.email = $elementsInForm.email.value;
  formdDataObject.message = $elementsInForm.message.value;
  console.log(formdDataObject);
  $form.reset();
}

$form.addEventListener('submit', handleSubmit);
