let paras = document.querySelectorAll(".info");
console.log(paras)

for ( let i = 0; i < paras.length; i++){
    paras[i].textContent = "updated paragraph" + (i + 1);
}

for (let i = 0; i < paras.length; i++){
paras[i].style.color = "red";
paras[i].style.fontSize = "25px";
paras[i].style.background = "yellow";
}

let button = document.getElementById("colorBtn");


button.addEventListener("click", function() {
    for (let i = 0; i < paras.length; i++) {
        paras[i].style.color = "green";
        
    }
});



