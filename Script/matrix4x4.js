function determinant4x4(matrix) {
  let det = 0;
  for (let i = 0; i < 4; i++) {
      let minor = [];
      for (let j = 1; j < 4; j++) {
          minor.push(matrix[j].filter((_, colIndex) => colIndex !== i));
      }
      det += matrix[0][i] * determinant3x3(minor) * (i % 2 === 0 ? 1 : -1);
  }
  return det;
}

function determinant3x3(matrix) {
  return (
      matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
      matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
      matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0])
  );
}

function calculateDeterminant4x4() {
  const matrixA = getMatrixFromInputs("a");
  const matrixB = getMatrixFromInputs("b");

  const detA = determinant4x4(matrixA);
  const detB = determinant4x4(matrixB);

  document.getElementById("result__detirminatA").textContent = detA;
  document.getElementById("result__detirminatB").textContent = detB;
}

function yigindi4x4(matrixA, matrixB) {
  let result = [];
  for (let i = 0; i < 4; i++) {
      result.push([]);
      for (let j = 0; j < 4; j++) {
          result[i].push(matrixA[i][j] + matrixB[i][j]);
      }
  }
  return result;
}

function calculateYigindi4x4() {
  const matrixA = getMatrixFromInputs("a");
  const matrixB = getMatrixFromInputs("b");

  const yigindiAB = yigindi4x4(matrixA, matrixB);

  updateMatrixOutput(yigindiAB);
}

function ayirma4x4(matrixA, matrixB) {
  let result = [];
  for (let i = 0; i < 4; i++) {
      result.push([]);
      for (let j = 0; j < 4; j++) {
          result[i].push(matrixA[i][j] - matrixB[i][j]);
      }
  }
  return result;
}

function calculateAyirma4x4() {
  const matrixA = getMatrixFromInputs("a");
  const matrixB = getMatrixFromInputs("b");

  const ayirmaAB = ayirma4x4(matrixA, matrixB);

  updateMatrixOutput(ayirmaAB);
}

function kopaytma4x4(matrixA, matrixB) {
  let result = [];
  for (let i = 0; i < 4; i++) {
      result.push([]);
      for (let j = 0; j < 4; j++) {
          let sum = 0;
          for (let k = 0; k < 4; k++) {
              sum += matrixA[i][k] * matrixB[k][j];
          }
          result[i].push(sum);
      }
  }
  return result;
}

function calculateKopaytma4x4() {
  const matrixA = getMatrixFromInputs("a");
  const matrixB = getMatrixFromInputs("b");

  const kopaytmaAB = kopaytma4x4(matrixA, matrixB);

  updateMatrixOutput(kopaytmaAB);
}

function getMatrixFromInputs(prefix) {
  let matrix = [];
  for (let i = 0; i < 4; i++) {
      matrix.push([]);
      for (let j = 0; j < 4; j++) {
          matrix[i].push(Number(document.getElementById(`${prefix}${i + 1}${j + 1}`).value));
      }
  }
  return matrix;
}

function updateMatrixOutput(matrix) {
  for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
          document.getElementById(`result${i}${j}`).textContent = matrix[i][j];
      }
  }
}
