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

if(grade >= 90) {
  console.log('you got an A!')
} else if (grade >= 80) {
  console.log('you got a B!')
} else if (grade >= 70) {
  console.log('you got a C')
} else {
  console.log('you need to spend some time in study hall!')
}

const grade = 'A'

switch(grade) {
  case 'A':
    console.log('you got an A!')
    break
  case 'B':
    console.log('you gat a B!')
    break
  case 'C':
    console.log('you got a C!')
    break
  default: // defualts should handle errors
    console.log('i would handle the unexpected case')
    break
}

// one liner ifs
if(grade > 95) console.log('WOW GREAT JOB!')

// conjunctions -- check two conditions at once
// && -- and means both must be true
// || -- or either expression must be true

if('Nick' && 8 > 9) console.log('nick is true and so is the comparison!')

if('Anna' || false) console.log('Anna is true or the expression is true')

// reverse the boolean with a ! before it
// inverse truthiness
if(!false) console.log('not false!')

