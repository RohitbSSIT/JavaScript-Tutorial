// Access By ID
// let p=document.querySelector("#p1");
// console.dir(p);

// //Access by class
// let box=document.querySelectorAll(".box");
// console.dir(box);

// //Access by element
// let elt=document.querySelector("h1");
// console.dir(elt);

// console.log(p.tagName);

// console.log(h1.getAttribute("id")); //get the Attribute Value

// h1.setAttribute("id","head1"); //set the attribute value
// console.log(h1.getAttribute("id"))

let newBtn=document.createElement("button");
newBtn.innerText="Click me!";
console.log(newBtn);

let div=document.querySelector("div");
div.append(newBtn);

let newheading=document.createElement("h1");
newheading.innerHTML="<i>Hi, am a new!</i>";

document.querySelector("body").prepend(newheading)



