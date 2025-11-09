// 1️⃣ What is an Array?
// An array stores multiple values in a single variable.

let fruits = ["apple","banana","mango"];
console.log("fruits:",fruits);

// 2️⃣ Access items (index starts at 0)

console.log("First fruit:",fruits[0]);
console.log("Second fruit:",fruits[1]);

// 3️⃣ Change an item

fruits[1]= "grapes";
console.log("after change",fruits);

// 4️⃣ Find array length

console.log("Total fruits:",fruits.length);

// 5️⃣ Add items

fruits.push("orange");
console.log("After push:",fruits)

fruits.unshift("kiwi");
console.log("After unshift:",fruits);

// 6️⃣ remove items

fruits.pop();
console.log("After pop:",fruits);

fruits.shift();
console.log("After shift:",fruits);

// 7️⃣ loops with arrays

let colors = ["red","green","blue"];
for (let i = 0; i < colors.length; i++){
    console.log("color:",colors[i])
}

// 8️⃣ modern loop (for...of)

for (let color of colors) {
  console.log("Color (modern):", color);
}

// 9️⃣ mixing data types

let randomThings = ["toy",10,true,"car" ];
console.log("Mixied Array:",randomThings);