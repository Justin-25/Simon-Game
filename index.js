buttonColors = [ "red", "blue", "green", "yellow" ];
gamePattern = [];
userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor( Math.random() * 4 );
    var randomChosenColors = buttonColors[randomNumber];
    gamePattern.push(randomChosenColors);

    playSound(randomChosenColors);
    $("#" + randomChosenColors).fadeTo(100, 0).fadeTo(100, 1);
    level++
    $("#level-title").text("level " +  level);
    return randomChosenColors; 
}

$(".btn").on("click", function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

function playSound(name) {
    var audio = new Audio ("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100)
}

var start = false;
var level = 0;

$(document).on("keypress", function() {
    if (!start) {
        $("#level-title").text("level " +  level);
        start = true;
        nextSequence();
    }
})