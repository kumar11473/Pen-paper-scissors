// const game =()=>{
//     let pScore=0;
//     let cScore=0;

//     const startGame = ()=>{
//         const playBtn = document.querySelector(".intro button");
//         const match = document.querySelector(".match");
//         const introScreen = document.querySelector(".intro");

//         playBtn.addEventListener("click",()=>{
//             introScreen.classList.add("fadeOut");
//             match.classList.add("fadeIn");
//         });
//     };

//     // play match
//     const playMatch=()=>{
//         const options=document.querySelector(".options button");
//         const playerHand = document.querySelector(".player-hand");
//         const computerHand = document.querySelector(".computer-hand");

//         const hands = document.querySelector(".hands img")

//         const computerOptions =["rock", "paper", "scissors"]; // array of options for computer

//         options.forEach((option) => {     // instead of option u can index or element as it is a variable
//             option.addEventListener("click", function(){
//               //  console.log(this);
//                 const computerNumber = Math.floor(Math.random() * 3);
//                 const computerChoice = computerOptions[computerNumber];

//                 //here is where we call campare hands
//                 compareHands(this.textContent,computerChoice);

//                 //update images
//                 playerHand.scr = `./assets/${this.textContent}.png`;
//                 computerHand.scr =`./assets/${this.computerChoice}.png`;

//                 playerHand.style.animation="shakePlayer 2s ease";
//                 computerHand.style.animation="shakeComputer 2s ease"; 

//             });

//         });

//     };

//     const updateScore =()=>{
//         const playerScore= document.querySelector(".player-score p");
//         const computerScore= document.querySelector(".computer-score p");

//         playerScore.textContent=pScore;
//         computerScore.textContent=cScore;
//     };

//       // comparing player's choice with computer's choice
//     const compareHands =(playerChoice, computerChoice)=>{
//         const winner=document.querySelector(".winner");
//         // checking for tie
//         if(playerChoice === computerChoice)
//         {
//             winner.textContent='It is a tie';
//             return;
//         }
//         // for rock
//         if(playerChoice === 'rock')
//         {
//             if(computerChoice === 'scissors')
//             {
//                 winner.textContent = 'Player wins';
//                 pScore++;
//                 updateScore();
//                 return;
//             }
//             else{
//                 winner.textContent = 'Computer wins';
//                 cScore++;
//                 updateScore();
//                 return;
//             }
//         }
//         // for paper
//         if(playerChoice === 'paper')
//         {
//             if(computerChoice === 'scissors')
//             {
//                 winner.textContent = 'Computer wins';
//                 cScore++;
//                 updateScore();
//                 return;
//             }
//             else{
//                 winner.textContent = 'Player wins';
//                 pScore++;
//                 updateScore();
//                 return;
//             }
//         }
//         // for scissors
//         if(playerChoice === 'scissors')
//         {
//             if(computerChoice === 'rock')
//             {
//                 winner.textContent = 'Computer wins';
//                 pScore++;
//                 updateScore();
//                 return;
//             }
//             else{
//                 winner.textContent = 'Player wins';
//                 pScore++;
//                 updateScore();
//                 return;
//             }
//         }


//     }; 



//     // it is call of all inner functions
//     startGame();
//     playMatch();
//     //compareHand(this.textContent,computerChoice);

// };

// // start the game function
// game();

//----------------------------------------- 
const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {  // didn't understand yet?????????
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        //Computer Options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                //Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {  // for first shake hands for 2sec and then change the hands to rock , paper or scissors
                    //Here is where we call compare hands
                    compareHands(this.textContent, computerChoice);
                    //Update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);



                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }
        //Check for Rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for Paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
        //Check for Scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
    };

    //Is call all the inner function
    startGame();
    playMatch();
};

//start the game function
game();