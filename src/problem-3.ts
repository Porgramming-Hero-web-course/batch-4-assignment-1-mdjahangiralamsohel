// Problem-3: Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

{
  const countWordOccurrences = (sentence: string, word: string): number => {
    const sentenceLowerCase = sentence.toLowerCase();
    const wordLowerCase = word.toLowerCase();
    const words = sentenceLowerCase.split(" ");

    const wordCount = words.filter((word) => word === wordLowerCase).length;

    return wordCount;
  };

  const result = countWordOccurrences("I love typescript", "typescript");
  console.log(result);
}
