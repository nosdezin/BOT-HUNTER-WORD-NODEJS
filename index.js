const MatrixHunterWord = [
  ["b", "o", "a", "p"],
  ["c", "t", "o", "p"],
  ["b", "x", "p", "p"],
  ["a", "f", "v", "a"],
];

// const MatrixHunterWord = [
//   ["a", "b", "c", "d"],
//   ["e", "f", "g", "h"],
//   ["i", "j", "k", "l"],
//   ["m", "n", "o", "p"],
// ];

const gabarito = "boa";
const alvo = {
  x: 2,
  y: 1,
};

const circle = {
  top: { x: alvo.x - 1, y: alvo.y },
  bottom: { x: alvo.x + 1, y: alvo.y },
  left: { x: alvo.x, y: alvo.y - 1 },
  right: { x: alvo.x, y: alvo.y + 1 },
  topRight: { x: alvo.x - 1, y: alvo.y + 1 },
  bottomRight: { x: alvo.x + 1, y: alvo.y + 1 },
  topLeft: { x: alvo.x - 1, y: alvo.y - 1 },
  bottomLeft: { x: alvo.x + 1, y: alvo.y - 1 },
};

// for (let index = 0; index <= 4; index++) {
//   const topBool = false
//   const bottomBool = false
//   const leftBool = false
//   const rightBool = false

//   if(topBool == false){
//     resp =+ MatrixHunterWord[circle.top.x][circle.top.y]
//     topBool = true
//   }else{
//     if(bottomBool == false){
//       resp =+ MatrixHunterWord[circle.bottom.x][circle.bottom.y]
//       bottomBool = true
//     }else{
//       if(leftBool == false){
//         resp =+ MatrixHunterWord[circle.left.x][circle.left.y]
//         leftBool = true
//       }else{
//         if(rightBool == false){
//           resp =+ MatrixHunterWord[circle.right.x][circle.right.y]
//           rightBool = true
//         }
//       }
//     }
//   }
// }

console.log(MatrixHunterWord);
console.log();
console.log(
  "Alvo: " +
    MatrixHunterWord[alvo.x][alvo.y] +
    " || " +
    "X: " +
    alvo.x +
    " : " +
    "Y: " +
    alvo.y
);
console.log("Top do Alvo: " + MatrixHunterWord[circle.top.x][circle.top.y]);
console.log(
  "Bottom do Alvo: " + MatrixHunterWord[circle.bottom.x][circle.bottom.y]
);
console.log("Left do Alvo: " + MatrixHunterWord[circle.left.x][circle.left.y]);
console.log(
  "Right do Alvo: " + MatrixHunterWord[circle.right.x][circle.right.y]
);
console.log(
  "TopRight do Alvo: ",
  MatrixHunterWord[circle.topRight.x][circle.topRight.y]
);
console.log(
  "TopLeft do Alvo: ",
  MatrixHunterWord[circle.topLeft.x][circle.topLeft.y]
);
console.log(
  "baixo-Direita do Alvo: ",
  MatrixHunterWord[circle.bottomRight.x][circle.bottomRight.y]
);
console.log(
  "baixo-Esquerda do Alvo: ",
  MatrixHunterWord[circle.bottomLeft.x][circle.bottomLeft.y]
);
console.log("circulo: ", circle);

// // primeiro [] se refere a linha, o indice começa do 0
// // segundo [] se refere ao objeto baseado no indice, lendo da esquerda p/ direita
