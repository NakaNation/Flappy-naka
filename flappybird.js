// board
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

// bird
let birdWidth = 54;
let birdHeight = 64;
let birdX = boardWidth/8;
let birdY = boardHeight/2;

// characters
let charCounter = 0;

let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight,
}

// pipe
let pipeArray = [];
let pipeWidth = 64;
let pipeHeight = 512;
let pipeX = boardWidth;
let pipeY = 0;

let topPipeImg;
let bottomPipeImg;

// physics
let velocityX = -2; // pipes moving left speed
let velocityY = 0; // bird moving up/down speed
let gravity = 0.4; // gravity

// game
let gameover = false;
let score = 0;
let allScore = [0]

// images
let faceImg = "face.png";

// gifs
// const characterImg = document.getElementById("charGif");
// let ypImage = "yp_gif.gif";
// let nakaImage = "dhiren_gif.gif";

// Function to open the modal
function openModal() {
    const modal = document.getElementById("rulesModal");
    modal.style.display = "flex"; // Display the modal
  }

  // Function to close the modal
  function closeModal() {

    const rulesModal = document.getElementById("rulesModal");
    rulesModal.style.display = "none"; // Hide the rules modal

    const nakaModal = document.getElementById("character-naka");
    nakaModal.style.display = "flex"; // Display the character modal

  }
  

  function closeCharacterModal() {
    const characterModal = document.getElementById("characterModal");
    characterModal.style.display = "none"; // Hide the character modal

    const glueSound = document.getElementById("glueSound");
    glueSound.currentTime = 0; // Rewind the sound to the beginning
    glueSound.play();

    requestAnimationFrame(update);
    setInterval(generatePipe, 1500); // generate pipe every 1.5 seconds
    document.addEventListener("keydown", moveUp); // move bird up when key is pressed
}

function openCharacterModal() {
    const changeCharacterModal = document.getElementById("changeCharacterModal");
    changeCharacterModal.style.display = "flex"; // Display the character modal

    if (charCounter === 0) {
        const characterModal = document.getElementById("change-naka");
        characterModal.style.display = "flex"; // Display the character modal
        characterImg = document.getElementById("charGif");
        characterImg.src = "naka_gif.gif";
    } else if (charCounter === 1) {
        const characterModal = document.getElementById("change-dhiren");
        characterModal.style.display = "flex"; // Display the character modal
        characterImg = document.getElementById("charGif");
        characterImg.src = "dhi_gif.gif";
    } else if (charCounter === 2) {
        const characterModal = document.getElementById("change-yp");
        characterModal.style.display = "flex"; // Display the character modal
        characterImg = document.getElementById("charGif");
        characterImg.src = "yp_gif.gif";
    } else if (charCounter === 3) {
        const characterModal = document.getElementById("change-amy");
        characterModal.style.display = "flex"; // Display the character modal
        characterImg = document.getElementById("charGif");
        characterImg.src = "amy_gif.gif";
    } else if (charCounter === 4) {
        const characterModal = document.getElementById("change-june");
        characterModal.style.display = "flex"; // Display the character modal
        characterImg = document.getElementById("charGif");
        characterImg.src = "june_gif.gif";
    }

}

// Change close characte modal
function changeCloseCharacterModal() {
    const characterModal = document.getElementById("changeCharacterModal");
    characterModal.style.display = "none"; // Hide the character modal

}

function changeShowNextCharacter() {

    const nakaModal = document.getElementById("change-naka");
    const dhiModal = document.getElementById("change-dhiren");
    const ypModal = document.getElementById("change-yp");
    const amyModal = document.getElementById("change-amy");
    const juneModal = document.getElementById("change-june");
    characterArr = [nakaModal, dhiModal, ypModal, amyModal, juneModal];

    currentCharacter = characterArr[charCounter];
    currentCharacter.style.display = "none"; // Hide the character modal

    if (charCounter === characterArr.length - 1) {
        charCounter = 0;
    } else {
        charCounter += 1;
    }

    if (charCounter === 0) {
        faceImg = "face.png";
        characterImg = document.getElementById("charGif");
        characterImg.src = "naka_gif.gif";
        birdWidth = 54;
        birdHeight = 64;
    }else if (charCounter === 1) {
        faceImg = "dhi.png";
        characterImg = document.getElementById("charGif");
        characterImg.src = "dhi_gif.gif";
        birdWidth = 54;
        birdHeight = 94;
    }
    else if (charCounter === 2) {
        faceImg = "yp.png";
        characterImg = document.getElementById("charGif");
        characterImg.src = "yp_gif.gif";
        birdWidth = 54;
        birdHeight = 64;
    }
    else if (charCounter === 3) {
        faceImg = "amy.png";
        characterImg = document.getElementById("charGif");
        characterImg.src = "amy_gif.gif";
        birdWidth = 54;
        birdHeight = 64;
    }
    else if (charCounter === 4) {
        faceImg = "june.png";
        characterImg = document.getElementById("charGif");
        characterImg.src = "june_gif.gif";
        birdWidth = 54;
        birdHeight = 64;
    }

    birdImg.src = faceImg; // Update birdImg.src based on charCounter


    currentCharacter = characterArr[charCounter];
    currentCharacter.style.display = "flex"; // Display the character modal

 }

 function showNextCharacter() {

    const nakaModal = document.getElementById("character-naka");
    const dhiModal = document.getElementById("character-dhiren");
    const ypModal = document.getElementById("character-yp");
    const amyModal = document.getElementById("character-amy");
    const juneModal = document.getElementById("character-june");
    characterArr = [nakaModal, dhiModal, ypModal, amyModal, juneModal];

    currentCharacter = characterArr[charCounter];
    currentCharacter.style.display = "none"; // Hide the character modal

    if (charCounter === characterArr.length - 1) {
        charCounter = 0;
    } else {
        charCounter += 1;
    }

    if (charCounter === 0) {
        faceImg = "face.png";
        characterImg = document.getElementById("charGif");
        characterImg.src = "naka_gif.gif";
        birdWidth = 54;
        birdHeight = 64;
    }else if (charCounter === 1) {
        faceImg = "dhi.png";
        characterImg = document.getElementById("charGif");
        characterImg.src = "dhi_gif.gif";
        birdWidth = 54;
        birdHeight = 94;
    }
    else if (charCounter === 2) {
        faceImg = "yp.png";
        characterImg = document.getElementById("charGif");
        characterImg.src = "yp_gif.gif";
        birdWidth = 54;
        birdHeight = 64;
    }
    else if (charCounter === 3) {
        faceImg = "amy.png";
        characterImg = document.getElementById("charGif");
        characterImg.src = "amy_gif.gif";
        birdWidth = 54;
        birdHeight = 64;
    }else if (charCounter === 4) {
        faceImg = "june.png";
        characterImg = document.getElementById("charGif");
        characterImg.src = "june_gif.gif";
        birdWidth = 54;
        birdHeight = 64;
    }

    birdImg.src = faceImg; // Update birdImg.src based on charCounter


    currentCharacter = characterArr[charCounter];
    currentCharacter.style.display = "flex"; // Display the character modal

 }

window.onload = function () {
    openModal();
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d"); // Use to draw on the board

    // draw bird
    // context.fillStyle = "red";
    // context.fillRect(bird.x, bird.y, bird.width, bird.height);

    // load images
    birdImg = new Image();
    birdImg.src = faceImg;
    // draw bird image
    birdImg.onload = function () { // wait until image is loaded
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    topPipeImg = new Image();
    topPipeImg.src = "toppipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "bottompipe.png";

    if (gameover) {
        context.fillStyle = "red";
        context.font = "50px sans-serif";
        context.fillText("GAME OVER", 30, board.height/2);
        context.fillStyle = "red";
        context.font = "30px sans-serif";
        context.fillText("Press Enter to restart", 40, board.height/2 + 50);
        
        // Play the jgameover sound
        const overSound = document.getElementById("overSound");
        overSound.currentTime = 0; // Rewind the sound to the beginning
        overSound.play();
    }

    // createStartButton();

    // context.fillStyle = "red";
    // context.font = "30px sans-serif";
    // context.fillText("Press S to start", 50, board.height/2 -50);

    // document.addEventListener("keydown", function (e) {
    //     if (e.code === "s") {
    //         requestAnimationFrame(update);
    //         setInterval(generatePipe, 1500); // generate pipe every 1.5 seconds
    //         document.addEventListener("keydown", moveUp); // move bird up when key is pressed
    //     }
    // })
}

// function createStartButton() {
//     // const modalContent = document.querySelector('.modal-content');
//     const startButton = document.createElement('button');
//     startButton.textContent = 'Start Game';
//     startButton.classList.add('start-btn');
//     startButton.addEventListener('click', startGame);
//     modalContent.appendChild(startButton);
//   }

//   function startGame() {
//         // Hide the button after it's clicked
//         // const startBtn = document.getElementById('start-btn');
//         // startBtn.style.display = 'none';

//         requestAnimationFrame(update);
//         setInterval(generatePipe, 1500); // generate pipe every 1.5 seconds
//         document.addEventListener("keydown", moveUp); // move bird up when key is pressed
//   }



// Update frames of the game
// Redraws the canvas over and over again
function update() {
    requestAnimationFrame(update); // call update again
    if (gameover) return; // stop the game if gameover

    birdImg = new Image();
    birdImg.src = faceImg;
    // draw bird image
    birdImg.onload = function () { // wait until image is loaded
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }

    // clear the board/previous frame
    context.clearRect(0, 0, boardWidth, boardHeight);

    // bird
    velocityY += gravity; // increase velocityY by gravity
    bird.y = Math.max(bird.y + velocityY, 0); // move bird up/down and make sure it doesn't go off the screen
    // draw bird image over and over again for each frame
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    // check if bird is off the bottom of the screen
    if (bird.y > board.height) {
        gameover = true;
    }

    // draw pipes
    for (let i = 0; i < pipeArray.length; i++) {
        let pipe = pipeArray[i];
        pipe.x += velocityX - 0.5; // move pipe to the left
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height);

        if (!pipe.passed && bird.x > pipe.x + pipe.width) { // (for !pipe.passed: check if bird has not already passed the pipe)
            score += 0.5;
            const scoreSound = document.getElementById("scoreSound");
            scoreSound.currentTime = 0; // Rewind the sound to the beginning
            scoreSound.play();
            pipe.passed = true;
        }

        if (detectCollision(bird, pipe)) {
            gameover = true;
        }
    }

    // clear pipes that are off the screen
    while (pipeArray.length > 0 && pipeArray[0].x < -pipeWidth) {
        pipeArray.shift(); // remove the first element of the array
    }

    // score
    context.fillStyle = "white";
    context.font = "45px sans-serif";
    context.fillText(score, 5, 45);

    context.fillStyle = "black";
    context.font = "28px sans-serif";
    context.fillText("High score: " + Math.max(...allScore), 176, 37);

    if (gameover) {
        context.fillStyle = "red";
        context.font = "50px sans-serif";
        context.fillText("GAME OVER", 30, board.height/2);
        context.fillStyle = "red";
        context.font = "30px sans-serif";
        context.fillText("Press Enter to restart", 40, board.height/2 + 50);
        
        // Play the jgameover sound
        const overSound = document.getElementById("overSound");
        overSound.currentTime = 0; // Rewind the sound to the beginning
        overSound.play();
    }
}

// Function to generate the pipes
function generatePipe() {

    if (gameover) return; // stop the game if gameover

    let randomPipeY = pipeY - pipeHeight/4 - Math.random() * pipeHeight/2;
    let opening = board.height / 4; // space between the pipes

    let toppipe = {
        img : topPipeImg,
        x : pipeX,
        y : randomPipeY,
        width : pipeWidth,
        height : pipeHeight,
        passed : false // check if the bird has passed the pipe
    }

    // every 1.5 seconds, add a pipe to the array
    pipeArray.push(toppipe); // add the pipe to the array

    let bottompipe = {
        img : bottomPipeImg,
        x : pipeX,
        y : randomPipeY + pipeHeight + opening,
        width : pipeWidth,
        height : pipeHeight,
        passed : false // check if the bird has passed the pipe
    }

    pipeArray.push(bottompipe); // add the pipe to the array

}

function moveUp(e) {
    if (e.code == "Space" || e.code == "ArrowUp" || e.code == "KeyX") {
        velocityY = -6; // move up

        // Play the jump sound
        const jumpSound = document.getElementById("jumpSound");
        jumpSound.currentTime = 0; // Rewind the sound to the beginning
        jumpSound.play();

        // reset the game if gameover
        // if (gameover) {
        //     gameover = false;
        //     pipeArray = [];
        //     bird.y = birdY;
        //     allScore.push(score);
        //     score = 0;
        // }
    }

    document.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            // reset the game if gameover
            if (gameover) {
                gameover = false;
                pipeArray = [];
                bird.y = birdY;
                allScore.push(score);
                score = 0;
            }
        }
    })
}

// a and b are two rectangles
// the rectangles are going to be comparing the positions of the pipes and the bird
// used to check collision between two rectangles
function detectCollision(a, b) {
    return a.x < b.x + b.width - 3.5 && // check if a is to the left of b (3.5 is the margin where the pipes can overlap)
        a.x + a.width - 3.5 > b.x && // check if a is to the right of b (3.5 is the margin)
        a.y < b.y + b.height - 3.5 && // check if a is above b (3.5 is the margin)
        a.y + a.height - 3.5 > b.y; // check if a is below b (3.5 is the margin)
}