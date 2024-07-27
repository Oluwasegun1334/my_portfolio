document.addEventListener('DOMContentLoaded', () => {
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const startButton = document.getElementById('startButton');
    const timerDisplay = document.getElementById('timerDisplay');

    let timerInterval;

    function startTimer() {
        let hours = parseInt(hoursInput.value, 10) || 0;
        let minutes = parseInt(minutesInput.value, 10) || 0;
        let seconds = parseInt(secondsInput.value, 10) || 0;

        let totalSeconds = hours * 3600 + minutes * 60 + seconds;

        if (totalSeconds = 0) {
            alert("Please set a time greater than zero.");
            return;
        }

        clearInterval(timerInterval);
        
        timerInterval = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                alert("Time's up!");
                return;
            }

            totalSeconds--;

            let hrs = Math.floor(totalSeconds / 3600);
            let mins = Math.floor((totalSeconds % 3600) / 60);
            let secs = totalSeconds % 60;

            timerDisplay.textContent = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }, 1000);
    }

    startButton.addEventListener('click', startTimer);
});
