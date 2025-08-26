buttonColors = [ "red", "blue", "green", "yellow" ];
gamePattern = [ ];
userClickedPattern =  [ ];

function nextSequence() {

    var randomNumber = Math.floor( Math.random() * 4 );

    var randomChosenColors = buttonColors[randomNumber];

    gamePattern.push(randomChosenColors);

    return randomChosenColors; 

}

var latestColor = nextSequence();

$("#" + latestColor).on("click", function() {

    $(this).addClass("pressed").fadeOut(100).fadeIn(100);
    var audio =  new Audio ("sounds/" + latestColor + ".mp3");
    audio.play()

    var userChosenColor = $("#" + latestColor);

    userClickedPattern.push(userChosenColor);

})

$(document).keypress(function(event) {
    $(documentq(event.key));
});


// $("#" + latestColor).fadeOut(100).fadeIn(100);
// var audio =  new Audio ("sounds/" + latestColor + ".mp3");
//     audio.play()
