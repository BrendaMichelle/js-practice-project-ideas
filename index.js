//headers/other text
const header = document.createElement("h1");
header.setAttribute("id", "header");
header.innerText = "Draw a S N E K";
document.body.appendChild(header);
const instructions = document.createElement("h3");
instructions.setAttribute("id", "instructions");
instructions.innerText = "Press space inside the box to leave a square, hold space and move slowly to draw lines, click anywhere to restart."
document.body.appendChild(instructions); 

//game space
const board = document.createElement("div");
board.setAttribute("id", "board");
board.style.backgroundColor = "black";
board.style.height = "600px";
board.style.width = "1000px";
board.style.position = "relative";
document.body.appendChild(board);

//snake head
const snakeHead = document.createElement("div");
snakeHead.setAttribute("id", "snakeHead");
snakeHead.style.backgroundColor = "greenyellow";
snakeHead.style.height = "30px";
snakeHead.style.width = "30px";
snakeHead.style.position = "absolute";
board.appendChild(snakeHead);

//snake body list
const snakeBody = document.createElement("ul");
snakeBody.setAttribute("id", "snakeBody");
board.appendChild(snakeBody);

//mouse position tracker and snake mover
function mouseCoord(event){
    let border = board.getBoundingClientRect();
    let x = event.clientX - border.left;
    let y = event.clientY - border.top;
    if(x > 0 && x < 970) {
        snakeHead.style.left = `${x}px`;
    }
    if(y > 0 && y < 570) {
        snakeHead.style.top = `${y}px`;
    }
};

board.addEventListener("mousemove", mouseCoord);

//reset game click
document.addEventListener("click", function(){
    snakeHead.style.left = "0px";
    snakeHead.style.top = "0px";
    while(snakeBody.firstChild){
        snakeBody.removeChild(snakeBody.lastChild);
    };
});

//add snake body divs
function drawSnake(event){
    if(event.key === ' ' || event.keyCode === 32){
        let snakeBodyPiece = document.createElement("div");
        snakeBodyPiece.classList.add("snakeBodyPiece");
        snakeBodyPiece.style.backgroundColor = "darkgreen";
        snakeBodyPiece.style.height = "30px";
        snakeBodyPiece.style.width = "30px";
        snakeBodyPiece.style.position = "absolute";
        snakeBodyPiece.style.left = snakeHead.style.left;
        snakeBodyPiece.style.top = snakeHead.style.top;

        snakeBody.appendChild(snakeBodyPiece);
    }
};

document.addEventListener("keydown", drawSnake);