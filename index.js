window.onload = () => {
    const video = document.getElementById("video");
    const playPauseBtn = document.getElementById("playPauseBtn");

    function playPause() { 
        if (video.paused) {
            video.play();
            playPauseBtn.classList.add('paused');
            hideButton();
        } else {
            video.pause();
            playPauseBtn.classList.remove('paused');
            showButton();
        }
    }

    function hideButton() {
        playPauseBtn.classList.add('hidden');
    }

    function showButton() {
        playPauseBtn.classList.remove('hidden');
    }

    // Event listeners
    playPauseBtn.addEventListener('click', playPause);

    video.addEventListener('mousemove', showButton);

    let hideTimeout;
    video.addEventListener('mousemove', () => {
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(hideButton, 3000); // 3 seconds delay
    });

    video.addEventListener('pause', () => {
        showButton();
        playPauseBtn.classList.add('paused');
    });

    video.addEventListener('play', () => {
        playPauseBtn.classList.remove('paused');
    });
}
