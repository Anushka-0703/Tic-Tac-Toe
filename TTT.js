let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
const container = document.querySelector(".container");
const winContainer = document.querySelector(".show-winner");
const msg = document.querySelector(".win");
let newGame = document.querySelector(".new-game");

let turnX = true;

const winPatterns = [
     [2, 4, 6],
     [0, 4, 8],
     [0, 3, 6],
     [3, 4, 5],
     [6, 7, 8],
     [1, 4, 7],
     [2, 5, 8],
     [0, 1, 2],
];

let checkWinner = () => {
     winPatterns.forEach((pattern) => {
          // console.log(pattern[0],pattern[1],pattern[2]);//[2,5,8]

          // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
          let pos1Val = boxes[pattern[0]].innerText;
          let pos2Val = boxes[pattern[1]].innerText;
          let pos3Val = boxes[pattern[2]].innerText;

          if (pos1Val && pos2Val && pos3Val) {
               if (pos1Val === pos2Val && pos2Val === pos3Val) {
                    showWinner(pos1Val);
               }
          }
     });
};

function showWinner(winner) {
     // console.log(winner);
     container.style.display = "none";
     winContainer.style.display = "flex";
     msg.innerText = `Congratulation ! Player ${winner} won`
}

boxes.forEach((box) => {
     box.addEventListener("click", (e) => {
          if (turnX) {
               box.innerText = "X";
               turnX = false;
          } else {
               box.innerText = "O";
               turnX = true;
          }
          box.disabled = true;
          checkWinner();
     });
});

// console.log(boxes);

resetBtn.addEventListener("click", reset);
newGame.addEventListener("click", () => {
     reset();
     container.style.display = "flex";
     winContainer.style.display = "none";
});

function reset() {
     boxes.forEach((box) => {
          box.disabled = false;
          box.innerText = "";
     });
     turnX = true;
}

//added new line

