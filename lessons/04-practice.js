let age = 20;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log(" you are too young to vote");
}

let money = 51;

if (money >= 50) {
  console.log(" You can buy icecream 🍦");
} else {
  console.log(" Not enough money 😢");
}

let score = 91;

if (score >= 90) {
  console.log(" A 🎉 ");
} else if (score >= 75) {
  console.log(" B 😎 ");
} else if (score >= 50) {
  console.log(" C 👍 ");
} else {
  console.log(" Fail ❌ ");
}

let day = "Saturday";

switch (day) {
  case "monday":
    case "tuesday":
        case "Wednesday":
            case "Thursday":
            case "Fridaay":
    console.log("School Day 📚");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend 🎉");
    break;
  default: {
    console.log("Not a vaild day❓");
  }
}

let temperature = 15;

if (temperature >= 30) {
  console.log("It's hot ☀️");
} else if (temperature >= 20) {
  console.log("Nice weather 🌤");
} else  {
  console.log("It's cold ❄️");
}
