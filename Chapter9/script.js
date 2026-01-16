// Synchronous 

// console.log("one");
// console.log("two");

// setTimeout(() =>{
//     console.log("hello");
// },4000); //timeout

// console.log("three");
// console.log("four");

//CallBack

// function sum(a,b){
//    console.log(a+b);
// }

// function calculater(a,b,sumCallback){
//     sumCallback(a+b);
// }

// calculater(1,2,sum);


// function getData(dataId){
//     //2
//     setTimeout(() =>{
//         console.log("Data",dataId);
//     },2000);
// }

// getData(1);

//callback hell

// function getData(dataId,getNextData){
//     setTimeout(() =>{
//     console.log("data",dataId);
//      if(getNextData){
//         getNextData();
//      }
//    },2000);
// }

// getData(1,() => {
//     getData(2,() => {
//      getData(3,() => {
//       getData(4)
//     });
//   });
// });

//Promises

// const getPromise= () =>{
//     return new Promise((resolve,reject) => {
//         console.log("i am a promise.");
//         resolve("success");
//     });
// };

// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fullfilled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// });

//promise Chain

// function asyncFunc1(){
//     return new promise ((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
// }

// function asyncFunc2(){
//     return new promise ((resolve,reject) =>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("fetching data1.....");
// asyncFunc1().then((res)=>{
//     console.log(res);
//     console.log("fetching data2.....");
//     asyncFunc2().then((res) =>{
//         console.log(res);
//     });
// });

//Async-await
function gatAllData(dataID) {
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data",dataId);
        },2000);
    })
}

async function getAllData() {
    console.log("getting data1......");
    await getAllData(1);
    console.log("getting data2......");
    await getAllData(2);
    console.log("getting data3......");
    await getAllData(3);
}