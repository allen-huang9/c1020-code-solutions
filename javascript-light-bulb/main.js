var currentState = document.querySelector('.circle');
var lightState = currentState.className.split(' ');
var isLightOn = false;

if (lightState[1] === 'on') {
  isLightOn = true;
}

function lightSwitch(event) {
  if (isLightOn) {
    lightState[1] = 'off';
    isLightOn = false;
  } else {
    lightState[1] = 'on';
    isLightOn = true;
  }
  currentState.className = lightState[0] + ' ' + lightState[1];
  document.querySelector('body').className = lightState[1];
}

currentState.addEventListener('click', lightSwitch);
