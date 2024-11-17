let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGamebtn =  document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; //playerX, playerY

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];


const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box was clicked");
        if(turnO){//playerO
            box.innerText = "O";
            turnO = false;
        }else{//playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true; 
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false; 
        box.innerText = "";
    }
};
const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const checkWinner= () =>{
    for(let pattern of winpatterns){
        // console.log(pattern[0], pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val != "" && pos3Val !=""){
            if(pos1Val === pos2Val && pos1Val === pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                //alert("winner");
            }
        }        
    };
};
newGamebtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);