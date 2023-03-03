const game = ()=> {
let Pscore =0;
let Cscore =0;
const match =document.querySelector(".match");
const winner =document.querySelector(".winner");
const finish =document.querySelector(".finish");
const finishname =document.querySelector(".finish_name");
const  startgame =()=> {
const startbtn =document.querySelector(".start_btn");
// console.log(startbtn);
const intro =document.querySelector(".intro");
// console.log(intro);
// console.log(match);
startbtn.addEventListener("click",()=>{
        intro.classList.add("fade_out");
        match.classList.add("fade_in");
        });
};

const playmatch =()=> {
const options =document.querySelectorAll(".options button"); 
console.log(options);
const playerhand =document.querySelector(".player_hand");
const computerhand =document.querySelector(".computer_hand");
const computerOptions=["Rock", "Scissors", "Paper"];
const hands  = document.querySelectorAll(".hand img");
 

hands.forEach(hand => {
    hand.addEventListener("animationend",function() {
        this.style.animation="";

    });
});


options.forEach(option => {
option.addEventListener("click", function() {
    const computerNumber =Math.floor(Math.random() * 3);
    const computerChoice = computerOptions[computerNumber];
    // console.log(computerChoice);
        winner.style.opacity="0";
    setTimeout(() => {
        
        comparehands(this.textContent,computerChoice);
        winner.style.opacity="1";
        //hand_img
        // console.log(this.textContent);
        playerhand.src=`img/${this.textContent}.png`;
        computerhand.src=`img/${computerChoice}.png`;


    }, 1300);
    
    setTimeout(() => {
        dofinish();
     },1350);
    
    computerhand.style.animation ="computer-animation 1.3s ease";
    playerhand.style.animation ="player-animation 1.3s ease";



});
});



};

const winner =document.querySelector(".winner");
const comparehands = (playerChoice,computerChoice)=> {
    

    // console.log(winner);
 
    if(playerChoice === computerChoice) {
        
            winner.textContent = "It is a tie";
            if(winner.textContent = "It is a tie") {
                winner.style.color="white"
            }
            return;

        
    };
    //player Rock
    
        if(playerChoice === "Rock") {
         
                    if(computerChoice === "Scissors") {
                        winner.textContent = "You win!";
                        if(winner.textContent = "You win!") {
                            winner.style.color="#FFD700"
                        }
                        Pscore++;
                        updateScore();
                        // console.log(winner.textContent);
                        return;
                    }else {
                        winner.textContent = "You lose... ";
                     
                        if(winner.textContent = "You lose...") {
                            winner.style.color="blue"
                    }
                        Cscore++;
                        updateScore();
                        return;
                    }
        };
    
    
    //player Scissors
    if(playerChoice === "Scissors") {
        if(computerChoice === "Rock") {
            winner.textContent = "You lose...";
            if(winner.textContent = "You lose...") {
                winner.style.color="blue"
        }
            Cscore++;
            updateScore();
            return;
        }else {
            winner.textContent = "You win!";
            if(winner.textContent = "You win!") {
                winner.style.color="#FFD700"
            }
            Pscore++;
            updateScore();
            return;
        }
    };
    //player Paper
    if(playerChoice === "Paper") {
        if(computerChoice === "Scissors") {
            winner.textContent = "You lose...";
            if(winner.textContent = "You lose...") {
                winner.style.color="blue"
        }
            Cscore++;
            updateScore();
            return;
        }else {
            winner.textContent = "You win!";
            if(winner.textContent = "You win!") {
                winner.style.color="#FFD700"
            }
            Pscore++;
            updateScore();
            return;
        }
    };

    
    //     updateScore();
    //     console.log(Pscore);
    //     const finish =document.querySelector(".finish");
    //     const finishname =document.querySelector(".finish_name");
    // // console.log(Pscore);
    // if(Pscore === 2) {
    //     match.classList.remove("fade_in");
    //     finish.classList.add("fade_in");

    
    // }
    
    

    
};

const updateScore= ()=> {
    const computerscore =document.querySelector(".computer_score p");
    const playerscore =document.querySelector(".player_score p");
    playerscore.textContent=Pscore;
    computerscore.textContent=Cscore;

};

// const finishfive= () => {
//         updateScore();  
//         console.log(Pscore);
//         console.log(Cscore);
//         if(Pscore === 2) { 
//         match.classList.remove("fade_in");
//         finish.classList.add("fade_in");
//         finishname.textContent="あんたの勝ちだよ！";
//         }
//         if(Cscore === 2) { 
//         match.classList.remove("fade_in");
//         finish.classList.add("fade_in");
//         finishname.textContent="出直してきな！";
//         }

// };
const dofinish= () => {
    updateScore();  
    console.log(Pscore);
    console.log(Cscore);
    if(Pscore === 5) { 
        match.classList.remove("fade_in");
        setTimeout(()=> {
            finish.classList.add("fade_in");
            finishname.textContent="You win！";
        },601);
    }
    if(Cscore === 5) { 
    match.classList.remove("fade_in");
    setTimeout(()=> {
        finish.classList.add("fade_in");
        finishname.textContent="You lose...";
    },601);
    }

};



const doreload =()=> {
const finishbtn =document.querySelector(".finish_btn");
// console.log(finishbtn);
finishbtn.addEventListener("click", function() {
    window.location.reload();
});

};



startgame();
playmatch();
doreload();
};






game();
