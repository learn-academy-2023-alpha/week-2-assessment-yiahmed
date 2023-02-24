// ASSESSMENT 2: Coding Practical Questions with Jest

const { exportAllDeclaration } = require("@babel/types")
const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
// Pseudo code: Create a test for the function divisibleBy3 with the expected output of "15 is divisible by three", "0 is divisible by three", and "-7 is not divisible by three"
// Run test to see if function is not defined. If reference error appears that divisibleBy3 is not defined move onto the next step
// Create the function called divisibleBy3 that takes in an object as an argument and returns a string saying whether the number in the object is divisible by 3 or not.
describe("greeter", () => {
    it("returns a generic greeting", () => {
      expect(greeter()).toEqual("Hello, LEARN student!")
    })
  })

describe("divisibleBy3", () => {
    it("returns a string saying whether the number in the object is divisible by 3 or not.", () => {
        expect(divisibleBy3(object1)).toEqual("15 is divisible by three")
        expect(divisibleBy3(object2)).toEqual("0 is divisible by three")
        expect(divisibleBy3(object3)).toEqual("-7 is not divisible by three")

    })
})

// b) Create the function that makes the test pass.
const divisibleBy3 = (object) => {
    return object.number % 3 === 0 ? `${object.number} is divisible by three` : `${object.number} is not divisible by three`
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
