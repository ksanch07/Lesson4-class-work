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

// do while loop will always execute at least once