function customFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}



function customSome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return true;
        }
    }
    return false;
}

function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

function customReduce(array, callback, initialValue) {
    let accumulator = initialValue === undefined ? array[0] : initialValue;
    const start = initialValue === undefined ? 1 : 0;

    for (let i = start; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

function customFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
    return undefined;
}




const numbers = [1, 2, 3, 4, 5];

// Ví dụ sử dụng customFilter
const evens = customFilter(numbers, num => num % 2 === 0);
console.log(evens); // [2, 4]

// Ví dụ sử dụng customSome
const hasEven = customSome(numbers, num => num % 2 === 0);
console.log(hasEven); // true

// Ví dụ sử dụng customMap
const doubles = customMap(numbers, num => num * 2);
console.log(doubles); // [2, 4, 6, 8, 10]

// Ví dụ sử dụng customReduce
const sum = customReduce(numbers, (acc, num) => acc + num, 0);
console.log(sum); // 15

// Ví dụ sử dụng customFind
const firstEven = customFind(numbers, num => num % 2 === 0);
console.log(firstEven); // 2