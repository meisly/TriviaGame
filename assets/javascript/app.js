

var introVid = $("#game-intro-vid");

var vid = document.getElementById("game-intro-vid"); 

function playVid() { 
    vid.play(); 
} 


$("#click-play").click(function () {
    playVid();
    $("#click-play").addClass("hidden");
})