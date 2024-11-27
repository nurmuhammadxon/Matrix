// 4x4 matritsa determinantini hisoblash
function determinant4x4(matrix) {
  return (
    matrix[0][0] * (
      matrix[1][1] * (matrix[2][2] * matrix[3][3] - matrix[2][3] * matrix[3][2]) -
      matrix[1][2] * (matrix[2][1] * matrix[3][3] - matrix[2][3] * matrix[3][1]) +
      matrix[1][3] * (matrix[2][1] * matrix[3][2] - matrix[2][2] * matrix[3][1])
    ) -
    matrix[0][1] * (
      matrix[1][0] * (matrix[2][2] * matrix[3][3] - matrix[2][3] * matrix[3][2]) -
      matrix[1][2] * (matrix[2][0] * matrix[3][3] - matrix[2][3] * matrix[3][0]) +
      matrix[1][3] * (matrix[2][0] * matrix[3][2] - matrix[2][2] * matrix[3][0])
    ) +
    matrix[0][2] * (
      matrix[1][0] * (matrix[2][1] * matrix[3][3] - matrix[2][3] * matrix[3][1]) -
      matrix[1][1] * (matrix[2][0] * matrix[3][3] - matrix[2][3] * matrix[3][0]) +
      matrix[1][3] * (matrix[2][0] * matrix[3][1] - matrix[2][1] * matrix[3][0])
    ) -
    matrix[0][3] * (
      matrix[1][0] * (matrix[2][1] * matrix[3][2] - matrix[2][2] * matrix[3][1]) -
      matrix[1][1] * (matrix[2][0] * matrix[3][2] - matrix[2][2] * matrix[3][0]) +
      matrix[1][2] * (matrix[2][0] * matrix[3][1] - matrix[2][1] * matrix[3][0])
    )
  );
}

function getMatrixFromInputs(prefix) {
  const matrix = [];
  for (let i = 1; i <= 4; i++) {
    const row = [];
    for (let j = 1; j <= 4; j++) {
      const value = document.getElementById(`${prefix}${i}${j}`).value;
      row.push(Number(value) || 0);
    }
    matrix.push(row);
  }
  return matrix;
}

function calculateDeterminant() {
  const matrixA = getMatrixFromInputs('a');
  const matrixB = getMatrixFromInputs('b');

  const detA = determinant4x4(matrixA);
  const detB = determinant4x4(matrixB);

  document.getElementById('result__detirminatA').textContent = detA;
  document.getElementById('result__detirminatB').textContent = detB;
}

function calculateYigindi() {
  const matrixA = getMatrixFromInputs('a');
  const matrixB = getMatrixFromInputs('b');
  const result = [];

  for (let i = 0; i < 4; i++) {
    result[i] = [];
    for (let j = 0; j < 4; j++) {
      result[i][j] = matrixA[i][j] + matrixB[i][j];
      document.getElementById(`result${i}${j}`).textContent = result[i][j];
    }
  }
}

function calculateAyirma() {
  const matrixA = getMatrixFromInputs('a');
  const matrixB = getMatrixFromInputs('b');
  const result = [];

  for (let i = 0; i < 4; i++) {
    result[i] = [];
    for (let j = 0; j < 4; j++) {
      result[i][j] = matrixA[i][j] - matrixB[i][j];
      document.getElementById(`result${i}${j}`).textContent = result[i][j];
    }
  }
}

function calculateKopaytma() {
  const matrixA = getMatrixFromInputs('a');
  const matrixB = getMatrixFromInputs('b');
  const result = Array(4).fill().map(() => Array(4).fill(0));

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
      document.getElementById(`result${i}${j}`).textContent = result[i][j];
    }
  }
}
