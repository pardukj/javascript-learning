//project 1

let myName = "Pardu";
let homeworkDone = true;
let subjects = 3;

// console.log(myName + " has done " + subjects + " subjects" + " homeworkDone =  " + homeworkDone);

console.log(`${myName} has done ${subjects} subjects. Homework done: ${homeworkDone} `);
//  project 2
let apple = 5;
let banana = 12;
let pomegranate = 4;

console.log("apple:", apple);
console.log("banana:", banana);
console.log("pomegranate:", pomegranate);

// project 3

let toy1 = "monkey";
let toy2 = "aeroplane";

console.log("Before swap → toy1:", toy1, "toy2:", toy2);

/* let temp = toy1;
toy1 = toy2;
toy2 = temp; */
[toy1, toy2] = [toy2, toy1];
console.log("After swap → toy1:", toy1, "toy2:", toy2);
//project 4

let pocketMoney = 100;

pocketMoney += 50;
pocketMoney -= 30;
console.log("total money left=", pocketMoney);

//project 5

let nothing;
console.log("money", nothing);
nothing = null;
console.log("money", nothing);

// challenge question

let startMoney = 1000;
let earnPerWeek = 300;
let spendPerWeek = 100;

let total = 4 * (startMoney + earnPerWeek - spendPerWeek);

console.log("total left=", total);
