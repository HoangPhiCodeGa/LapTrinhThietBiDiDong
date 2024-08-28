let DolphinsScore = [97, 112, 101];
let KoalasScore = [109, 95, 106];

let DolphinsAverage = (DolphinsScore[0] + DolphinsScore[1] + DolphinsScore[2]) / 3;
let KoalasAverage = (KoalasScore[0] + KoalasScore[1] + KoalasScore[2]) / 3;

console.log("DolphinsAverage: " + DolphinsAverage + " KoalasAverage: " + KoalasAverage);

if (DolphinsAverage > KoalasAverage && DolphinsAverage >= 100) {
    console.log("Dolphins win the trophy 🏆");
} else if (KoalasAverage > DolphinsAverage && KoalasAverage >= 100) {
    console.log("Koalas win the trophy 🏆");
} else if (DolphinsAverage === KoalasAverage && DolphinsAverage >= 100 && KoalasAverage >= 100) {
    console.log("Both win the trophy 🏆");
} else {
    console.log("No one wins the trophy 🏆");
}