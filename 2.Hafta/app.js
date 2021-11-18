let variable1 = 1111;
let variable2 = true;
let variable3 = 'SALIH GUNES'
let variable4 = 900719925124740999n;


console.log('1. degisken tipi: ' + typeof variable1);
document.getElementById('variable-1').textContent='1. degisken tipi: ' + typeof variable1;

console.log('2. degisken tipi: ' + typeof variable2);
document.getElementById('variable-2').textContent='2. degisken tipi: ' + typeof variable2;

console.log('3. degisken tipi: ' + typeof variable3);
document.getElementById('variable-3').textContent='3. degisken tipi: ' + typeof variable3;

console.log('4. degisken tipi: ' + typeof variable4);
document.getElementById('variable-4').textContent='4. degisken tipi: ' + typeof variable4;

function myFunction() {
    document.getElementById('input-text').textContent='Girilen metin: ' + document.querySelector('input').value;
    console.log('Girilen metin: ' + document.querySelector('input').value);
}