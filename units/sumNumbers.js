const sumNumbers = (...numbers) => {
    return numbers.reduce((prev, curr) => prev + curr, 0)
}

module.exports = sumNumbers
