//seviye 100'den kucuk oldugu surece seviyeyi artiriyor
function functionDoldur() {
    if(seviye < 100){
        seviye++;
    }
    showLevel();
}

//seviye 0'dan buyuk oldugu surece azaltiyor
function functionBosalt() {
    if(seviye > 0){
        seviye--;
    }
    showLevel();    
}

//Pilin seviyesini ekranda gosteriyor ve pilin renkleri degisiyor
function showLevel(){
    if(seviye > 0 && seviye <= 11){
        bar3.style.background = "darkred";
        bar2.style.background = "white";
        bar1.style.background = "white";
    }
    else if(seviye > 11 && seviye <= 22){
        bar3.style.background = "red";
        bar2.style.background = "white";
        bar1.style.background = "white";
    }
    else if(seviye > 22 && seviye <= 33){
        bar3.style.background = "lightpink";
        bar2.style.background = "white";
        bar1.style.background = "white";
    }
    else if(seviye > 33 && seviye <= 44){
        bar3.style.background = "lightsalmon";
        bar2.style.background = "lightsalmon";
        bar1.style.background = "white";
    }
    else if(seviye > 44 && seviye <= 55){
        bar3.style.background = "orange";
        bar2.style.background = "orange";
        bar1.style.background = "white";
    }
    else if(seviye > 55 && seviye <= 66){
        bar3.style.background = "darkorange";
        bar2.style.background = "darkorange";
        bar1.style.background = "white";
    }
    else if (seviye > 66 && seviye <=77){
        bar3.style.background = "lightgreen";
        bar2.style.background = "lightgreen";
        bar1.style.background = "lightgreen";
    }
    else if (seviye > 66 && seviye <= 88){
        bar3.style.background = "green";
        bar2.style.background = "green";
        bar1.style.background = "green";
    }
    else if (seviye > 66 && seviye <= 100){
        bar3.style.background = "darkgreen";
        bar2.style.background = "darkgreen";
        bar1.style.background = "darkgreen";
    }
    else{
        bar3.style.background = "white";
        bar2.style.background = "white";
        bar1.style.background = "white";
    }

    seviyeLabel.innerText = "%" + seviye;
}