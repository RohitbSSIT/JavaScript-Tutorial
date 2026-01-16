
// print 1 to 5
// for(let count=1;count<=5;count++){
//     console.log("Hellow world!")
// }
// console.log("loops has end");

// Calculate sum of 1 to 5
// let sum=0;

// for(let i=1; i<=5;i++){
//     sum = sum + i;
// }

// console.log(sum);

// while loop

// let i = 1;

// while(i<=10){
//     console.log(i);
//     i++;
// }

// Do while Loop

// let i=1
// do{
//     console.log('i=',i);
//     i++;
// } while(i<=5);

// for-of loop

// let str="javascript";

// let size=0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }

// console.log("string size= ",size) //10

//foor loop in

// let student = {
//     name:"Rahul Kumar",
//     age:20,
//     cgpa:7.5,
//     ispass:true,
// };

// for(let key in student)
// {
//     console.log("key=",key," value=",student[key]);
// }

//String

// let str="Apna college";

// console.log(str.length);

// console.log(str[1])

// Template Literals 

// let name="rahul";

// let age=25;

// console.log(`hello my name is ${name} and age is ${age}.`)

// console.log(str.toUpperCase());

// str = str.toUpperCase();

// console.log(str);

// console.log(str.toLocaleLowerCase) // covert all character in lowercase.

// console.log(str.trim()) // remove  starting and ending space.

// console.log(str.slice(2,5));

//concat

// let str1="apna";
// let str2="college";

// let res= str1+str2;
// console.log(res);

//Replace

// let s="hello";

// console.log(s.replace("h","y"));

/* Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length. 
eg: user name = “shradhakhapra” , username should be “@shradhakhapra13” */

let fullname=prompt("enter your full name without spaces.");
console.log(fullname);

let username="@"+fullname+fullname.length;
console.log(username);
