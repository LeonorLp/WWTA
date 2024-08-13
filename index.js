var Video = document.getElementById("video"); 

function playPause() { 
    if (Video.paused) 
      Video.play(); 
    else 
      Video.pause(); 
  } 