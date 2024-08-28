const avg = (a, b, c) => (a + b + c) / 3;

let avgDolphins = avg(44, 23, 71);
let avgKoalas = avg(65, 54, 49);

let avgDolphins2 = avg(85, 54, 41);
let avgKoalas2 = avg(23, 34, 27);


function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }
}
console.log('check winner v1');
checkWinner(avgDolphins, avgKoalas);
console.log('-------------------');
console.log('check winner v2');
checkWinner(avgDolphins2, avgKoalas2);