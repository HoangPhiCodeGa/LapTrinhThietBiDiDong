let Johnmass = 92;
let Johnheight = 1.95;

let Markmass = 78;
let Markheight = 1.69;

let JohnBMI = Johnmass / (Johnheight * Johnheight);
let MarkBMI = Markmass / (Markheight * Markheight);

let higherBMI = JohnBMI > MarkBMI;

console.log("John's BMI: " + JohnBMI);
console.log("Mark's BMI: " + MarkBMI);

console.log("Is John's BMI higher than Mark's? " + higherBMI);