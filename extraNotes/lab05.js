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
    again = prompt('Calculate another MPG? (y or n)', 'y')
} while (again === 'y');
console.log('Thank you for using the MPG calculator.')
