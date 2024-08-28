const mark = {
    fullName: 'Mark Miller',
    mass: 78, // kg
    height: 1.69, // meters
};

const john = {
    fullName: 'John Smith',
    mass: 92, // kg
    height: 1.95, // meters
};

var bmi = function(value, height) {
    return value / (height ** 2);
};

const markBMI = bmi(mark.mass, mark.height);
const johnBMI = bmi(john.mass, john.height);

if (markBMI > johnBMI) {
    console.log(`${mark.fullName}'s BMI (${markBMI}) is higher than ${john.fullName}'s (${johnBMI})!`);
} else if (johnBMI > markBMI) {
    console.log(`${john.fullName}'s BMI (${johnBMI}) is higher than ${mark.fullName}'s (${markBMI})!`);
} else {
    console.log(`Both ${mark.fullName} and ${john.fullName} have the same BMI (${markBMI})!`);
}