// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
// console.log(cohort.split(""))

// a) Your answer: The line of code above will log "Alpha 202"3 but with all characters split into a new array. These characters now become become values of the new array and are all separated by quotation marks. The reason they are separated by quotation marks is because that is the specified parameter in the .spilt() method.
// b) Verify and explain: The code above logged a new array with all characters from the "Alpha 2023" string split up into a new array. The .split() method  was given the parameter ("") so that each character now turned value of the new array would be separated by quotation marks.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: The line of code above will log "Hello, LEARN Student" because the was the given parameter in the greeter function. Parameters are place holders for any value that would be specified in the parentheses of the function when it is being called. In this case name is the placeholder and when the function is called the specified parameter is "LEARN Student" thus replacing ${name} with LEARN Student. String interpolation is used in the function meaning any value specified when the function is being called will be outputted as a string.
// b) Verify and explain: The code above logged actually logged undefined and the reason for this because there is no return statement. The return statement tells the function what to output but without a return statement, even if the logic is sound, will only return undefined.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: The line of code above will log each number from the original multipliedByTwo but multiplied by two. The map method (a higher order function) will run the logic within is parentheses ((parameter) => logic) and out put the results in a new array with each new value in the same place as the previous value in the multipliedByTwo array. The result will be [ 8, 10, 12, 14, 16 ].
// b) Verify and explain: The line of code above logged an array with each number multiplied by two. The map method will run its logic that is specified within its parentheses (parameter) => logic) and out put the results into a new array.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: The line of coed above will return a new array containing only odd numbers. The filter method (higher order function) is called on the the array with its logic ((parameter) => logic) stating return the value into a new array if the following is true: number is not evenly divisible by two. number is this case is each value of the array since the filter method iterates through the entire array just like a loop. The result will be [11, 13, 15].
// b) Verify and explain: The line of code above logged only the odd numbers from the onlyOdds array into a new array. The filter method ran its logic and filtered out all the odd number (numbers that weren't evenly divisible by two) and returned them into a new array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: The line of code above will log the value "JavaScript". The reason for this is because the myCodingSkills object is followed by a dot notation and the specified key, languages. This key holds an array as its value and within that array are the values "JavaScript" and "Ruby". The languages key in the line above is followed by brackets containing the index of 0. Arrays are zero indexed meaning the first value of the array will start with the index of 0. The will select and return the value "JavaScript" from that array.
// b) Verify and explain: The line of code above logged the value "Javascript". The object myCodingSkills key, languages, was specified using dot notation and then the index of the array within the languages key was specified. The 0 index for the arrays "Javascript" thus Javascript was returned.
