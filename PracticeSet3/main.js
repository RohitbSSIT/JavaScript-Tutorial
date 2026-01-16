// Qs1. Print all even numbers from 0 to 100.

// for(let i=1 ; i<=100;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// Qs2. 
// Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.

let gamenum=25;

let usernum=prompt("Guess the game number: ");

while(gamenum != usernum){
    usernum=prompt("You entered wrong number.Guess Again: ");
}

console.log("congratulation ,you entered the right number.")