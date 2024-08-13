window.onload = () => {
    const video = document.getElementById("video");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");

    // Play button logic
    playBtn.addEventListener('click', () => {
        video.play();
        playBtn.classList.add('hidden');  // Hide play button
        pauseBtn.classList.remove('hidden');  // Show pause button
    });

    // Pause button logic
    pauseBtn.addEventListener('click', () => {
        video.pause();
        pauseBtn.classList.add('hidden');  // Hide pause button
        playBtn.classList.remove('hidden');  // Show play button
    });

    // Video play event
    video.addEventListener('play', () => {
        pauseBtn.classList.remove('hidden');
    });

    // Video pause event
    video.addEventListener('pause', () => {
        pauseBtn.classList.add('hidden');
        playBtn.classList.remove('hidden');
    });

    // Show pause button when clicking on video during playback
    video.addEventListener('click', () => {
        if (!video.paused) {
            pauseBtn.classList.remove('hidden');
        }
    });
}
