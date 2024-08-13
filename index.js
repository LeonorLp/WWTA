window.onload = () => {
    const video = document.getElementById("video");
    const playPauseBtn = document.getElementById("playPauseBtn");

    function playPause() { 
        if (video.paused) {
            video.play();
            playPauseBtn.classList.add('hidden');
            createPauseButton(); // Create pause button when video starts playing
        }
    }

    function createPauseButton() {
        const pauseBtn = document.createElement('button');
        pauseBtn.classList.add('paused');
        pauseBtn.id = 'pauseBtn';
        document.querySelector('.video-container').appendChild(pauseBtn);

        pauseBtn.addEventListener('click', () => {
            video.pause();
            pauseBtn.remove(); // Remove the pause button when paused
            playPauseBtn.classList.remove('hidden');
        });
    }

    // Initial play button click event
    playPauseBtn.addEventListener('click', playPause);

    // Show pause button on click anywhere on the video
    video.addEventListener('click', () => {
        if (!video.paused) {
            const pauseBtn = document.getElementById('pauseBtn');
            if (!pauseBtn) createPauseButton();
        }
    });

    // Remove pause button when the video is paused
    video.addEventListener('pause', () => {
        const pauseBtn = document.getElementById('pauseBtn');
        if (pauseBtn) pauseBtn.remove();
        playPauseBtn.classList.remove('hidden');
    });

    // Remove pause button when the video is played
    video.addEventListener('play', () => {
        const pauseBtn = document.getElementById('pauseBtn');
        if (pauseBtn) pauseBtn.remove();
    });
}
