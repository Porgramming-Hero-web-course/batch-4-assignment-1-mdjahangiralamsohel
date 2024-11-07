"use strict";
{
    const countWordOccurrences = (sentence, word) => {
        const sentenceLowerCase = sentence.toLowerCase();
        const wordLowerCase = word.toLowerCase();
        const words = sentenceLowerCase.split(" ");
        const wordCount = words.filter((word) => word === wordLowerCase).length;
        return wordCount;
    };
    const result = countWordOccurrences("I love typescript", "typescript");
    console.log(result);
}
