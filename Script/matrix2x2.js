function calculateDeterminant() {
  let a11 = parseFloat(document.getElementById('a11').value);
  let a12 = parseFloat(document.getElementById('a12').value);
  let a21 = parseFloat(document.getElementById('a21').value);
  let a22 = parseFloat(document.getElementById('a22').value);

  let b11 = parseFloat(document.getElementById('b11').value);
  let b12 = parseFloat(document.getElementById('b12').value);
  let b21 = parseFloat(document.getElementById('b21').value);
  let b22 = parseFloat(document.getElementById('b22').value);

  let detA = (a11 * a22) - (a12 * a21);
  let detB = (b11 * b22) - (b12 * b21);

  document.getElementById('result__detirminatA').innerText = detA;
  document.getElementById('result__detirminatB').innerText = detB;
}

function calculateYigindi() {
  let a11 = parseFloat(document.getElementById('a11').value);
  let a12 = parseFloat(document.getElementById('a12').value);
  let a21 = parseFloat(document.getElementById('a21').value);
  let a22 = parseFloat(document.getElementById('a22').value);

  let b11 = parseFloat(document.getElementById('b11').value);
  let b12 = parseFloat(document.getElementById('b12').value);
  let b21 = parseFloat(document.getElementById('b21').value);
  let b22 = parseFloat(document.getElementById('b22').value);

  let sum11 = a11 + b11;
  let sum12 = a12 + b12;
  let sum21 = a21 + b21;
  let sum22 = a22 + b22;

  document.getElementById('result11').innerText = sum11;
  document.getElementById('result12').innerText = sum12;
  document.getElementById('result21').innerText = sum21;
  document.getElementById('result22').innerText = sum22;
}

function calculateAyirma() {
  let a11 = parseFloat(document.getElementById('a11').value);
  let a12 = parseFloat(document.getElementById('a12').value);
  let a21 = parseFloat(document.getElementById('a21').value);
  let a22 = parseFloat(document.getElementById('a22').value);

  let b11 = parseFloat(document.getElementById('b11').value);
  let b12 = parseFloat(document.getElementById('b12').value);
  let b21 = parseFloat(document.getElementById('b21').value);
  let b22 = parseFloat(document.getElementById('b22').value);

  let diff11 = a11 - b11;
  let diff12 = a12 - b12;
  let diff21 = a21 - b21;
  let diff22 = a22 - b22;

  document.getElementById('result11').innerText = diff11;
  document.getElementById('result12').innerText = diff12;
  document.getElementById('result21').innerText = diff21;
  document.getElementById('result22').innerText = diff22;
}

function calculateKopaytma() {
  let a11 = parseFloat(document.getElementById('a11').value);
  let a12 = parseFloat(document.getElementById('a12').value);
  let a21 = parseFloat(document.getElementById('a21').value);
  let a22 = parseFloat(document.getElementById('a22').value);

  let b11 = parseFloat(document.getElementById('b11').value);
  let b12 = parseFloat(document.getElementById('b12').value);
  let b21 = parseFloat(document.getElementById('b21').value);
  let b22 = parseFloat(document.getElementById('b22').value);

  let prod11 = (a11 * b11) + (a12 * b21);
  let prod12 = (a11 * b12) + (a12 * b22);
  let prod21 = (a21 * b11) + (a22 * b21);
  let prod22 = (a21 * b12) + (a22 * b22);

  document.getElementById('result11').innerText = prod11;
  document.getElementById('result12').innerText = prod12;
  document.getElementById('result21').innerText = prod21;
  document.getElementById('result22').innerText = prod22;
}
