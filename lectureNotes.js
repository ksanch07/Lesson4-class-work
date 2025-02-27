// car buying interest calc
let loanAMount = parseFloat(prompt('Enter the amount you would like to borrow'))
for (let i = 1; i <= 5; i++) { 
    loanAMount= loanAMount + (loanAMount * 5.9/100) 
    } 
console.log(`Total loan amount: $${loanAMount.toFixed(2)}`)

// while loop. helps make it so that the prompt will keep asking until the user enters a number between 1 and 10, rather than error
let num
while (true) {
num = parseInt(prompt('Enter a number between 1 and 10'))
if (num >= 1 && num <= 10) {
break
} else {
console.error('Number must be between 1 and 10.')
        }
}
console.log(`%c${num} is between 1 and 10.`, `color:yellow;font-size:1.2em;`)

// do while loop will always execute at least once, executes first then checks condition
let num
let again = 'y'
do {
num = parseInt(prompt('Guess a number between 1 and 10'))
if (num !== 5) {
alert(`${num} was not the correct number`)
} else {
alert(`${num} was the right number!`)
}
again = prompt('Play again? (y or n)', 'y')
} while (again === 'y')
alert('Thank you for playing.')

// nested loop while and break -- only really need break in while true
let totalScore = 0, score
for (let i = 1; i <= 3; i++) {
while (true) {
score = parseInt(prompt('Enter test score'))
if (score >= 0 && score <= 100) {
totalScore += score
break
} else {
console.error('Test score must be between 0 and 100.')
}
}
}
console.log(`Total score: ${totalScore}`)
// optional average
// console.log(`Average score: ${totalScore/3}`)

//for in loop for objects 
let car = {
make: 'Toyota',
model: 'Camry',
year: 2021
}
for (let key in car) {
console.log(`${key}: ${car[key]}`)
}       

//for in loop for arrays
let person
let people = ['Zak', 'Sally', 'Mary', 'Fred']
for (person in people) {
console.log(`${people[person]}`)}

//for of loop for arrays
let people = ['Zak', 'Sally', 'Mary', 'Fred']
for (let person of people) {
console.log(`${person}`)}   

// this is the same as the above, but with additional let person, seems not needed
let person
let people = ['Zak', 'Sally', 'Mary', 'Fred']
for (person of people) {
console.log(`${person}`)}