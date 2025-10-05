let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} × ${i} = ${num * i}`);
}

let toys = ["car 🚗", "train 🚂", "doll 🪆", "ball ⚽"];

for (let i = 0; i < toys.length; i++) {
  console.log(`Toy ${i + 1}: ${toys[i]}`);
}

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz 🎯");
  } else if (i % 3 === 0) {
    console.log("Fizz 🎵");
  } else if (i % 5 === 0) {
    console.log("Buzz 💥");
  } else {
    console.log(i);
  }
}
