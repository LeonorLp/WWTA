window.onload = () => { // Ensure script runs after the page is fully loaded
    const video = document.getElementById("video");
    const playPauseBtn = document.getElementById("playPauseBtn");

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

    // Attach event listeners
    playPauseBtn.addEventListener('click', playPause);

    video.addEventListener('mousemove', showButton);

    let hideTimeout;
    video.addEventListener('mousemove', () => {
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(hideButton, 2000); // 2 seconds delay
    });

    video.addEventListener('pause', showButton);
}
