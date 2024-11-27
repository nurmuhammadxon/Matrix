function determinant2x2(matrix) {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
}

function calculateDeterminant() {
  const matrixA = [
    [Number(document.getElementById("a11").value), Number(document.getElementById("a12").value)],
    [Number(document.getElementById("a21").value), Number(document.getElementById("a22").value)]
  ];

  const matrixB = [
    [Number(document.getElementById("b11").value), Number(document.getElementById("b12").value)],
    [Number(document.getElementById("b21").value), Number(document.getElementById("b22").value)]
  ];

  const detA = determinant2x2(matrixA);
  const detB = determinant2x2(matrixB);

  document.getElementById("result__detirminatA").textContent = detA;
  document.getElementById("result__detirminatB").textContent = detB;
}

function yigindi2x2(matrixA, matrixB) {
  return [
    [matrixA[0][0] + matrixB[0][0], matrixA[0][1] + matrixB[0][1]],
    [matrixA[1][0] + matrixB[1][0], matrixA[1][1] + matrixB[1][1]]
  ];
}

function calculateYigindi() {
  const matrixA = [
    [Number(document.getElementById("a11").value), Number(document.getElementById("a12").value)],
    [Number(document.getElementById("a21").value), Number(document.getElementById("a22").value)]
  ];

  const matrixB = [
    [Number(document.getElementById("b11").value), Number(document.getElementById("b12").value)],
    [Number(document.getElementById("b21").value), Number(document.getElementById("b22").value)]
  ];

  const yigindiAB = yigindi2x2(matrixA, matrixB);

  document.getElementById("result00").textContent = yigindiAB[0][0];
  document.getElementById("result01").textContent = yigindiAB[0][1];
  document.getElementById("result10").textContent = yigindiAB[1][0];
  document.getElementById("result11").textContent = yigindiAB[1][1];
}

function ayirma2x2(matrixA, matrixB) {
  return [
    [matrixA[0][0] - matrixB[0][0], matrixA[0][1] - matrixB[0][1]],
    [matrixA[1][0] - matrixB[1][0], matrixA[1][1] - matrixB[1][1]]
  ];
}

function calculateAyirma() {
  const matrixA = [
    [Number(document.getElementById("a11").value), Number(document.getElementById("a12").value)],
    [Number(document.getElementById("a21").value), Number(document.getElementById("a22").value)]
  ];

  const matrixB = [
    [Number(document.getElementById("b11").value), Number(document.getElementById("b12").value)],
    [Number(document.getElementById("b21").value), Number(document.getElementById("b22").value)]
  ];

  const ayirmaAB = ayirma2x2(matrixA, matrixB);

  document.getElementById("result00").textContent = ayirmaAB[0][0];
  document.getElementById("result01").textContent = ayirmaAB[0][1];
  document.getElementById("result10").textContent = ayirmaAB[1][0];
  document.getElementById("result11").textContent = ayirmaAB[1][1];
}

function kopaytma2x2(matrixA, matrixB) {
  return [
    [
      matrixA[0][0] * matrixB[0][0] + matrixA[0][1] * matrixB[1][0],
      matrixA[0][0] * matrixB[0][1] + matrixA[0][1] * matrixB[1][1]
    ],
    [
      matrixA[1][0] * matrixB[0][0] + matrixA[1][1] * matrixB[1][0],
      matrixA[1][0] * matrixB[0][1] + matrixA[1][1] * matrixB[1][1]
    ]
  ];
}

function calculateKopaytma() {
  const matrixA = [
    [Number(document.getElementById("a11").value), Number(document.getElementById("a12").value)],
    [Number(document.getElementById("a21").value), Number(document.getElementById("a22").value)]
  ];

  const matrixB = [
    [Number(document.getElementById("b11").value), Number(document.getElementById("b12").value)],
    [Number(document.getElementById("b21").value), Number(document.getElementById("b22").value)]
  ];

  const kopaytmaAB = kopaytma2x2(matrixA, matrixB);

  document.getElementById("result00").textContent = kopaytmaAB[0][0];
  document.getElementById("result01").textContent = kopaytmaAB[0][1];
  document.getElementById("result10").textContent = kopaytmaAB[1][0];
  document.getElementById("result11").textContent = kopaytmaAB[1][1];
}
