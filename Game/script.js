let userScore=0;
let compScore=0;

const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice=() =>{
    const options=['rock','paper','scissors'];
    const randIndx=Math.floor(Math.random()*3);
    return options[randIndx];
};

const drawGame= () =>{
    console.log("game Was draw.");
    msg.innerText='Game was Draw.Play again.'
    msg.style.backgroundColor = "#081b31";
};

const shwoWinner = (userWin,userChoice,CompChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msg.innerText=`You win! Your ${userChoice} beats ${CompChoice}.`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("you lose.");
        msg.innerText=`You lost.${CompChoice} beats Your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
} 

const playGame= (userChoice) =>{
    console.log("user choice=",userChoice);
    //Generate Computer Choice -  modular
    const CompChoice=genComChoice();
    console.log("camp choice= ",CompChoice)

    if(userChoice === CompChoice){
        //Draw Game
        drawGame();
    }else{
        let userWin =true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin= CompChoice == "paper"? false : true;
        }else if (userChoice == "paper"){
            //rock,scissors
            userWin= CompChoice == "scissors"? false : true;
        }else{
            //rock,Paper
            userWin= CompChoice == "rock"? false : true;
        }
        shwoWinner(userWin,userChoice,CompChoice);
    }
};

choice.forEach((choice)=>{
    const userChoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});