
let candies = 25;
let friends = 4 ;
console.log("Each friend gets:", candies / friends);
console.log("leftover candies:",candies % friends);
Math.floor(candies / friends);

let firstName = "Rudved";
let lastName = "Reddy";
console.log(`My name is ${firstName} ${lastName}`);

let myMarks = 78;
let passMark = 40;
console.log("Pass:",myMarks>=40);

let homeworkDone = true;
let roomClean = true;
console.log("Can I play?",homeworkDone && roomClean);


let day1 = "sunday";
console.log("Is it weekend?", day1 === "saturday" || day1 === "sunday");


let myMoney = 40;
let day = "sunday";

if (myMoney >= 50 && (day === "saturday" || day === "sunday")) {
  console.log("Yay! I can buy ice cream 🍦");
} else {
  console.log("No ice cream today 😢");
}
