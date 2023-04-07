// Set target date
const targetDate = new Date('23 June 2023').getTime();
const startDate = new Date('23 Feb 2023').getTime();

// Update countdown every second
var countdown = setInterval(() => {
    
    // Get current date
    var now = new Date().getTime();

    // Get time difference
    var difference = targetDate - now;

    // Get progress percentage
    var progress = (now - startDate) / (targetDate - startDate) * 100;

    // Time calculations
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Display result
    document.getElementById('days').innerHTML = days < 10 ? `0${days}` : days;
    document.getElementById('hours').innerHTML = hours < 10 ? `0${hours}` : hours;
    document.getElementById('minutes').innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.getElementById('seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    
    // Display progress bar
    document.documentElement.style.setProperty('--width-max', `${progress}%`);
    document.getElementById('progress-percentage').innerHTML = `${progress.toFixed(1)}%`;

    // Countdown finished
    if (difference < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'Countdown Finished!';
    }

}, 1000);