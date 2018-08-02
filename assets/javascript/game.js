

 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

 var wins = 0;
 var losses = 0;
 var guessesLeft = 10;
 var guessesMade = [];
 var computerGuess;

 function display() {
     var html =
         "<p>Wins: " + wins + "</p>" +
         "<p>Losses: " + losses + "</p>" +
         "<p>Guesses left: " + guessesLeft + "</p>" +
         "<p>Guesses made: " + guessesMade + "</p>";

     document.querySelector("#game").innerHTML = html;

 }



 function reset() {

     guessesLeft = 10;
     computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
     display()

 }




 reset()


 document.onkeyup = function (event) {

     var userGuess = event.key.toLowerCase();
     console.log(userGuess)


     if (guessesLeft > 0) {

         if (userGuess === computerGuess) {
             wins++;
             alert("You won the game!")
             reset()
         }
         else {
             guessesLeft--;
             console.log('wrong')
             guessesMade.push(userGuess)
             
         }


     } else {
         losses++;
         alert("You LOSE!")
         reset()

     }
     display()
     console.log(guessesLeft)
 }
