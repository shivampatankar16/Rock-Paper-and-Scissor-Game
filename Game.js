let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const getCompChoice = ()=>{
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};


const drawGame = ()=>{
    msg.innerText= "Game was draw.Play again!";
     msg.style.backgroundColor = "#081b31";
};

const ShowWinner = (userWin, userChoice, Compchoice)=>{
    if(userWin){
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText=`You win!.Your ${userChoice} beat ${Compchoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorePara.innerText = compscore;
         msg.innerText= `You lose.${Compchoice} beat Your ${userChoice}`;
          msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("User choice = ", userChoice);
    // Generate comp choice
    const Compchoice = getCompChoice();
    console.log("Comp choice =",Compchoice);

    if(userChoice === Compchoice){
        //Draw
    drawGame();
    }else{
    let userWin = true;
    if(userChoice === "Rock"){
        //Scissor,Paper
        userWin = Compchoice === "Paper" ? false:true;
    }else if(userChoice === "Paper"){
        // rock ,scissor
        userWin = Compchoice === "Scissor" ? false:true;
    }else{
        // rock, paper
        userWin = Compchoice === "Rock" ? false:true;
    }
    ShowWinner(userWin , userChoice, Compchoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
});
    });
