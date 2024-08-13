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
            pauseBtn.classList.add('playState');
            pauseBtn.style.width = "80px";
            pauseBtn.style.height = "80px";
        } else {
            video.play();
            pauseBtn.classList.add('hidden'); // Hide the button again when the video plays
            pauseBtn.classList.remove('playState');
        }
    });

    // Modify the pause button appearance when it changes to play state
    pauseBtn.addEventListener('transitionend', () => {
        if (pauseBtn.classList.contains('playState')) {
            pauseBtn.classList.remove('playState');
            pauseBtn.style.backgroundColor = "darkred";
            pauseBtn.style.width = "80px";
            pauseBtn.style.height = "80px";
        }
    });
}
