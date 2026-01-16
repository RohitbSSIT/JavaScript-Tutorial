let marks= [98,56,45,85,76];
console.log(marks);
console.log(marks.length);
console.log(typeof(marks));

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);

marks[2]=66;
console.log(marks[2]);

// for loop
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
}

//for of
for(let mark of marks){
    console.log(mark);
}

//city

let cities=["pune","mumbai","hyderabad","delhi","nagpur"];

for (let city of cities){
    console.log(city.toUpperCase())
}
