// Q1 Declare a variable named challenge and assign it a value
let challenge = '30 Days Of JavaScript';

//Q2 Print the string to the console
console.log(challenge);

//Q3 Print the length of the string
console.log(challenge.length);

// Q4 Change all characters to uppercase
console.log(challenge.toUpperCase());

//Q5 Change all characters to lowercase
console.log(challenge.toLowerCase());

//Q6 Cut out the first word using substr() or substring()
console.log(challenge.substr(3));  // Using substr()
console.log(challenge.substring(3)); // Using substring()

//Q7 Slice out 'Days Of JavaScript' from '30 Days Of JavaScript'
console.log(challenge.slice(3));

//Q8 Check if the string contains 'Script'
console.log(challenge.includes('Script'));

//Q9 Split the string into an array
console.log(challenge.split(''));

//Q10 Split the string at spaces
console.log(challenge.split(' '));

//Q11 Split 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' at the comma
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(', '));

//Q12 Replace 'JavaScript' with 'Python'
console.log(challenge.replace('JavaScript', 'Python'));

//Q13 Get the character at index 15
console.log(challenge.charAt(15));

// Q14 Get the character code of 'J'
console.log(challenge.charCodeAt(challenge.indexOf('J')));

//Q15 Find the first occurrence of 'a'
console.log(challenge.indexOf('a'));

//Q16 Find the last occurrence of 'a'
console.log(challenge.lastIndexOf('a'));

//Q17 Sentence for 'because' occurrences
let sentence = 'You cannot end a sentence with because because because is a conjunction';

//Q18 Find first occurrence of 'because'
console.log(sentence.indexOf('because'));

//Q19 Find last occurrence of 'because'
console.log(sentence.lastIndexOf('because'));

//Q20 Find 'because' using search()
console.log(sentence.search('because'));

//Q21 Trim whitespace from ' 30 Days Of JavaScript '
let trimmedString = ' 30 Days Of JavaScript ';
console.log(trimmedString.trim());

//22 Check if the string starts with '30 Days Of JavaScript'
console.log(challenge.startsWith('30 Days Of JavaScript'));

//23 Check if the string ends with 'JavaScript'
console.log(challenge.endsWith('JavaScript'));

//24 Find all occurrences of 'a' using match()
console.log(challenge.match(/a/g));

//25 Merge '30 Days of' and 'JavaScript' using concat()
console.log('30 Days of '.concat('JavaScript'));

//25 Repeat the string 2 times
console.log(challenge.repeat(2));
