const video = document.getElementById("video");
const playPauseBtn = document.getElementById("ppidbtn");

function playPause() { 
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = "Pause";
        hideButton();
    } else {
        video.pause();
        playPauseBtn.textContent = "Play";
        showButton();
    }
}

function hideButton() {
    playPauseBtn.classList.add('hidden');
}

function showButton() {
    playPauseBtn.classList.remove('hidden');
}

// Show the button when the mouse moves over the video
video.addEventListener('mousemove', showButton);

// Hide the button after a few seconds of no mouse movement
let hideTimeout;
video.addEventListener('mousemove', () => {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(hideButton, 3000); // 3 seconds delay
});

// Play/pause video on button click
playPauseBtn.addEventListener('click', playPause);

// Show the button when the video is paused
video.addEventListener('pause', showButton);