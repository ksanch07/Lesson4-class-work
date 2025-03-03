//All of lab 5 with added validation below the code
let miles
let gallons
let mpg
let again = 'y'

do {
    miles = parseFloat(prompt('Enter miles driven'))
    gallons = parseFloat(prompt('Enter gallons used'))
    if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
        mpg = miles / gallons
        console.log(`Miles per gallon: ${mpg.toFixed(2)} miles per gallon`)
    }
    else {
        alert('Invalid entry. Please enter a number.')
    }
    do {
      again = prompt('Calculate another MPG? (y or n)', 'y').toLowerCase();
    // validating the entry
    }  while (again !== 'y' && again !== 'n');
    } while (again === 'y');
console.log('Thank you for using the MPG calculator.')

//All of lab 6 with added validation below the code
let futureValue
let investment
let rate
let years

// collect values from user WITH NEW VALIDATION
do {
    investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
    if (isNaN(investment) || investment <= 0) {
        alert('Invalid entry. Please enter a dollar amount for the investment amount.');
    }
} while (isNaN(investment) || investment <= 0);

do {
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    if (isNaN(rate) || rate <= 0 || rate > 6) {
        alert('Invalid entry. Please enter a number between 0 and 6 for the interest rate.');
    }
} while (isNaN(rate) || rate <= 0 || rate > 6);

do {
    years = parseInt(prompt('Enter number of years'), 10);
    if (isNaN(years) || years < 1 || years > 30) {
        alert('Invalid entry. Please enter a number between 1 and 30 for the number of years.');
    }
} while (isNaN(years) || years < 1 || years > 30);


//perform calculations
futureValue = investment
for (let i = 1; i <= years; i++) {
    //futureValue = futureValue + (futureValue * rate / 100)
    futureValue += futureValue * (rate / 100)

}

//display results
document.write(`<h1>Future Value Calculator</h1>`)
document.write(`Investment amount: $${investment.toFixed(2)}<br>`)
document.write(`Interest rate: ${rate}%<br>`)
document.write(`Years: ${years}<br>`)
document.write(`Future value: $${futureValue.toFixed(2)}`)