((window) => {
  console.log('running app.js')

  document.addEventListener('DOMContentLoaded', function() {
    console.log('dom ready')
    main(window);
  });
})(window);

function main(window) {
  let timerInterval;
  let elapsedSeconds = 0;
  let isRunning = false;

  const startStopButton = document.getElementById('start-button');

  const timeOutput = document.getElementById('time-output');
  const multipliedOutputEl = document.getElementById('multiplied-output');
  const errorTextEl = document.getElementById('error-text');
  const factorEl = document.getElementById('factor');

  let factor = getFactor();

  factorEl.addEventListener('input', function() {
    factor = getFactor();
  });

  startStopButton.addEventListener('click', function() {
    if (isRunning) {
      // stop
      clearTimer();

      startStopButton.innerText = 'Start';

      isRunning = false;
    } else {
      clearTimer();
      clearOutputs();

      isRunning = true;

      startStopButton.innerText = 'Stop';

      // Start the timer, updating every second
      timerInterval = setInterval(updateTimer, 1000);
    }
  });

  function updateTimer() {
    elapsedSeconds++;

    timeOutput.textContent = '' + elapsedSeconds
    multipliedOutputEl.textContent = '' + (Math.round((factor * elapsedSeconds) * 10) / 10)
  }

  function clearTimer() {
    clearInterval(timerInterval);
    elapsedSeconds = 0;
  }

  function clearOutputs() {
    errorTextEl.textContent = '';
    timeOutput.textContent = '';
    multipliedOutputEl.textContent = ''
  }

  function getFactor() {
    return parseFloat(factorEl.value.trim())
  }
}
