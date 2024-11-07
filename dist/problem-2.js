"use strict";
{
    const removeDuplicates = (numbers) => {
        const result = numbers.filter((num, index) => numbers.indexOf(num) === index);
        return result;
    };
    const output = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(output);
}
