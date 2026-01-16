// function myfunction(){
//     console.log("Apna College");
//     console.log("we are learning JS")
// };

// myfunction()

// function myfunction(msg)//parameter
// {
//     console.log(msg)
// };

// myfunction("Hellow world!"); //argument

// write a function to calculate a sum of 2 number

// function sum(x,y){
//     console.log(x+y)
// }

// sum(5,6)

// second waay

// function sum(x,y){
//     s=x+y;
//     return s;
// };

// let val=sum(5,6)
// console.log(val)

//arrow function 

// const arrow = (a,b) =>{
//     return a+b;
// }

// console.log(arrow(5,8));

// for-each function

// let arr=[1,2,3,4,5];

// arr.forEach(function printvalue(val){
//     console.log(val);
// });

//  let arr=[1,2,3,4,5];
//  arr.forEach(function square(val){
//        console.log(val*val);
//     }
// );

// map method

// let arr=[1,2,3,4,5,6,7,8,9,10];

// newArr=arr.filter((val) =>{
//     return val %2 === 0;
// })

// console.log(newArr);

// reduce method

// let arr=[1,2,3,4,5];

// let sum=arr.reduce((res,curr)=>{
//     return res+curr;
// })

// console.log(sum);

// Qs. We are given array of marks of students. Filter our of the marks of students that scored 90+.

// let marks=[87,93,64,99,86];

// let toppers=marks.filter((val)=>{
//     return val > 90;
// });

// console.log(toppers);

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n

let num=prompt("enter a number: ");

let arr=[];

for(i=1;i<=num;i++){
    arr[i-1]=i;
}

console.log(arr);

//sum

let sum=arr.reduce((pre,cur)=>{
    return pre+cur;
})

console.log(sum);

//factorial
let fact=arr.reduce((pre,cur)=>{
    return pre*cur;
})

console.log(fact);



