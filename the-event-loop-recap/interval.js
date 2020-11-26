/* eslint-disable no-console */

let currentCount = 3;

const timerID = setInterval(() => {
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(timerID);
  } else {
    console.log(currentCount);
    currentCount--;
  }
}, 1000);
