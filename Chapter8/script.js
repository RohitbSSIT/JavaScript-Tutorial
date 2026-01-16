// class car{ //create a class
//     constructor(){ //create a constructor
//         console.log("constructor is called.");
//     }

//     start(){ //create a function
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }

//     setBrand(brand){
//         this.brand=brand;
//         console.log(brand);
//     }
// }


// let fortuner= new car() // create a object of the class.
// fortuner.start(); //calling function
// fortuner.stop();
// fortuner.setBrand("fortuner");

//inheritance

class parent{

    call(){
       console.log("this is parent class.");
    }
}

class child extends parent{

    child_call(){
        console.log("this is child class.");
    }
}

let obj= new child();
obj.call();
obj.child_call();