var currentState = document.querySelector('.circle');
var lightState = currentState.className.split(' ');

function lightSwitch(event) {
  if (lightState[1] === 'on') {
    lightState[1] = 'off';
  } else {
    lightState[1] = 'on';
  }
  currentState.className = lightState[0] + ' ' + lightState[1];
  document.querySelector('body').className = lightState[1];
}

currentState.addEventListener('click', lightSwitch);