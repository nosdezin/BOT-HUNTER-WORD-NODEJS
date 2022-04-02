const MatrixHunterWord = [
  ["b", "o", "a", "f"],
  ["g", "h", "i", "a"],
  ["j", "k", "l", "o"],
  ["m", "n", "a", "b"],
];

const gabarito = "boa";
let alvo = {
  x: 0,
  y: 0,
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

let ciclo_completo = false;
const ULTIMA_LETRA =
  MatrixHunterWord[MatrixHunterWord.length - 1][COLUNA_TAMANHO - 1];

const GET_ANSWER = (tipo, resposta, linha, coluna) => {
  switch (tipo) {
    case "cima":
      resposta = gabarito[0];
      for (let index = circle.top.x; index >= 0; index--) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[index][circle.top.y];
        }
      }
      break;
    case "esquerda":
      console.log("letra encontrada na direita");
      resposta = gabarito[0];
      for (let index = circle.left.y; index >= 0; index--) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[circle.left.x][index];
        }
      }
      break;
    case "direita":
      resposta = gabarito[0];
      for (let index = circle.right.y; index < COLUNA_TAMANHO; index++) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[circle.right.x][index];
        }
      }
      break;
    case "baixo":
      resposta = gabarito[0];
      for (let index = circle.bottom.x; index < COLUNA_TAMANHO; index++) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[index][circle.bottom.y];
        }
      }
      break;
    case "baixo-direito":
      resposta = gabarito[0];
      linha = circle.bottomRight.x;
      coluna = circle.bottomRight.y;
      while (linha <= 3 && coluna <= 3) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[linha][coluna];
        }
        linha++;
        coluna++;
      }
      break;
    case "baixo-esquerdo":
      resposta = gabarito[0];
      linha = circle.bottomLeft.x;
      coluna = circle.bottomLeft.y;
      while (linha >= 0 && coluna >= 0) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[linha][coluna];
        }
        linha++;
        coluna--;
      }
      break;
    case "cima-esquerda":
      resposta = gabarito[0];
      linha = circle.topLeft.x;
      coluna = circle.topLeft.y;
      while (linha >= 0 && coluna >= 0) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[linha][coluna];
        }
        linha--;
        coluna--;
      }
      break;
    case "cima-direito":
      resposta = gabarito[0];
      linha = circle.topRight.x;
      coluna = circle.topRight.y;
      while (linha >= 0 && coluna <= 3) {
        if (resposta != gabarito) {
          resposta += MatrixHunterWord[linha][coluna];
        }
        linha--;
        coluna++;
      }
      break;
  }
};

let linha = 0;
let coluna = 0;

const HUNTER_WORD_FUNCTION = () => {
  if (MatrixHunterWord[alvo.x][alvo.y] == gabarito[0]) {
    if (circle.top.x != -1 || circle.top.x > MatrixHunterWord.length) {
      GET_ANSWER("cima", resposta, linha, coluna);
    } else {
      if (circle.left.y != -1 || circle.left.y > MatrixHunterWord.length) {
        if (
          MatrixHunterWord[circle.left.x][circle.left.y] ==
          SEGUNDA_LETRA_GABARITO
        ) {
          GET_ANSWER("esquerda", resposta.linha, coluna);
        }
      } else {
        if (circle.right.y != -1 || circle.right.y > MatrixHunterWord.length) {
          if (
            MatrixHunterWord[circle.right.x][circle.right.y] ==
            SEGUNDA_LETRA_GABARITO
          ) {
            GET_ANSWER("direita", resposta.linha, coluna);
          }
        } else {
          if (circle.bottom.x != -1 || circle.bottom.x != 4) {
            if (
              MatrixHunterWord[circle.bottom.x][circle.bottom.y] ==
              SEGUNDA_LETRA_GABARITO
            ) {
              GET_ANSWER("baixo", resposta.linha, coluna);
            }
          } else {
            if (
              circle.bottomRight.x != -1 ||
              circle.bottomRight.x > MatrixHunterWord.length
            ) {
              if (
                MatrixHunterWord[circle.bottomRight.x][circle.bottomRight.y] ==
                SEGUNDA_LETRA_GABARITO
              ) {
                GET_ANSWER("baixo-direito", resposta, linha, coluna);
              }
            } else {
              if (
                circle.bottomLeft.y != -1 ||
                circle.bottomLeft.y > MatrixHunterWord.length
              ) {
                if (
                  MatrixHunterWord[circle.bottomLeft.x][circle.bottomLeft.y] ==
                  SEGUNDA_LETRA_GABARITO
                ) {
                  GET_ANSWER("baixo-esquerda", resposta, linha, coluna);
                }
              } else {
                if (
                  circle.topRight.x != -1 ||
                  circle.topRight.x > MatrixHunterWord.length
                ) {
                  if (
                    MatrixHunterWord[circle.topRight.x][circle.topRight.y] ==
                    SEGUNDA_LETRA_GABARITO
                  ) {
                    GET_ANSWER("cima-direito", resposta, linha, coluna);
                  }
                } else {
                  if (
                    circle.topLeft.x != -1 ||
                    circle.topLeft.x > MatrixHunterWord.length
                  ) {
                    if (
                      MatrixHunterWord[circle.topLeft.x][circle.topLeft.y] ==
                      SEGUNDA_LETRA_GABARITO
                    ) {
                      GET_ANSWER("cima-esquerdo", resposta, linha, coluna);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }else{
    console.log("letra não encontrada");
  }
};

console.log(MatrixHunterWord);

while (ciclo_completo == false) {
  HUNTER_WORD_FUNCTION();
  console.log("AlvoX: ",alvo.x," AlvoY: ",alvo.y);
  if (alvo.x == MatrixHunterWord.length - 1 && alvo.y == COLUNA_TAMANHO - 1) {
    ciclo_completo = true;
  } else {
    if (alvo.x == 3) {
      alvo.x = 0;
      alvo.y += 1;
    }
  }
  alvo.x += 1;
}

console.log("Resposta: ", resposta);