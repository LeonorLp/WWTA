var Video = document.getElementById("video"); 

function playpause() { 
    if (Video.paused) 
      Video.play(); 
    else 
      Video.pause(); 
  } 