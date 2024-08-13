window.onload = () => {
    const video = document.getElementById("video");
    const initialPlayBtn = document.getElementById("initialPlayBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const resumePlayBtn = document.getElementById("resumePlayBtn");

    // Initial Play button logic
    initialPlayBtn.addEventListener('click', () => {
        video.play();
        initialPlayBtn.classList.add('hidden'); // Hide initial play button
        pauseBtn.classList.remove('hidden'); // Show pause button
    });

    // Pause button logic
    pauseBtn.addEventListener('click', () => {
        video.pause();
        pauseBtn.classList.add('hidden'); // Hide pause button
        resumePlayBtn.classList.remove('hidden'); // Show resume play button
    });

    // Resume Play button logic
    resumePlayBtn.addEventListener('click', () => {
        video.play();
        resumePlayBtn.classList.add('hidden'); // Hide resume play button
        pauseBtn.classList.remove('hidden'); // Show pause button
    });

    // Show the pause button when clicking on the video
    video.addEventListener('click', () => {
        if (!video.paused) {
            pauseBtn.classList.remove('hidden'); // Show pause button
        }
    });

    // Hide pause button and show resume button when clicking on the video while paused
    video.addEventListener('click', () => {
        if (video.paused) {
            resumePlayBtn.classList.remove('hidden'); // Show resume play button
            pauseBtn.classList.add('hidden'); // Hide pause button
        }
    });
}
