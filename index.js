const MatrixHunterWord = [
  ["c", "d", "e", "f"],
  ["g", "h", "i", "a"],
  ["j", "k", "l", "o"],
  ["m", "n", "a", "b"],
];

const gabarito = "boa";
let alvo = {
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

let TAMANHO_ARRAY = 0;
MatrixHunterWord.map((linha) => {
  linha.map(() => {
    TAMANHO_ARRAY += 1;
  });
});

let resposta = "";
const SEGUNDA_LETRA_GABARITO = gabarito[1];
const COLUNA_TAMANHO = TAMANHO_ARRAY / MatrixHunterWord.length;
let letra_encontrada = false;

if (MatrixHunterWord[alvo.x][alvo.y] == gabarito[0]) {
  console.log("letra inicial do gabarito: Verdadeira");
  // VERIFICAÇÃO EM CIMA DO ALVO
  if (
    circle.top.x != -1 ||
    (circle.top.x > MatrixHunterWord.length && letra_encontrada == false)
  ) {
    console.log("há letras em cima");
    if (
      MatrixHunterWord[circle.top.x][circle.top.y] == SEGUNDA_LETRA_GABARITO
    ) {
      console.log("segunda letra encontrada em cima do alvo");
      resposta = gabarito[0];
      for (let index = circle.top.x; index >= 0; index--) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[index][circle.top.y];
        }
      }
      letra_encontrada = true;
    }
  } else {
    // console.log("não há letras em cima");
  }
  // VERIFICAÇÃO NA ESQUERDA DO ALVO
  if (
    circle.left.y != -1 ||
    (circle.left.y > MatrixHunterWord.length && letra_encontrada == false)
  ) {
    console.log("há letras na esquerda");
    if (
      MatrixHunterWord[circle.left.x][circle.left.y] == SEGUNDA_LETRA_GABARITO
    ) {
      console.log("segunda letra encontrada na esquerda do alvo");
      resposta = gabarito[0];
      for (let index = circle.left.y; index >= 0; index--) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[circle.left.x][index];
        }
      }
      letra_encontrada = true;
    }
  } else {
    // console.log("não há letras na esquerda");
  }
  // VERIFICAÇÃO NA DIREITA DO ALVO
  if (
    circle.right.y != -1 ||
    (circle.right.y > MatrixHunterWord.length && letra_encontrada == false)
  ) {
    console.log("há letras na direita");
    if (
      MatrixHunterWord[circle.right.x][circle.right.y] == SEGUNDA_LETRA_GABARITO
    ) {
      console.log("segunda letra encontrada na direita do alvo");
      resposta = gabarito[0];
      for (let index = circle.right.y; index < COLUNA_TAMANHO; index++) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[circle.right.x][index];
        }
      }
      letra_encontrada = true;
    }
  } else {
    // console.log("não há letras na direita");
  }
  // VERIFICAÇÃO EM BAXO DO ALVO
  if (
    circle.bottom.x != -1 ||
    (circle.bottom.x != 4 && letra_encontrada == false)
  ) {
    console.log("há letras em baixo");
    if (
      MatrixHunterWord[circle.bottom.x][circle.bottom.y] ==
      SEGUNDA_LETRA_GABARITO
    ) {
      console.log("segunda letra encontrada em baixo do alvo");
      resposta = gabarito[0];
      for (let index = circle.bottom.x; index < COLUNA_TAMANHO; index++) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[index][circle.bottom.y];
        }
      }
      letra_encontrada = true;
    }
  } else {
    console.log("não há letras em baixo");
  }
  // VERIFICAÇÃO EM BAIXO-DIREITA DO ALVO
  if (
    circle.bottomRight.x != -1 ||
    (circle.bottomRight.x > MatrixHunterWord.length &&
      letra_encontrada == false)
  ) {
    console.log("há letras em baixo-direita");
    if (
      MatrixHunterWord[circle.bottomRight.x][circle.bottomRight.y] ==
      SEGUNDA_LETRA_GABARITO
    ) {
      console.log("segunda letra encontrada em baixa-esquerda do alvo");
      resposta = gabarito[0];
      let linha = circle.bottomRight.x;
      let coluna = circle.bottomRight.y;
      while (linha <= 3 && coluna <= 3) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[linha][coluna];
        }
        linha++;
        coluna++;
      }
      letra_encontrada = true;
    }
  } else {
    // console.log("não há letras em baixo-direita");
  }
  // VERIFICAÇÃO EM CIMA-DIREITA DO ALVO
  if (
    circle.topRight.x != -1 ||
    (circle.topRight.x > MatrixHunterWord.length && letra_encontrada == false)
  ) {
    console.log("há letras em cima direita");
    if (
      MatrixHunterWord[circle.topRight.x][circle.topRight.y] ==
      SEGUNDA_LETRA_GABARITO
    ) {
      console.log("segunda letra encontrada em cima-direita do alvo");
      resposta = gabarito[0];
      let linha = circle.topRight.x;
      let coluna = circle.topRight.y;
      while (linha >= 0 && coluna <= 3) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[linha][coluna];
        }
        linha--;
        coluna++;
      }
      letra_encontrada = true;
    }
  } else {
    // console.log("não há letras em cima-direita");
  }
  // VERIFICAÇÃO EM TOP-ESQUERDA DO ALVO
  if (
    circle.topLeft.x != -1 ||
    (circle.topLeft.x > MatrixHunterWord.length && letra_encontrada == false)
  ) {
    console.log("há letras em cima-esquerda");
    if (
      MatrixHunterWord[circle.topLeft.x][circle.topLeft.y] ==
      SEGUNDA_LETRA_GABARITO
    ) {
      console.log("segunda letra encontrada em cima-esquerda do alvo");
      resposta = gabarito[0];
      let linha = circle.topLeft.x;
      let coluna = circle.topLeft.y;
      while (linha >= 0 && coluna >= 0) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[linha][coluna];
        }
        linha--;
        coluna--;
      }
      letra_encontrada = true;
    }
  } else {
    // console.log("não há letras em cima-esquerda");
  }
  // VERIFICAÇÃO EM BAIXA-ESQUERDA DO ALVO
  if (
    circle.bottomLeft.y != -1 ||
    (circle.bottomLeft.y > MatrixHunterWord.length && letra_encontrada == false)
  ) {
    console.log("há letras em baixa-esquerda");
    if (
      MatrixHunterWord[circle.bottomLeft.x][circle.bottomLeft.y] ==
      SEGUNDA_LETRA_GABARITO
    ) {
      console.log("segunda letra encontrada em baixa-esquerda do alvo");
      resposta = gabarito[0];
      let linha = circle.bottomLeft.x;
      let coluna = circle.bottomLeft.y;
      while (linha >= 0 && coluna >= 0) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[linha][coluna];
        }
        linha++;
        coluna--;
      }
      letra_encontrada = true;
    }
  } else {
    // console.log("não há letras em baixa-esquerda");
  }
} else {
  console.log("letra inicial do gabarito: falsa");
}

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
// console.log("Top do Alvo: " + MatrixHunterWord[circle.top.x][circle.top.y]);
// console.log(
//   "Bottom do Alvo: " + MatrixHunterWord[circle.bottom.x][circle.bottom.y]
// );
// console.log("Left do Alvo: " + MatrixHunterWord[circle.left.x][circle.left.y]);
// console.log(
//   "Right do Alvo: " + MatrixHunterWord[circle.right.x][circle.right.y]
// );
// console.log(
//   "TopRight do Alvo: ",
//   MatrixHunterWord[circle.topRight.x][circle.topRight.y]
// );
// console.log(
//   "TopLeft do Alvo: ",
//   MatrixHunterWord[circle.topLeft.x][circle.topLeft.y]
// );
// console.log(
//   "baixo-Direita do Alvo: ",
//   MatrixHunterWord[circle.bottomRight.x][circle.bottomRight.y]
// );
// console.log(
//   "baixo-Esquerda do Alvo: ",
//   MatrixHunterWord[circle.bottomLeft.x][circle.bottomLeft.y]
// );
// console.log("tamanho: ", TAMANHO_ARRAY);

console.log("Resposta: ", resposta);

// if (resposta == gabarito) console.log("Gabarito: Verdadeiro");

// // primeiro [] se refere a linha, o indice começa do 0
// // segundo [] se refere ao objeto baseado no indice, lendo da esquerda p/ direita
