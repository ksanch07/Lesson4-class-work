//global variables
let futureValue
let investment
let rate
let years

// collect values from user
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'))
rate = parseFloat(prompt('Enter interest rate as xx.x'))
years = parseInt(prompt('Enter number of years'))

//should validate the values here to make sure correct format and area

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
//console.log(`Investment amount: $${investment.toFixed(2)}`)
