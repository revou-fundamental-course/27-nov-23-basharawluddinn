function calculateLuas() {
  var alas = parseFloat(document.getElementById('Alas').value);
  var tinggi = parseFloat(document.getElementById('Tinggi').value);

  if (validateLuasInput(alas, tinggi)) {
    var luas = calculateLuasValue(alas, tinggi);
    displayLuasResult(alas, tinggi, luas);
  } else {
    alert('Invalid input. Please enter valid values for Alas and Tinggi.');
  }
}

function validateLuasInput(alas, tinggi) {
  return alas > 0 && tinggi > 0;
}

function calculateLuasValue(alas, tinggi) {
  var luas = 0.5 * alas * tinggi;
  return luas % 1 === 0 ? luas.toString() : luas.toFixed(2).replace(/\.?0+$/, '');
}

function displayLuasResult(alas, tinggi, luas) {
  var resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '<h3>Hasil Perhitungan Luas:</h3>' + '<p>L = 1/2 * a * t</p>' + '<p>L = 1/2 * ' + alas + ' * ' + tinggi + '</p>' + '<p>L = ' + luas + ' cm</p>';
}

function resetLuasForm() {
  document.getElementById('Alas').value = '';
  document.getElementById('Tinggi').value = '';
  document.getElementById('result').innerHTML = '';
}

function calculateKeliling() {
  var sideA = parseFloat(document.getElementById('SideA').value);
  var sideB = parseFloat(document.getElementById('SideB').value);
  var sideC = parseFloat(document.getElementById('SideC').value);

  if (validateKelilingInput(sideA, sideB, sideC)) {
    var keliling = calculateKelilingValue(sideA, sideB, sideC);
    displayKelilingResult(sideA, sideB, sideC, keliling);
  } else {
    alert('Invalid input. Please enter valid values for Sisi A, Sisi B, and Sisi C.');
  }
}

function validateKelilingInput(sideA, sideB, sideC) {
  return sideA > 0 && sideB > 0 && sideC > 0 && sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA;
}

function calculateKelilingValue(sideA, sideB, sideC) {
  var keliling = sideA + sideB + sideC;
  return keliling % 1 === 0 ? keliling.toString() : keliling.toFixed(2).replace(/\.?0+$/, '');
}

function displayKelilingResult(sideA, sideB, sideC, keliling) {
  var resultDiv = document.getElementById('resultKeliling');
  resultDiv.innerHTML = '<h3>Hasil Perhitungan Keliling:</h3>' + '<p>K = S1 + S2 + S3</p>' + '<p>K = ' + sideA + ' + ' + sideB + ' + ' + sideC + '</p>' + '<p>K = ' + keliling + ' cm</p>';
}

function resetKelilingForm() {
  document.getElementById('SideA').value = '';
  document.getElementById('SideB').value = '';
  document.getElementById('SideC').value = '';
  document.getElementById('resultKeliling').innerHTML = '';
}

function showLuasForm() {
  document.getElementById('luasForm').style.display = 'block';
  document.getElementById('kelilingForm').style.display = 'none';
  resetKelilingForm();
}

function showKelilingForm() {
  document.getElementById('luasForm').style.display = 'none';
  document.getElementById('kelilingForm').style.display = 'block';
  resetLuasForm();
}

document.getElementById('resetLuas').addEventListener('click', resetLuasForm);
document.getElementById('resetKeliling').addEventListener('click', resetKelilingForm);
