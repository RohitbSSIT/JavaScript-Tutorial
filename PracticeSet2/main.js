/* Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is
a multiple of 5 or not. */

// let num = prompt("enter a number:");

// if(num % 5 ==0){
//       console.log(num," is multiple of 5.")
// }
// else{
//     console.log(num," is not multiple of 5.")
// }

/* Qs2. Write a code which can give grades to students according to their scores:
90-100, A
70-89, B
60-69, C
50-59, D
0-49, F */

let score = prompt("Enter your Score(0-100):");

if (score >= 90 && score<=100)
{
    console.log("A Grade")
}
else if (score >= 70 && score<= 89)
{
    console.log("B Grade.")
}
else if (score >= 60 && score<= 69)
{
    console.log("C Grade.")
}
else if (score >= 50 && score<= 59)
{
    console.log("D Grade.")
}
else if(score >= 0 && score<= 49){
    console.log("Fail.")
}
else{
    console.log("Invalid score")
}