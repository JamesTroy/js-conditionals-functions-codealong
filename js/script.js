// console.log('hello front 🔥 end 👋')
// falsy values in js
// null
// 0 
// -0
// undefined
// false
// NaN // there has been a problem with math 8 * 'q' = NaN
// // empty strings
// ''
// ""
// ``
// // truthy values
// true
// 1
// -1
// 'strings'
// "strings"
// `false` // truthy
// {}
// []

let truthy = undefined

// if(truthy) {
//   console.log(`${truthy} is true!`)
// } else {
//   console.log(`${truthy} is not true!`)
// }

// comparisons
// loose equality ==
// strict equality ===
// not equal to !== (strict)
// loose not equals !=
// greater than 8 > 6
// less than <
// greater than or equal to >= <=

// if(8 != 8){
//   console.log('math still works! 🙌')
// } else {
//   console.log('its not working!')
// }

// const grade = 97

// if(grade >= 90) {
//   console.log('you got an A!')
// } else if (grade >= 80) {
//   console.log('you got a B!')
// } else if (grade >= 70) {
//   console.log('you got a C')
// } else {
//   console.log('you need to spend some time in study hall!')
// }

// const grade = 'A'

// switch(grade) {
//   case 'A':
//     console.log('you got an A!')
//     break
//   case 'B':
//     console.log('you gat a B!')
//     break
//   case 'C':
//     console.log('you got a C!')
//     break
//   default: // defualts should handle errors
//     console.log('i would handle the unexpected case')
//     break
// }

// one liner ifs
// if(grade > 95) console.log('WOW GREAT JOB!')

// conjunctions -- check two conditions at once
// && -- and means both must be true
// || -- or either expression must be true

// if('Nick' && 8 > 9) console.log('nick is true and so is the comparison!')

// if('Anna' || false) console.log('Anna is true or the expression is true')

// reverse the boolean with a ! before it
// inverse truthiness
// if(!false) console.log('not false!')

// FUNCTIONS

// named functions
function greet() {
  console.log('hello! how are you feeling?')
}

// hey, run all the code that is in the named function
// greet()
// greet()
// greet()
// greet()
// greet()
// greet()
// greet()
// greet()

// function parameters -- like let or var variables
// function complimentMachine(person) {
//   console.log(`wow ${person} I love your haircut! lookin good 👍`)
// }

function complimentMachine(person) {
  return `wow ${person} I love your haircut! lookin good 👍` 
}

// invoke the function -- 'Nick' is the argument
const complimentNick = complimentMachine('Nick')
console.log(complimentNick)

console.log(complimentMachine('Anna'))

// return values -- multiple parameters
// two numbers in -- one number out
function sum(numberOne, numberTwo) {
  const calculation = numberOne + numberTwo
  return calculation
}

const returnValue = sum(5, 3)

console.log(returnValue)

// anonoymous functions

// arrow functions
const sayHello = () => {
  console.log('hello from an arrow function!')
}

sayHello()

// anon functions
let anonFun = function() {
  console.log('hello from an anonymous function!')
}

anonFun()

// SCOPE

/* I AM IN THE GLOBAL SCOPE */
let globalVar = 'hi im in the global scope!'

// this funciton is a sibling to globalVar
function sharingIsCaring() {
  console.log(globalVar)
}

sharingIsCaring()

function teamworkMakesTheDreamwork() {
  globalVar = 'i got changed by a function!'
}

teamworkMakesTheDreamwork()
console.log(globalVar)
// sharingIsCaring()
// sharingIsCaring()

// locally scoped variables
function selfish() {
  let localScope = 'you cant get me!'
}

selfish()
console.log(localScope)