window.onload = () => {
    const video = document.getElementById("video");
    const initialPlayBtn = document.getElementById("initialPlayBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const resumePlayBtn = document.getElementById("resumePlayBtn");

    // Show initial play button
    initialPlayBtn.classList.remove('hidden');

    // Click event for initial play button
    initialPlayBtn.addEventListener('click', () => {
        video.play();
        initialPlayBtn.classList.add('hidden'); // Hide play button
        pauseBtn.classList.remove('hidden'); // Show pause button
    });

    // Click event for pause button
    pauseBtn.addEventListener('click', () => {
        video.pause();
        pauseBtn.classList.add('hidden'); // Hide pause button
        resumePlayBtn.classList.remove('hidden'); // Show resume play button
    });

    // Click event for resume play button
    resumePlayBtn.addEventListener('click', () => {
        video.play();
        resumePlayBtn.classList.add('hidden'); // Hide resume play button
        pauseBtn.classList.remove('hidden'); // Show pause button
    });

    // Show pause button when clicking on the video
    video.addEventListener('click', () => {
        if (!video.paused) {
            pauseBtn.classList.remove('hidden'); // Show pause button
        }
    });
}
