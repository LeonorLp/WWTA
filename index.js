window.onload = () => {
    const video = document.getElementById("video");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const play2Btn = document.getElementById("play2Btn");

    // Initial setup
    playBtn.classList.remove('hidden'); // Show the play button initially
    pauseBtn.classList.add('hidden'); // Hide the pause button initially
    play2Btn.classList.add('hidden'); // Hide the secondary play button initially

    // Play button logic
    playBtn.addEventListener('click', () => {
        video.play();
        playBtn.classList.add('hidden'); // Hide primary play button
        // The pause button will be shown when clicking anywhere on the screen
        document.addEventListener('click', showPauseBtn);
    });

    play2Btn.addEventListener('click', () => {
        video.play();
        play2Btn.classList.add('hidden'); // Hide secondary play button
        // The pause button will be shown when clicking anywhere on the screen
        document.addEventListener('click', showPauseBtn);
    });

    // Pause button logic
    pauseBtn.addEventListener('click', () => {
        if (!video.paused) {
            video.pause();
            play2Btn.classList.remove('hidden'); // Show secondary play button
            pauseBtn.classList.add('hidden'); // Hide pause button
        }
    });

    // Function to show the pause button when clicking anywhere on the screen
    function showPauseBtn(event) {
        if (!video.paused) {
            pauseBtn.classList.remove('hidden'); // Show pause button
        }
    }

    // Hide the pause button when the video is paused or when playback is started again
    video.addEventListener('play', () => {
        pauseBtn.classList.add('hidden'); // Hide pause button when video starts playing
    });

    video.addEventListener('pause', () => {
        pauseBtn.classList.add('hidden'); // Hide pause button when video is paused
    });
};
