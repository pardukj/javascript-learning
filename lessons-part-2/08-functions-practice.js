function greet(name){
console.log("hello " + name);
}

greet("rudved");
greet("pardu");


function add(a,b) {
    return a + b;

}

 console.log(add(10,5));


 function area(length) {
    return length * length;
 }

 console.log(area(4));


function fullname(a,b ){
        return a + b;
    
}

console.log(add("pardu ","reddy"));


function marks(input){
    if (input >= 40){
        return "pass"
    } else {
        return "fail"
    }
}
let result = marks(10);
console.log("result :", result);

// challenge

function totalBill(price,quantity){
    let total = price * quantity;
     console.log(`Item costs ${price} and quantity is ${quantity}. Total bill = ${total}`);
     return price * quantity; 
}

console.log(totalBill(50,3));
