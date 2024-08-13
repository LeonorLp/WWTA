window.onload = () => {
    const video = document.getElementById("video");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const play2Btn = document.getElementById("play2Btn");

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

    // Show pause button when clicking anywhere on the video while playing
    video.addEventListener('click', () => {
        if (!video.paused && pauseBtn.classList.contains('hidden')) {
            pauseBtn.classList.remove('hidden');
        }
    });

    // Show pause button when clicking anywhere on the screen
    document.addEventListener('click', (event) => {
        // Check if the video is playing
        if (!video.paused) {
            // Only show the pause button if it's not already visible
            if (pauseBtn.classList.contains('hidden')) {
                pauseBtn.classList.remove('hidden');
            }
        }
    });

    // Hide the pause button when the mouse leaves the video area
    video.addEventListener('mouseleave', () => {
        if (!video.paused) {
            pauseBtn.classList.add('hidden');
        }
    });

    // Optionally hide the pause button when clicking outside of the video container
    document.addEventListener('click', (event) => {
        if (!video.contains(event.target) && !event.target.classList.contains('control-button')) {
            if (!video.paused) {
                pauseBtn.classList.add('hidden');
            }
        }
    });
};
