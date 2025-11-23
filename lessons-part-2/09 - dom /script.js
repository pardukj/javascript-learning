let title = document.getElementById("title");
let message = document.getElementById("message");
let button = document.getElementById("btn");

title.textContent = "DOM is Fun! 😁";
let buttonClicked =
button.addEventListener("click",function (){
    message.textContent = "You clicked th button! 🎉";
});;

title.style.color = "blue";
button.textContent = "Press Again";

message.textContent = "clicked once";

message.style.fontSize = " 30px";

if (buttonClicked = true){
    document.body.style.backgroundColor = " orange";

};
