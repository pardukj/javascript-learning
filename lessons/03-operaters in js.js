let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);
console.log(a ** b);

let x = 5;
console.log("initial value of x =", x);
x += 3;
console.log("after operation x += 3 x = ", x);
x -= 2;
console.log("after operation x -= 2 x = ", x);
x *= 2;
console.log("after operation x *= 2 x = ", x);
x /= 3;
console.log("after operation x /= 3 x = ", x);
x %= 3;
console.log("after operation x %= 3 x = ", x);


let p = 10, q = "10";

console.log(p == q);
console.log(p === q);
console.log(p != q);
console.log(p !== q);
console.log(p > q);
console.log(p < q);
console.log(p >= q);
console.log(p <= q);

let age = 20;

console.log(age > 18 && age < 30);
console.log(age > 25 || age < 18);
console.log(!(age > 18));

let n = 5;

console.log(++n);
console.log(n++);

console.log(--n);
console.log(n--);

let firstName = "Johon";
let lastName = "Doe";

console.log(firstName + " " + lastName);
console.log("Hello",123);