function determinant3x3(matrix) {

    let determinat = matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) - matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) + matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0])

    return determinat
}

function calculateDeterminant() {
    const matrixA = [
        [Number(document.getElementById("a11").value), Number(document.getElementById("a12").value), Number(document.getElementById("a13").value)],
        [Number(document.getElementById("a21").value), Number(document.getElementById("a22").value), Number(document.getElementById("a23").value)],
        [Number(document.getElementById("a31").value), Number(document.getElementById("a32").value), Number(document.getElementById("a33").value)]
    ];

    const matrixB = [
        [Number(document.getElementById("b11").value), Number(document.getElementById("b12").value), Number(document.getElementById("b13").value)],
        [Number(document.getElementById("b21").value), Number(document.getElementById("b22").value), Number(document.getElementById("b23").value)],
        [Number(document.getElementById("b31").value), Number(document.getElementById("b32").value), Number(document.getElementById("b33").value)]

    ]

    const detA = determinant3x3(matrixA);
    const detB = determinant3x3(matrixB);

    document.getElementById("result__detirminatA").textContent = detA;
    document.getElementById("result__detirminatB").textContent = detB;
}

function yigindi3x3(matrixA, matrixB) {
    let yigindi = [
        [matrixA[0][0] + matrixB[0][0], matrixA[0][1] + matrixB[0][1], matrixA[0][2] + matrixB[0][2]],
        [matrixA[1][0] + matrixB[1][0], matrixA[1][1] + matrixB[1][1], matrixA[1][2] + matrixB[1][2]],
        [matrixA[2][0] + matrixB[2][0], matrixA[2][1] + matrixB[2][1], matrixA[2][2] + matrixB[2][2]]
    ]

    return yigindi
}

function calculateYigindi() {
    const matrixA = [
        [Number(document.getElementById("a11").value), Number(document.getElementById("a12").value), Number(document.getElementById("a13").value)],
        [Number(document.getElementById("a21").value), Number(document.getElementById("a22").value), Number(document.getElementById("a23").value)],
        [Number(document.getElementById("a31").value), Number(document.getElementById("a32").value), Number(document.getElementById("a33").value)]
    ];

    const matrixB = [
        [Number(document.getElementById("b11").value), Number(document.getElementById("b12").value), Number(document.getElementById("b13").value)],
        [Number(document.getElementById("b21").value), Number(document.getElementById("b22").value), Number(document.getElementById("b23").value)],
        [Number(document.getElementById("b31").value), Number(document.getElementById("b32").value), Number(document.getElementById("b33").value)]

    ]

    const yigindiAB = yigindi3x3(matrixA, matrixB);


    document.getElementById("result00").textContent = yigindiAB[0][0]
    document.getElementById("result01").textContent = yigindiAB[0][1]
    document.getElementById("result02").textContent = yigindiAB[0][2]
    document.getElementById("result10").textContent = yigindiAB[1][0]
    document.getElementById("result11").textContent = yigindiAB[1][1]
    document.getElementById("result12").textContent = yigindiAB[1][2]
    document.getElementById("result20").textContent = yigindiAB[2][0]
    document.getElementById("result21").textContent = yigindiAB[2][1]
    document.getElementById("result22").textContent = yigindiAB[2][2]

}

function ayirma3x3(matrixA, matrixB) {
    let ayirma = [
        [matrixA[0][0] - matrixB[0][0], matrixA[0][1] - matrixB[0][1], matrixA[0][2] - matrixB[0][2]],
        [matrixA[1][0] - matrixB[1][0], matrixA[1][1] - matrixB[1][1], matrixA[1][2] - matrixB[1][2]],
        [matrixA[2][0] - matrixB[2][0], matrixA[2][1] - matrixB[2][1], matrixA[2][2] - matrixB[2][2]]
    ]

    return ayirma
}

function calculateAyirma() {
    const matrixA = [
        [Number(document.getElementById("a11").value), Number(document.getElementById("a12").value), Number(document.getElementById("a13").value)],
        [Number(document.getElementById("a21").value), Number(document.getElementById("a22").value), Number(document.getElementById("a23").value)],
        [Number(document.getElementById("a31").value), Number(document.getElementById("a32").value), Number(document.getElementById("a33").value)]
    ];

    const matrixB = [
        [Number(document.getElementById("b11").value), Number(document.getElementById("b12").value), Number(document.getElementById("b13").value)],
        [Number(document.getElementById("b21").value), Number(document.getElementById("b22").value), Number(document.getElementById("b23").value)],
        [Number(document.getElementById("b31").value), Number(document.getElementById("b32").value), Number(document.getElementById("b33").value)]

    ]

    const ayirmaAB = ayirma3x3(matrixA, matrixB);

    document.getElementById("result00").textContent = ayirmaAB[0][0]
    document.getElementById("result01").textContent = ayirmaAB[0][1]
    document.getElementById("result02").textContent = ayirmaAB[0][2]
    document.getElementById("result10").textContent = ayirmaAB[1][0]
    document.getElementById("result11").textContent = ayirmaAB[1][1]
    document.getElementById("result12").textContent = ayirmaAB[1][2]
    document.getElementById("result20").textContent = ayirmaAB[2][0]
    document.getElementById("result21").textContent = ayirmaAB[2][1]
    document.getElementById("result22").textContent = ayirmaAB[2][2]

}

function kopaytma3x3(matrixA, matrixB) {
    let kopaytma = [
        [
            matrixA[0][0] * matrixB[0][0] + matrixA[0][1] * matrixB[1][0] + matrixA[0][2] * matrixB[2][0],
            matrixA[0][0] * matrixB[0][1] + matrixA[0][1] * matrixB[1][1] + matrixA[0][2] * matrixB[2][1],
            matrixA[0][0] * matrixB[0][2] + matrixA[0][1] * matrixB[1][2] + matrixA[0][2] * matrixB[2][2]
        ],
        [
            matrixA[1][0] * matrixB[0][0] + matrixA[1][1] * matrixB[1][0] + matrixA[1][2] * matrixB[2][0],
            matrixA[1][0] * matrixB[0][1] + matrixA[1][1] * matrixB[1][1] + matrixA[1][2] * matrixB[2][1],
            matrixA[1][0] * matrixB[0][2] + matrixA[1][1] * matrixB[1][2] + matrixA[1][2] * matrixB[2][2]
        ],
        [
            matrixA[2][0] * matrixB[0][0] + matrixA[2][1] * matrixB[1][0] + matrixA[2][2] * matrixB[2][0],
            matrixA[2][0] * matrixB[0][1] + matrixA[2][1] * matrixB[1][1] + matrixA[2][2] * matrixB[2][1],
            matrixA[2][0] * matrixB[0][2] + matrixA[2][1] * matrixB[1][2] + matrixA[2][2] * matrixB[2][2]
        ]
    ];

    return kopaytma;

}

function calculateKopaytma() {
    const matrixA = [
        [Number(document.getElementById("a11").value), Number(document.getElementById("a12").value), Number(document.getElementById("a13").value)],
        [Number(document.getElementById("a21").value), Number(document.getElementById("a22").value), Number(document.getElementById("a23").value)],
        [Number(document.getElementById("a31").value), Number(document.getElementById("a32").value), Number(document.getElementById("a33").value)]
    ];

    const matrixB = [
        [Number(document.getElementById("b11").value), Number(document.getElementById("b12").value), Number(document.getElementById("b13").value)],
        [Number(document.getElementById("b21").value), Number(document.getElementById("b22").value), Number(document.getElementById("b23").value)],
        [Number(document.getElementById("b31").value), Number(document.getElementById("b32").value), Number(document.getElementById("b33").value)]

    ]

    const kopaytmaAB = kopaytma3x3(matrixA, matrixB);

    document.getElementById("result00").textContent = kopaytmaAB[0][0]
    document.getElementById("result01").textContent = kopaytmaAB[0][1]
    document.getElementById("result02").textContent = kopaytmaAB[0][2]
    document.getElementById("result10").textContent = kopaytmaAB[1][0]
    document.getElementById("result11").textContent = kopaytmaAB[1][1]
    document.getElementById("result12").textContent = kopaytmaAB[1][2]
    document.getElementById("result20").textContent = kopaytmaAB[2][0]
    document.getElementById("result21").textContent = kopaytmaAB[2][1]
    document.getElementById("result22").textContent = kopaytmaAB[2][2]

}