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
        pauseBtn.classList.remove('hidden'); // Show pause button
    });

    play2Btn.addEventListener('click', () => {
        video.play();
        play2Btn.classList.add('hidden'); // Hide secondary play button
        pauseBtn.classList.remove('hidden'); // Show pause button
    });

    // Pause button logic
    pauseBtn.addEventListener('click', () => {
        if (!video.paused) {
            video.pause();
            play2Btn.classList.remove('hidden'); // Show secondary play button
            pauseBtn.classList.add('hidden'); // Hide pause button
        }
    });
};
