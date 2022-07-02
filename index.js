const MatrixHunterWord = [
  ["a", "d", "c", "f"],
  ["e", "a", "h", "a"],
  ["k", "j", "o", "a"],
  ["l", "a", "a", "b"],
];
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
let resposta = "";
let linha = 0;
let coluna = 0;
let letra_encontrada = false;
const SEGUNDA_LETRA_GABARITO = gabarito[1];

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
  return element != "UNDE" ? true : false;
};

const GET_ANSWER = (tipo, linha, coluna) => {
  let answer = "";
  letra_encontrada = true;
  // console.log(tipo, "|resposta: " + resposta + "|", linha, coluna);
  switch (tipo) {
    case "cima":
      answer = gabarito[0];
      for (let index = circle.top.x; index >= 4; index++) {
        if (answer != gabarito) {
          console.log(index);
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
  }
  if (answer != gabarito) {
    console.log("RESPOSTA NÃO CORRESPONDE AO GABARITO");
  }
  // console.log(tipo, "|resposta: " + answer + "|", linha, coluna);
  return answer;
};

const HUNTER_WORD_FUNCTION = () => {
  if (MatrixHunterWord[alvo.x][alvo.y] == gabarito[0]) {
    if (condi(circle.top.x)) {
      if (letra_encontrada == false) {
        console.log("letra encontrada em cima");
        resposta = GET_ANSWER("cima", resposta, linha, coluna);
      }
    }
    if (condi(circle.bottom.x)) {
      if (letra_encontrada == false) {
        if (
          MatrixHunterWord[circle.bottom.x][circle.bottom.y] ==
          SEGUNDA_LETRA_GABARITO
        ) {
          console.log("letra encontrada em baixa");
          resposta = GET_ANSWER("baixo", resposta, linha, coluna);
        }
      }
    }
    if (condi(circle.left.y)) {
      if (letra_encontrada == false) {
        if (
          MatrixHunterWord[circle.left.x][circle.left.y] ==
          SEGUNDA_LETRA_GABARITO
        ) {
          console.log("letra encontrada na esquerda");
          GET_ANSWER("esquerda", resposta, linha, coluna);
        }
      }
    }
    if (condi(circle.right.y)) {
      if (letra_encontrada == false) {
        if (
          MatrixHunterWord[circle.right.x][circle.right.y] ==
          SEGUNDA_LETRA_GABARITO
        ) {
          console.log("letra encontrada na direita");
          resposta = GET_ANSWER("direita", resposta, linha, coluna);
        }
      }
    }
    if (condi(circle.bottomRight.x)) {
      if (letra_encontrada == false) {
        if (
          MatrixHunterWord[circle.bottomRight.x][circle.bottomRight.y] ==
          SEGUNDA_LETRA_GABARITO
        ) {
          console.log("letra encontrada em baixo-direito");
          resposta = GET_ANSWER("baixo-direito", resposta, linha, coluna);
        }
      }
    }
    if (condi(circle.bottomLeft.y)) {
      if (letra_encontrada == false) {
        if (
          MatrixHunterWord[circle.bottomLeft.x][circle.bottomLeft.y] ==
          SEGUNDA_LETRA_GABARITO
        ) {
          console.log("letra encontrada em baixo-esquerda");
          resposta = GET_ANSWER("baixo-esquerda", resposta, linha, coluna);
        }
      }
    }
    if (condi(circle.topRight.x)) {
      if (letra_encontrada == false) {
        if (
          MatrixHunterWord[circle.topRight.x][circle.topRight.y] ==
          SEGUNDA_LETRA_GABARITO
        ) {
          console.log("letra encontrada em cima-direito");
          resposta = GET_ANSWER("cima-direito", resposta, linha, coluna);
        }
      }
    }
    if (condi(circle.topLeft.x)) {
      if (letra_encontrada == false) {
        if (
          MatrixHunterWord[circle.topLeft.x][circle.topLeft.y] ==
          SEGUNDA_LETRA_GABARITO
        ) {
          console.log("letra encontrada em cima-esquerdo");
          resposta = GET_ANSWER("cima-esquerdo", resposta, linha, coluna);
        }
      }
    }
  }
};
veri(circle);
HUNTER_WORD_FUNCTION();

console.log(MatrixHunterWord);
console.log(MatrixHunterWord[alvo.x][alvo.y]);
console.log(circle);
console.log(resposta);
