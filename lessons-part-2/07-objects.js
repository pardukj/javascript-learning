let student = {
    name:"Pardu",
    age : 9,
    grade : "4th",
    likesCoding: true
};

console.log(student.name);
console.log(student.age);

student.hobby = "Drawing";
console.log(student);

delete student.hobby;
console.log(student);
