buttonColors = [ "red", "blue", "green", "yellow" ];
gamePattern = [];
userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor( Math.random() * 4 );
    var randomChosenColors = buttonColors[randomNumber];
    gamePattern.push(randomChosenColors);

    return randomChosenColors; 
}

$(nextSequence).on("keypress", function () {
    
})

var latestColor = nextSequence();

$("#" + latestColor).fadeTo(100, 0).fadeTo(100, 1);
    var audio = new Audio ("./sounds/" + latestColor + ".mp3");
    audio.play();

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

