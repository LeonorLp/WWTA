window.onload = () => {
    const video = document.getElementById("video");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");

    // Play button logic
    playBtn.addEventListener('click', () => {
        video.play();
        playBtn.classList.add('hidden');  // Hide play button
    });

    // Show pause button when clicking anywhere on the video while playing
    video.addEventListener('click', () => {
        if (!video.paused && pauseBtn.classList.contains('hidden')) {
            pauseBtn.classList.remove('hidden');
        }
    });

    // Pause button logic
    pauseBtn.addEventListener('click', () => {
        if (!video.paused) {
            video.pause();
            pauseBtn.textContent = "Play";
            pauseBtn.style.backgroundColor = "darkred";
            pauseBtn.style.width = "80px";
            pauseBtn.style.height = "80px";
            pauseBtn.style.border = "none";
        } else {
            video.play();
            pauseBtn.classList.add('hidden'); // Hide the button again when the video plays
            pauseBtn.textContent = "Pause"; // Revert the button text to Pause
            pauseBtn.style.backgroundColor = "darkred";
            pauseBtn.style.width = "60px";
            pauseBtn.style.height = "60px";
        }
    });
}
