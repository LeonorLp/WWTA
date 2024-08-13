var video = document.getElementById("video"); 

function playpause() { 
    if (video.paused) 
      video.play(); 
    else 
      video.pause(); 
  } 