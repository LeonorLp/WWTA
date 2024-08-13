window.onload = () => { // Ensure script runs after the page is fully loaded
    const video = document.getElementById("video");
    const playPauseBtn = document.getElementById("playPauseBtn");

    function playPause() { 
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = "Pause";
            playPauseBtn.classList.add('paused'); // Add class for paused state
            hideButton();
        } else {
            video.pause();
            playPauseBtn.textContent = "Play";
            playPauseBtn.classList.remove('paused'); // Remove class for playing state
            showButton();
        }
        console.log("Video state changed. Is paused:", video.paused); // Debugging
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
        hideTimeout = setTimeout(hideButton, 3000); // 3 seconds delay
    });

    video.addEventListener('pause', () => {
        showButton();
        playPauseBtn.classList.add('paused'); // Ensure class is added when paused
        console.log("Video paused. Button color should be red."); // Debugging
    });

    video.addEventListener('play', () => {
        playPauseBtn.classList.remove('paused'); // Ensure class is removed when playing
        console.log("Video playing. Button color should be default."); // Debugging
    });
}
