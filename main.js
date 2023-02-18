const game = ()=> {
let Pscore =0;
let Cscore =0;
const  startgame =()=> {
const startbtn =document.querySelector(".start_btn");
// console.log(startbtn);
const intro =document.querySelector(".intro");
// console.log(intro);
const match =document.querySelector(".match");
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

    setTimeout(() => {
        
        comparehands(this.textContent,computerChoice);
        
        //hand_img
        // console.log(this.textContent);
        playerhand.src=`img/${this.textContent}.png`;
        computerhand.src=`img/${computerChoice}.png`;
    }, 1300);

    computerhand.style.animation ="computer-animation 1.3s ease";
    playerhand.style.animation ="player-animation 1.3s ease";

});
});



};

const comparehands = (playerChoice,computerChoice)=> {
    const winner =document.querySelector(".winner");

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
                        winner.textContent = "You lose...";
                     
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
    // if(winner.textContent = "It is a tie") {
    //     winner.style.color="white"
    // }
    // if(winner.textContent = "You win!") {
    //     winner.style.color="#FFD700"
    // }    
    // if(winner.textContent = "You lose...") {
    //         winner.style.color="blue"
    // }


    

};

const updateScore= ()=> {
const playerscore =document.querySelector(".player_score p");
const computerscore =document.querySelector(".computer_score p");
playerscore.textContent=Pscore;
computerscore.textContent=Cscore;

};


startgame();
playmatch();
};






game();