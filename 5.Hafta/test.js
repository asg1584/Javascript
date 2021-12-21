/* 
    Programin yapmasi beklenen islemler:
        1- Tum parcalar bir array olarak alinir, yeni format icin bos yeni array tanimlanir
        2- Array'deki tum parca isimleri buyuk harfli olacak sekilde donusturulur
        3- Array'deki tum parca isimleri tersinden yazili olacak sekilde donusturulur
        4- Array'deki tum parca isimlerinin basina "KEREMAG_" eklenir
        5- Array'deki tum parca isimlerinin sonuna sisteme giris tarihi eklenir.
        6- Yeni array istenen formatta yazdirilir / sisteme girilir / kullaniciya dondurulur vs....  
*/

// Yedek parcalarin tutuldugu array
let parts = ["Kaporta5", "Ak3ü",  "Stop Lambasi", "Radyatör 21", "Karbüratör 42", "Tekerlek", "3 AYNA", "Jant"];
let newParts = [];

//Parca isimleri büyük harflere cevrilecektir.
newParts = setUpercase(parts);

//Parca isimlerinden sayilar cikartilacaktir.
newParts = subtracNumbers(newParts);

//Parca isimleri tersine cevrilecektir.
newParts = getReverse(newParts);

//Her parcanin basina KEREMAG_ eklenecektir.
newParts = addName(newParts);

//Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)
newParts = addDate(newParts);

//Formata uygun haldeki yeni array consola yazdiriliyor
newParts.forEach(element => {
    console.log(element);
});



/* ALL FUNCTIONS */
//UpperCase
function setUpercase(array) {
    return array.map(element => element.toUpperCase().trim());
}

//Subtract numbers
function subtracNumbers(array) {
    return array.map(function replaceElement(element) {
        return element.replace(/[0-9]/g, "").trim();
    });
}

//Parca isimleri tersine cevrilecektir.
function getReverse(array) {
    return array.map(element => element.split("").reverse().join(""));
}

//Her parcanin basina KEREMAG_ eklenecektir.
function addName(array) {
    return array.map(element => "KEREMAG_".concat(element));
}

//Her parcanin sonuna ise parcanin sisteme girildigi tarih eklenecektir. (Date nesnesini kullanarak tarih ve saat konulmasi yeterlidir)
function addDate(array) {
    let dateTime = new Date('2021-12-15 10:00');
    return array.map(element => element.concat(" " + dateTime));
}