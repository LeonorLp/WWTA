window.onload = () => {
    const videoContainer = document.querySelector('.video-container');
    const video = document.getElementById("video");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const play2Btn = document.getElementById("play2Btn");

    // Function to adjust video container height
    function adjustVideoContainerHeight() {
        const viewportHeight = window.innerHeight;
        videoContainer.style.height = `${viewportHeight}px`;
    }

    // Initial setup
    adjustVideoContainerHeight();
    window.addEventListener('resize', adjustVideoContainerHeight);

    // Other video controls
    playBtn.addEventListener('click', () => {
        video.play();
        playBtn.classList.add('hidden');
        document.addEventListener('click', showPauseBtn);
    });

    play2Btn.addEventListener('click', () => {
        video.play();
        play2Btn.classList.add('hidden');
        document.addEventListener('click', showPauseBtn);
    });

    pauseBtn.addEventListener('click', () => {
        if (!video.paused) {
            video.pause();
            play2Btn.classList.remove('hidden');
            pauseBtn.classList.add('hidden');
        }
    });

    function showPauseBtn(event) {
        if (!video.paused) {
            pauseBtn.classList.remove('hidden');
        }
    }

    video.addEventListener('play', () => {
        pauseBtn.classList.add('hidden');
    });

    video.addEventListener('pause', () => {
        pauseBtn.classList.add('hidden');
    });
};
