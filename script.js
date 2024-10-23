let timerText = document.getElementById('time');
let inputArea = document.getElementById('input-area');
let startButton = document.getElementById('start-button');
let result = document.getElementById('result');
let textToType = document.getElementById('text-to-type').innerText;

let timeLeft = 60;
let interval;
let isTestStarted = false;

startButton.addEventListener('click', () => {
    if (!isTestStarted) {
        isTestStarted = true;
        inputArea.disabled = false;
        inputArea.focus();
        startTimer();
    }
});

inputArea.addEventListener('input', () => {
    if (isTestStarted && timeLeft > 0) {
        let typedText = inputArea.value;
        if (typedText === textToType) {
            clearInterval(interval);
            endTest(true);
        }
    }
});

function startTimer() {
    inputArea.value = '';
    timeLeft = 60;
    result.innerText = '';
    interval = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft === 0) {
            clearInterval(interval);
            endTest(false);
        }
    }, 1000);
}

function endTest(success) {
    inputArea.disabled = true;
    isTestStarted = false;
    let wordsTyped = inputArea.value.split(' ').length;
    if (success) {
        result.innerText = `Great job! Your typing speed is ${wordsTyped} words per minute.`;
    } else {
        result.innerText = `Time's up! You typed ${wordsTyped} words per minute.`;
    }
}

