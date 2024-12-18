function calculateAverage(arr) {
    let sum = 0;
    let count = 0;
    for (let element of arr) {
        if (typeof element === 'number' && !isNaN(element)) {
            sum += element;
            count++;
        }
    }
    return count === 0 ? 0 : sum / count;
}
const array = [1, NaN, 12, '123', 2, null, { a: 10 }];
const average = calculateAverage(array);
console.log(average);