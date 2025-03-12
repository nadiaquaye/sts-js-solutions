// 1. Print quote by John Holmes
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2. Print quote by Mother Teresa
console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."');

// 3. Check if typeof '10' is equal to 10
console.log(typeof '10' === typeof 10); // false
console.log(Number('10') === 10); // true

// 4. Check if parseFloat('9.8') is equal to 10
console.log(parseFloat('9.8') === 10); // false
console.log(Math.round(parseFloat('9.8')) === 10); // true

// 5. Check if 'on' is found in both python and jargon
console.log('python'.includes('on')); // true
console.log('jargon'.includes('on')); // true

// 6. Check if jargon is in the sentence
let sentence = 'I hope this course is not full of jargon';
console.log(sentence.includes('jargon')); // true

// 7. Generate random number between 0 and 100 inclusively
console.log(Math.floor(Math.random() * 101));

// 8. Generate random number between 50 and 100 inclusively
console.log(Math.floor(Math.random() * 51) + 50);

// 9. Generate random number between 0 and 255 inclusively
console.log(Math.floor(Math.random() * 256));

// 10. Access 'JavaScript' characters using random number
const jsString = 'JavaScript';
const randomIndex = Math.floor(Math.random() * jsString.length);
console.log(jsString[randomIndex]);

// 11. Print pattern using escape characters
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// 12. Extract "because because because" from sentence
const fullSentence = 'You cannot end a sentence with because because because is a conjunction';
const startIndex = fullSentence.indexOf('because');
const extractedPhrase = fullSentence.substring(startIndex, 'because because because'.length);
console.log(extractedPhrase);