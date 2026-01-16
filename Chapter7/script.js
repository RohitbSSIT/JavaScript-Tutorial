let btn1=document.querySelector("#btn1");

btn1.onclick= () =>{
    console.log("btn1 was clicked.");
    let a=25;
    a++;
    console.log(a); //26
}

//event object

// btn1.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);

// }

//addEventListener

btn1.addEventListener("click",(evt)=>{
    console.log("button1 was clicked.");
    console.log(evt);
})

btn1.addEventListener("click",()=>{
    console.log("button1 was clicked - handler2");
    console.log(evt);
})  

const handler3=btn1.addEventListener("click",()=>{
    console.log("button1 was clicked - handler3");
    console.log(evt);
})  

btn1.addEventListener("click",()=>{
    console.log("button1 was clicked - handler4");
    console.log(evt);
})  

//removeEventListener

btn1.addEventListener("click",handler3);