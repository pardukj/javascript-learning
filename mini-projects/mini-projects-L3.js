let num1 = 20;
let num2 = 5;

let operater = "*";

let result;

if (operater === "+") {
  result = num1 + num2;
} else if (operater === "-") {
  result = num1 - num2;
} else if (operater === "*") {
  result = num1 * num2;
} else if (operater === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  } else {
    result = "❌ Cannot divide by 0 ";
  }
} else if (operater === "%") {
  result = num1 % num2;
}else{
    result = "❌ invaild operater";
}

console.log(`${num1} ${operater} ${ num2}= ${result}`);

