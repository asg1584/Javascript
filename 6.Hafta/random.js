//We need to get a random result from "groupList". Write a code for it.


const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];

let randomGroup = groupList[Math.floor(Math.random() * groupList.length)];

console.log("grup ismi " + randomGroup);

//We need to get a random result from "personalList". Write a code for it.

const personalList = ["Bowie", "Boyd", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Conner", "Connolly", "Fauzaan", "Favour", "Fawaz", "Fawkes", "Connor", "Aayan", "Bracken", "Brad"]

let randomPersonal = personalList[Math.floor(Math.random() * personalList.length)];


console.log("sahis ismi " + randomPersonal);

//We need to get a random result for 2 array together. Write a code for it.

console.log("together :" + randomPersonal + randomGroup);




