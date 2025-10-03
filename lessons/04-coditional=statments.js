let age = 10;

if (age >= 18){
    console.log("You can vote 🗳")
}else {
     console.log("You are too young to vote ❌")
}


let marks = 78;

if (marks >= 90){
     console.log("Grade A 🏆")
}else if (marks >= 75){
    console.log("Grade B 👍")
}else if ( marks >= 50){
    console.log("Grade C  🙂")
}else {
    console.log("fail ❌")
}

let day = "Saturday";

switch (day) {
    case "monday":
    console.log("Start of week 😴");
    break;
    case "friday" :
        console.log("Almost weekend 😎")
        break;
     case "Saturday" :
        case "sunday" :
            console.log("Weekend 🎉"); 
            break;
            default:
                console.log("normal Day");

};
