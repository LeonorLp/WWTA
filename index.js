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
        if (!video.paused) {
            pauseBtn.classList.remove('hidden');
        }
    });

    // Pause button logic
    pauseBtn.addEventListener('click', () => {
        if (!video.paused) {
            video.pause();
            pauseBtn.style.backgroundColor = "darkred";
            pauseBtn.innerHTML = "\u25B6"; // Play icon
        } else {
            video.play();
            pauseBtn.classList.add('hidden'); // Hide the button again when the video plays
            pauseBtn.innerHTML = "\u23F8"; // Pause icon
        }
    });
}
