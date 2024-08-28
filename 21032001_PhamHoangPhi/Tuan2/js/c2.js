function calcTip(gt) {
    if (gt >= 50 && gt <= 300) {
        return gt * 0.15;
    }
    return gt * 0.2;

}
var bills = [125, 555, 44];
var tips = bills.map(calcTip);

var total = bills.map((value, index) => value + tips[index]);
console.log('bills ' + bills);
console.log('tips ' + tips);
console.log('total ' + total);