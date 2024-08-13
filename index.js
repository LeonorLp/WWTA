window.onload = () => {
    const video = document.getElementById("video");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const play2Btn = document.getElementById("play2Btn");

    let hidePauseBtnTimeout;

    // Initial setup
    playBtn.classList.remove('hidden'); // Show the play button initially
    pauseBtn.classList.add('hidden'); // Hide the pause button initially
    play2Btn.classList.add('hidden'); // Hide the play button initially

    // Play button logic
    playBtn.addEventListener('click', () => {
        video.play();
        playBtn.classList.add('hidden');  // Hide play button
        pauseBtn.classList.remove('hidden'); // Show pause button
    });

    // Play2 button logic
    play2Btn.addEventListener('click', () => {
        video.play();
        play2Btn.classList.add('hidden');  // Hide play button
        pauseBtn.classList.remove('hidden'); // Show pause button
    });

    // Pause button logic
    pauseBtn.addEventListener('click', () => {
        if (!video.paused) {
            video.pause();
            play2Btn.classList.remove('hidden'); // Show play button
            pauseBtn.classList.add('hidden'); // Hide pause button
        }
    });

    // Show pause button and start timer to hide it after 3 seconds
    function showPauseButton() {
        if (!video.paused) {
            pauseBtn.classList.remove('hidden');
            // Clear any previous timeout
            clearTimeout(hidePauseBtnTimeout);
            // Set timeout to hide pause button after 3 seconds
            hidePauseBtnTimeout = setTimeout(() => {
                if (!video.paused) {
                    pauseBtn.classList.add('hidden');
                }
            }, 3000); // 3000 milliseconds = 3 seconds
        }
    }

    // Show pause button on click anywhere on the screen
    document.addEventListener('click', (event) => {
        if (!video.paused) {
            showPauseButton();
        }
    });

    // Show pause button when clicking on the video
    video.addEventListener('click', showPauseButton);
}
