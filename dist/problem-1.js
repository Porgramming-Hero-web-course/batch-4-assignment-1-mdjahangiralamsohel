"use strict";
{
    const sumArray = (numbers) => {
        let sum = 0;
        numbers.forEach((num) => (sum += num));
        return sum;
    };
    const total = sumArray([1, 2, 3, 4, 5]);
    console.log(total);
}
