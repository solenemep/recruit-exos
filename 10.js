const checkSequence = (array) => {
  let result = true;
  let checkArray = [];
  for (let i = 0; i < array.length; i++) {
    if (checkArray.includes(array[i])) {
      result = false;
    } else {
      checkArray.push(array[i]);
    }
  }
  return result;
};

const arrayFromSquare = (sudoku, squareX, squareY) => {
  let array = [];
  for (let i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      array.push(sudoku[squareX][squareY][i][j]);
    }
  }
  return array;
};

const arrayFromRow = (sudoku, rowX, rowY) => {
  let array = [];
  for (let i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      array.push(sudoku[rowX][i][rowY][j]);
    }
  }
  return array;
};

const arrayFromColumn = (sudoku, columnX, columnY) => {
  let array = [];
  for (let i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      array.push(sudoku[i][columnX][j][columnY]);
    }
  }
  return array;
};

const checkSudoku = (sudoku) => {
  let result = true;
  for (x = 0; x < 3; x++) {
    for (y = 0; y < 3; y++) {
      if (!checkSequence(arrayFromSquare(sudoku, x, y))) {
        result = false;
      }
      if (!checkSequence(arrayFromRow(sudoku, x, y))) {
        result = false;
      }
      if (!checkSequence(arrayFromColumn(sudoku, x, y))) {
        result = false;
      }
    }
  }
  return result;
};

// DATA
const m1 = [
  [1, 8, 2],
  [9, 6, 5],
  [7, 4, 3],
];
const m2 = [
  [5, 4, 3],
  [1, 7, 8],
  [9, 6, 2],
];
const m3 = [
  [6, 9, 7],
  [3, 4, 2],
  [8, 1, 5],
];
const m4 = [
  [3, 7, 4],
  [6, 2, 8],
  [5, 1, 9],
];
const m5 = [
  [8, 9, 6],
  [4, 5, 1],
  [2, 3, 7],
];
const m6 = [
  [5, 2, 1],
  [7, 3, 9],
  [4, 6, 8],
];
const m7 = [
  [2, 9, 7],
  [4, 3, 1],
  [8, 5, 6],
];
const m8 = [
  [6, 8, 4],
  [7, 2, 5],
  [3, 1, 9],
];
const m9 = [
  [1, 5, 3],
  [9, 8, 6],
  [2, 7, 4],
];

const sudoku = [
  [m1, m2, m3],
  [m4, m5, m6],
  [m7, m8, m9],
];

console.log(checkSudoku(sudoku));
