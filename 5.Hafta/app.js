
// Prepare the animal list
// The customer wants only the halal animals
// Create a variable for total halal animal legs
// With for loop filter the halal animals
// With if condition Calculate each of type of the animals' legs
// Write total legs of halal animals on console





let animals = ["inek", "inek", "tavuk", "domuz", "inek", "domuz", "koyun", "koyun", "tavuk"];

let halalLegsSum = 0;
for (let index = 0; index < animals.length; index++) {
    if(animals[index] == "inek"||animals[index] == "koyun"){
        halalLegsSum += 4;
    } if(animals[index] == "tavuk"){
        halalLegsSum += 2;
    } if(animals[index] == "domuz"){
        continue;
    }

}

console.log("Halal legs ready to give :" + halalLegsSum);



// I wanted to solve it in a different way, i found that


// let animals = ["inek", "inek", "tavuk", "domuz", "inek", "domuz", "koyun", "koyun", "tavuk"];

// let halalLegsSum = 0;
// for (let index = 0; index < animals.length; index++) {
//     if(animals.indexOf("inek")) {
//         halalLegsSum += 4;
//     } if(animals.indexOf("tavuk")){
//         halalLegsSum += 2;
//     } if(animals[index] == "domuz"){
//         continue;
//     }

// }

// console.log("Halal legs ready to give :" + halalLegsSum);