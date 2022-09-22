// random value generated
  var y = Math.floor(Math.random() * 10 + 1);
// counting the number of guesses
var Guess = 1;
// made for correct Guess
playername =localStorage.getItem("player_name");
  
// function for number guessed by user     
function submit(){
    var x = document.getElementById("guessField").value;
    if(x == y){
        alert("Congragulations!!! " +playername+" YOU GUESSED IT RIGHT IN "+Guess+" GUESS");
        Guess = 1

    }
    else if(x > y){
        Guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else{
        Guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER");
    }
}

function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}
