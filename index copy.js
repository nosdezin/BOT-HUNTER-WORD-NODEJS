const MatrixHunterWord = [
  ["a", "d", "c", "f"],
  ["e", "g", "h", "a"],
  ["k", "j", "i", "o"],
  ["l", "n", "m", "b"],
];
// // const MatrixHunterWord = [
// //   ["1", "1", "1", "1", "1", "1"],
// //   ["1", "a", "d", "c", "f", "1"],
// //   ["1", "e", "g", "h", "a", "1"],
// //   ["1", "k", "j", "i", "o", "1"],
// //   ["1", "l", "n", "m", "b", "1"],
// //   ["1", "1", "1", "1", "1", "1"],
// // ];

const gabarito = "boa";
const alvo = {
  x: 3,
  y: 3,
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

const veri = (crc) => {
  const undeEdit = (element) => {
    if (element.x == -1 || element.x > MatrixHunterWord.length - 1) {
      element.x = "UNDE";
    }
    if (element.y == -1 || element.y > MatrixHunterWord.length - 1) {
      element.y = "UNDE";
    }
  };

  undeEdit(crc.top);
  undeEdit(crc.bottom);
  undeEdit(crc.left);
  undeEdit(crc.right);
  undeEdit(crc.topRight);
  undeEdit(crc.topLeft);
  undeEdit(crc.bottomLeft);
  undeEdit(crc.bottomRight);
};

const condi = (element) => {
  // if(element.x != "UNDE" && element.y != "UNDE"){
  //   return true
  // }else{
  //   return false
  // }
  if (element != "UNDE") {
    return true;
  } else {
    return false;
  }
};

veri(circle);

const GET_ANSWER = (tipo, linha, coluna) => {
  let answer = "";
  console.log(tipo, "|resposta: " + resposta + "|", linha, coluna);
  switch (tipo) {
    case "cima":
      answer = gabarito[0];
      for (let index = circle.top.x; index >= 0; index--) {
        if (answer != gabarito) {
          answer += MatrixHunterWord[index][circle.top.y];
        }
      }
      break;
    case "esquerda":
      console.log("letra encontrada na direita");
      answer = gabarito[0];
      for (let index = circle.left.y; index >= 0; index--) {
        if (answer != gabarito) {
          answer += MatrixHunterWord[circle.left.x][index];
        }
      }
      break;
    case "direita":
      answer = gabarito[0];
      for (let index = circle.right.y; index < COLUNA_TAMANHO; index++) {
        if (answer != gabarito) {
          answer += MatrixHunterWord[circle.right.x][index];
        }
      }
      break;
    case "baixo":
      answer = gabarito[0];
      for (let index = circle.bottom.x; index < COLUNA_TAMANHO; index++) {
        if (answer != gabarito) {
          answer += MatrixHunterWord[index][circle.bottom.y];
        }
      }
      break;
    case "baixo-direito":
      answer = gabarito[0];
      linha = circle.bottomRight.x;
      coluna = circle.bottomRight.y;
      while (linha <= 3 && coluna <= 3) {
        if (answer != gabarito) {
          answer += MatrixHunterWord[linha][coluna];
        }
        linha++;
        coluna++;
      }
      break;
    case "baixo-esquerdo":
      answer = gabarito[0];
      linha = circle.bottomLeft.x;
      coluna = circle.bottomLeft.y;
      while (linha >= 0 && coluna >= 0) {
        if (answer != gabarito) {
          answer += MatrixHunterWord[linha][coluna];
        }
        linha++;
        coluna--;
      }
      break;
    case "cima-esquerda":
      answer = gabarito[0];
      linha = circle.topLeft.x;
      coluna = circle.topLeft.y;
      while (linha >= 0 && coluna >= 0) {
        if (answer != gabarito) {
          answer += MatrixHunterWord[linha][coluna];
        }
        linha--;
        coluna--;
      }
      break;
    case "cima-direito":
      answer = gabarito[0];
      linha = circle.topRight.x;
      coluna = circle.topRight.y;
      while (linha >= 0 && coluna <= 3) {
        if (answer != gabarito) {
          answer += MatrixHunterWord[linha][coluna];
        }
        linha--;
        coluna++;
      }
      break;
    // default:
    //   console.log("Deu errado");
    //   break;
  }
  if (answer != gabarito) {
    console.log("RESPOSTA NÃO CORRESPONDE AO GABARITO");
  }
  console.log(tipo, "|resposta: " + answer + "|", linha, coluna);
  return answer;
};

let resposta = "";
let linha = 0;
let coluna = 0;

const SEGUNDA_LETRA_GABARITO = gabarito[1];

const HUNTER_WORD_FUNCTION = () => {
  // console.log("Iniciando o bot");
  if (MatrixHunterWord[alvo.x][alvo.y] == gabarito[0]) {
    if (condi(circle.top.x)) {
      console.log("letra encontrada em cima");
      resposta = GET_ANSWER("cima", resposta, linha, coluna);
    }
    if (condi(circle.bottom.x)) {
      if (
        MatrixHunterWord[circle.bottom.x][circle.bottom.y] ==
        SEGUNDA_LETRA_GABARITO
      ) {
        console.log("letra encontrada em baixa");
        resposta = GET_ANSWER("baixo", resposta, linha, coluna);
      }
    }
    if (condi(circle.left.y)) {
      if (
        MatrixHunterWord[circle.left.x][circle.left.y] == SEGUNDA_LETRA_GABARITO
      ) {
        console.log("letra encontrada na esquerda");
        GET_ANSWER("esquerda", resposta, linha, coluna);
      }
    }
    if (condi(circle.right.y)) {
      if (
        MatrixHunterWord[circle.right.x][circle.right.y] ==
        SEGUNDA_LETRA_GABARITO
      ) {
        console.log("letra encontrada na direita");
        resposta = GET_ANSWER("direita", resposta, linha, coluna);
      }
    }
    if (condi(circle.bottomRight.x)) {
      if (
        MatrixHunterWord[circle.bottomRight.x][circle.bottomRight.y] ==
        SEGUNDA_LETRA_GABARITO
      ) {
        console.log("letra encontrada em baixo-direito");
        resposta = GET_ANSWER("baixo-direito", resposta, linha, coluna);
      }
    }
    if (condi(circle.bottomLeft.y)) {
      if (
        MatrixHunterWord[circle.bottomLeft.x][circle.bottomLeft.y] ==
        SEGUNDA_LETRA_GABARITO
      ) {
        console.log("letra encontrada em baixo-esquerda");
        resposta = GET_ANSWER("baixo-esquerda", resposta, linha, coluna);
      }
    }
    if (condi(circle.topRight.x)) {
      if (
        MatrixHunterWord[circle.topRight.x][circle.topRight.y] ==
        SEGUNDA_LETRA_GABARITO
      ) {
        console.log("letra encontrada em cima-direito");
        resposta = GET_ANSWER("cima-direito", resposta, linha, coluna);
      }
    }
    if (condi(circle.topLeft.x)) {
      if (
        MatrixHunterWord[circle.topLeft.x][circle.topLeft.y] ==
        SEGUNDA_LETRA_GABARITO
      ) {
        console.log("letra encontrada em cima-esquerdo");
        resposta = GET_ANSWER("cima-esquerdo", resposta, linha, coluna);
      }
    }
  }
  //  else {
  //   console.log("letra não encontrada");
  // }
  // console.log("Terminando  o bot");
};

HUNTER_WORD_FUNCTION();

console.log(MatrixHunterWord);
console.log(MatrixHunterWord[alvo.x][alvo.y]);
console.log(circle);

// let TAMANHO_ARRAY = 0;
// MatrixHunterWord.map((linha) => {
//   linha.map(() => {
//     TAMANHO_ARRAY += 1;
//   });
// });

// let resposta = "";
// const SEGUNDA_LETRA_GABARITO = gabarito[1];
// const COLUNA_TAMANHO = TAMANHO_ARRAY / MatrixHunterWord.length;
// const LETRA_ALVO = MatrixHunterWord[alvo.x][alvo.y];
// let ciclo_completo = false;
// const ULTIMA_LETRA =
//   MatrixHunterWord[MatrixHunterWord.length - 1][COLUNA_TAMANHO - 1];
// let letra_encontrada = false;

// const GET_ANSWER = (tipo, linha, coluna) => {
//   // circle = {
//   //   top: { x: alvo.x - 1, y: alvo.y },
//   //   bottom: { x: alvo.x + 1, y: alvo.y },
//   //   left: { x: alvo.x, y: alvo.y - 1 },
//   //   right: { x: alvo.x, y: alvo.y + 1 },
//   //   topRight: { x: alvo.x - 1, y: alvo.y + 1 },
//   //   bottomRight: { x: alvo.x + 1, y: alvo.y + 1 },
//   //   topLeft: { x: alvo.x - 1, y: alvo.y - 1 },
//   //   bottomLeft: { x: alvo.x + 1, y: alvo.y - 1 },
//   // };

//   let answer = "";
//   // console.log(tipo, "|resposta: " + resposta + "|", linha, coluna);
//   switch (tipo) {
//     case "cima":
//       answer = gabarito[0];
//       for (let index = circle.top.x; index >= 0; index--) {
//         if (answer != gabarito) {
//           answer += MatrixHunterWord[index][circle.top.y];
//         }
//       }
//       break;
//     case "esquerda":
//       console.log("letra encontrada na direita");
//       answer = gabarito[0];
//       for (let index = circle.left.y; index >= 0; index--) {
//         if (answer != gabarito) {
//           answer += MatrixHunterWord[circle.left.x][index];
//         }
//       }
//       break;
//     case "direita":
//       answer = gabarito[0];
//       for (let index = circle.right.y; index < COLUNA_TAMANHO; index++) {
//         if (answer != gabarito) {
//           answer += MatrixHunterWord[circle.right.x][index];
//         }
//       }
//       break;
//     case "baixo":
//       answer = gabarito[0];
//       for (let index = circle.bottom.x; index < COLUNA_TAMANHO; index++) {
//         if (answer != gabarito) {
//           answer += MatrixHunterWord[index][circle.bottom.y];
//         }
//       }
//       break;
//     case "baixo-direito":
//       answer = gabarito[0];
//       linha = circle.bottomRight.x;
//       coluna = circle.bottomRight.y;
//       while (linha <= 3 && coluna <= 3) {
//         if (answer != gabarito) {
//           answer += MatrixHunterWord[linha][coluna];
//         }
//         linha++;
//         coluna++;
//       }
//       break;
//     case "baixo-esquerdo":
//       answer = gabarito[0];
//       linha = circle.bottomLeft.x;
//       coluna = circle.bottomLeft.y;
//       while (linha >= 0 && coluna >= 0) {
//         if (answer != gabarito) {
//           answer += MatrixHunterWord[linha][coluna];
//         }
//         linha++;
//         coluna--;
//       }
//       break;
//     case "cima-esquerda":
//       answer = gabarito[0];
//       linha = circle.topLeft.x;
//       coluna = circle.topLeft.y;
//       while (linha >= 0 && coluna >= 0) {
//         if (answer != gabarito) {
//           answer += MatrixHunterWord[linha][coluna];
//         }
//         linha--;
//         coluna--;
//       }
//       break;
//     case "cima-direito":
//       answer = gabarito[0];
//       linha = circle.topRight.x;
//       coluna = circle.topRight.y;
//       while (linha >= 0 && coluna <= 3) {
//         if (answer != gabarito) {
//           answer += MatrixHunterWord[linha][coluna];
//         }
//         linha--;
//         coluna++;
//       }
//       break;
//     // default:
//     //   console.log("Deu errado");
//     //   break;
//   }
//   if (answer != gabarito) {
//     console.log("RESPOSTA NÃO CORRESPONDE AO GABARITO");
//   }
//   console.log(tipo, "|resposta: " + answer + "|", linha, coluna);
//   return answer;
// };

// let linha = 0;
// let coluna = 0;

// const verificar = () => {
//   if (circle.top.x == -1 || circle.top.x > MatrixHunterWord.length - 1) {
//     circle.top.x = alvo.x;
//   }
//   if (circle.top.y == -1 || circle.top.y > MatrixHunterWord.length - 1) {
//     circle.top.y = alvo.y;
//   }
//   if (circle.bottom.x == -1 || circle.bottom.x > MatrixHunterWord.length - 1) {
//     circle.bottom.x = alvo.x;
//   }
//   if (circle.bottom.y == -1 || circle.bottom.y > MatrixHunterWord.length - 1) {
//     circle.bottom.y = alvo.y;
//   }
//   if (circle.left.x == -1 || circle.left.x > MatrixHunterWord.length - 1) {
//     circle.left.x = alvo.x;
//   }
//   if (circle.left.y == -1 || circle.left.y > MatrixHunterWord.length - 1) {
//     circle.left.y = alvo.y;
//   }
//   if (circle.right.x == -1 || circle.right.x > MatrixHunterWord.length - 1) {
//     circle.right.x = alvo.x;
//   }
//   if (circle.right.y == -1 || circle.right.y > MatrixHunterWord.length - 1) {
//     circle.right.y = alvo.y;
//   }
//   if (
//     circle.topLeft.x == -1 ||
//     circle.topLeft.x > MatrixHunterWord.length - 1
//   ) {
//     circle.topLeft.x = alvo.x;
//   }
//   if (
//     circle.topLeft.y == -1 ||
//     circle.topLeft.y > MatrixHunterWord.length - 1
//   ) {
//     circle.topLeft.y = alvo.y;
//   }
//   if (
//     circle.topRight.x == -1 ||
//     circle.topRight.x > MatrixHunterWord.length - 1
//   ) {
//     circle.topRight.x = alvo.x;
//   }
//   if (
//     circle.topRight.y == -1 ||
//     circle.topRight.y > MatrixHunterWord.length - 1
//   ) {
//     circle.topRight.y = alvo.y;
//   }
//   if (
//     circle.bottomLeft.x == -1 ||
//     circle.bottomLeft.x > MatrixHunterWord.length - 1
//   ) {
//     circle.bottomLeft.x = alvo.x;
//   }
//   if (
//     circle.bottomLeft.y == -1 ||
//     circle.bottomLeft.y > MatrixHunterWord.length - 1
//   ) {
//     circle.bottomLeft.y = alvo.y;
//   }
//   if (
//     circle.bottomRight.x == -1 ||
//     circle.bottomRight.x > MatrixHunterWord.length - 1
//   ) {
//     circle.bottomRight.x = alvo.x;
//   }
//   if (
//     circle.bottomRight.y == -1 ||
//     circle.bottomRight.y > MatrixHunterWord.length - 1
//   ) {
//     circle.bottomRight.y = alvo.y;
//   }
// };

// verificar();

// const HUNTER_WORD_FUNCTION = () => {
//   // console.log("Iniciando o bot");
//   if (MatrixHunterWord[alvo.x][alvo.y] == gabarito[0]) {
//     if (circle.top.x != -1 || circle.top.x > MatrixHunterWord.length) {
//       console.log("letra encontrada em cima");
//       resposta = GET_ANSWER("cima", resposta, linha, coluna);
//     }
//     if (circle.bottom.x != -1 || circle.bottom.x != 4) {
//       if (
//         MatrixHunterWord[circle.bottom.x][circle.bottom.y] ==
//         SEGUNDA_LETRA_GABARITO
//       ) {
//         console.log("letra encontrada em baixa");
//         resposta = GET_ANSWER("baixo", resposta, linha, coluna);
//       }
//     }
//     if (circle.left.y != -1 || circle.left.y > MatrixHunterWord.length) {
//       if (
//         MatrixHunterWord[circle.left.x][circle.left.y] == SEGUNDA_LETRA_GABARITO
//       ) {
//         console.log("letra encontrada na esquerda");
//         GET_ANSWER("esquerda", resposta, linha, coluna);
//       }
//     }
//     if (circle.right.y != -1 || circle.right.y > MatrixHunterWord.length) {
//       if (
//         MatrixHunterWord[circle.right.x][circle.right.y] ==
//         SEGUNDA_LETRA_GABARITO
//       ) {
//         console.log("letra encontrada na direita");
//         resposta = GET_ANSWER("direita", resposta, linha, coluna);
//       }
//     }
//     if (
//       circle.bottomRight.x != -1 ||
//       circle.bottomRight.x > MatrixHunterWord.length
//     ) {
//       if (
//         MatrixHunterWord[circle.bottomRight.x][circle.bottomRight.y] ==
//         SEGUNDA_LETRA_GABARITO
//       ) {
//         console.log("letra encontrada em baixo-direito");
//         resposta = GET_ANSWER("baixo-direito", resposta, linha, coluna);
//       }
//     }
//     if (
//       circle.bottomLeft.y != -1 ||
//       circle.bottomLeft.y > MatrixHunterWord.length
//     ) {
//       if (
//         MatrixHunterWord[circle.bottomLeft.x][circle.bottomLeft.y] ==
//         SEGUNDA_LETRA_GABARITO
//       ) {
//         console.log("letra encontrada em baixo-esquerda");
//         resposta = GET_ANSWER("baixo-esquerda", resposta, linha, coluna);
//       }
//     }
//     if (
//       circle.topRight.x != -1 ||
//       circle.topRight.x > MatrixHunterWord.length
//     ) {
//       if (
//         MatrixHunterWord[circle.topRight.x][circle.topRight.y] ==
//         SEGUNDA_LETRA_GABARITO
//       ) {
//         console.log("letra encontrada em cima-direito");
//         resposta = GET_ANSWER("cima-direito", resposta, linha, coluna);
//       }
//     }
//     if (circle.topLeft.x != -1 || circle.topLeft.x > MatrixHunterWord.length) {
//       if (
//         MatrixHunterWord[circle.topLeft.x][circle.topLeft.y] ==
//         SEGUNDA_LETRA_GABARITO
//       ) {
//         console.log("letra encontrada em cima-esquerdo");
//         resposta = GET_ANSWER("cima-esquerdo", resposta, linha, coluna);
//       }
//     }
//   }
//   //  else {
//   //   console.log("letra não encontrada");
//   // }
//   // console.log("Terminando  o bot");
// };

// // const previewLetra = (verific) => {
// //   // const xyWord = MatrixHunterWord[x][y];
// //   // return x == -1 ? "" : xyWord || y == -1 ? "" : xyWord;
// //   // return verific == -1
// //   //   ? false
// //   //   : true || verific > COLUNA_TAMANHO
// //   //   ? false
// //   //   : true;
// //   if (verific == -1 || verific > MatrixHunterWord.length) {
// //     console.log("as extremidades foram alcançadas");
// //     return false;
// //   } else {
// //     return true;
// //   }
// // };

// // const HUNTER_WORD_FUNCTION = () => {
// //   if (LETRA_ALVO == gabarito[0]) {
// //     // (circle.top.x != -1 || circle.top.x > MatrixHunterWord.length)
// //     if (previewLetra(circle.top.x)) {
// //       console.log("letra encontrada em cima");
// //       resposta = GET_ANSWER("cima", resposta, linha, coluna);
// //     }
// //   }
// // };

// console.log(MatrixHunterWord);
// // console.log(circle);
// // HUNTER_WORD_FUNCTION();

// while (ciclo_completo == false) {
//   if (letra_encontrada) {
//     ciclo_completo = true;
//   }
//   HUNTER_WORD_FUNCTION();
//   console.log(
//     "Alvo: " +
//       MatrixHunterWord[alvo.x][alvo.y] +
//       " || " +
//       "X: " +
//       alvo.x +
//       " : " +
//       "Y: " +
//       alvo.y
//   );
//   if (alvo.x == MatrixHunterWord.length - 1 && alvo.y == COLUNA_TAMANHO - 1) {
//     ciclo_completo = true;
//   } else {
//     if (alvo.x == 3) {
//       alvo.x = 0;
//       alvo.y += 1;
//     }
//   }
//   alvo.x += 1;
// }

console.log("Resposta: ", resposta);
