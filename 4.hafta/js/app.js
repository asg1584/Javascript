//Pilin seviye bilgisini tutmak icin bu degisken tanimlandi
let seviye = 0;

//Doldur butonuna tiklandiginda  "functionDoldur" fonsiyonu cagiriliyor yani pilin seviyesi artiriliyor
doldurBtn.addEventListener("click", functionDoldur);

//Bosalt butonuna tiklandiginda  "functionBosalt" fonsiyonu cagiriliyor yani pilin seviyesi azaltiliyor
bosaltBtn.addEventListener("click", functionBosalt);