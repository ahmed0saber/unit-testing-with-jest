const formatPrice = (price = 0, unit = "EGP") => {
    return `${price.toFixed(2)} ${unit.trim()}`
}

module.exports = formatPrice
