



//  I need to get the year from the user




let year = prompt("Dogum yilinizi yaziniz");

//  Define the years and horoscope.

const branch = ["Monkey", "Cock", "Dog", "Boar", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"];

const stem = ["Metal", "Metal", "Water", "Water", "Wood", "Wood", "Fire", "Fire", "Earth", "Earth"];


// When you dividde the years to 12, if remainder is 0, monkey is branch. Using the monkey as a reference, we will find other branchs.

function branchFinder (year){
    
    let branchFinder = year % 12;
    return (branch[year %12]);

}
// When you divide the years 10, if remainder is 0 or 1,  stem is metal. Using the metal as a reference, we will find other stems.
function stemFinder (year){
    
    let stemFinder = year % 10;
    return (stem[year % 10]);

}



let branchResult = (branchFinder (year));
let steamResult = (stemFinder(year));

console.log("Your branch is :" + branchResult);
console.log("Your steam is :" + steamResult);


