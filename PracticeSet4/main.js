/* Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class.*/

// let marks=[85, 97, 44, 37, 76, 60];
// let total=0;

// for(let mark of marks){
//       total= total+mark;
// }

// let avg=0;

// avg=total/marks.length;
// console.log(`Average mark of student is:${avg}`)

/* Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer.*/

// let prices=[250, 645, 300, 900, 50]


// let i=0
// for(let value of prices){
//     offer=value/10;
//     prices[i]=prices[i]-offer;
//     i++
// }

// console.log(prices)

// let num=[1,2,3,4,5];

// // num.push(6)

// // console.log(push)

// num.pop()

// Qs. Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”

let companies=['Bloomberg','Microsoft','Uber','Google',"IBM","Netflix"];

console.log(companies);

// a. Remove the first company from the array

console.log(companies.shift());

// b. Remove Uber & Add Ola in its place

companies.splice(3,"uber","Ola");
console.log(companies);

// c. Add Amazon at the end

companies.push("Amazon")
console.log(companies);

