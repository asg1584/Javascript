// Variables will be identified
// User will enter number to the window which will be enabled by prompt
// Variables will be assigned 
// Numbers will be written on console and website
// Numbers will be sorted

// Variables are identified
let data1 = 0;
let data2 = 0;
let temp = 0;

// Variables were identified

// Inputs start
data1 = prompt("Lutfen birinci sayiyi giriniz: ");
data2 = prompt("Lutfen birinci sayiyi giriniz: ");
// Inputs finish

// Inputs are shown on HTML- Start
document.getElementById("number1").innerText = "First Number: " + data1;
document.getElementById("number2").innerText = "Second Number: " + data2;
// Inputs are shown on HTML - Finish

//Inputs are shown on console -Start
console.log (data1);
console.log (data2);
//Inputs are shown on console -Finish

//SORT PROCESS - START
if (data2 > data1) {
    data1 = temp;
    data2 = data1;
    temp = data2;
}
//SORT PROCESS - END

//RESULT SECTION- START
document.getElementById('result').textContent = "Order of numbers: " + data1 + " > " + data2;
console.log ("Order of numbers: " + data1 + " > " + data2);
//RESULT SECTION- END