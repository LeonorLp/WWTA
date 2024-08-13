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
        // Pause button will appear when clicking anywhere on the screen
    });

    play2Btn.addEventListener('click', () => {
        video.play();
        play2Btn.classList.add('hidden'); // Hide secondary play button
        // Pause button will appear when clicking anywhere on the screen
    });

    // Pause button logic
    pauseBtn.addEventListener('click', () => {
        if (!video.paused) {
            video.pause();
            play2Btn.classList.remove('hidden'); // Show secondary play button
            pauseBtn.classList.add('hidden'); // Hide pause button
        }
    });

    // Show pause button only when clicking anywhere on the screen while video is playing
    document.addEventListener('click', (event) => {
        if (!video.paused) {
            // Ensure that clicking on the video itself does not affect the button visibility
            if (event.target !== video) {
                pauseBtn.classList.remove('hidden'); // Show pause button
            }
        }
    });

    // Hide pause button when the video is paused or when the video is played again
    video.addEventListener('play', () => {
        pauseBtn.classList.add('hidden'); // Hide pause button when video starts playing
    });

    video.addEventListener('pause', () => {
        pauseBtn.classList.add('hidden'); // Hide pause button when video is paused
    });
};
