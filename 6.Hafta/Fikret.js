
const incomeStatement = [15000, 2000, 1000, 300, 200, "important electronic", 600, 79, "abo", 342, "printer", 450, 32, 45, "fitness", 64, 10, 23, 12, 2, 56, 7]

// Seperated letters from arrays
const seperatingLetters = incomeStatement.filter(item=> Number.isInteger(item));
// Write the arrays without letters to the console

console.log(seperatingLetters);
// Biggest number is income. Divide it and find the spendings. 
const spendings = seperatingLetters.slice(1, 17);
const income = 15000;
// Write the arrays without income to the console
console.log("spendings :" + spendings);

// Find the total of spendings

let totalSpendings = 0;
const reducer = function (accumulator, item) {
    return accumulator + item;
};

const sum = spendings.reduce(reducer, totalSpendings);
console.log("Total Spendings ", sum);

const companySupport = sum * 0.20;
console.log("company Support :" + companySupport);

const butce = income - sum + companySupport;
console.log("hesaptaki para : " + butce);

