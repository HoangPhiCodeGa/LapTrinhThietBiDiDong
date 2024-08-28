let Johnmass = 85;
let Johnheight = 1.76;

let Markmass = 95;
let Markheight = 1.88;

let JohnBMI = Johnmass / (Johnheight * Johnheight);
let MarkBMI = Markmass / (Markheight * Markheight);

let higherBMI = JohnBMI > MarkBMI;

if (higherBMI)
    console.log("John's BMI " + JohnBMI + "is higher than Mark's " + MarkBMI);
else
    console.log("Mark's BMI " + MarkBMI + "is higher than John's " + JohnBMI);