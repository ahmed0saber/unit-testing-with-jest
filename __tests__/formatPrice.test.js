const formatPrice = require("../units/formatPrice")

describe("test formatPrice function", () => {
    test("if price is undefined", () => {
        expect(formatPrice(undefined, "EGP")).toBe("0.00 EGP")
    })

    test("if both price and unit are undefined", () => {
        expect(formatPrice()).toBe("0.00 EGP")
    })

    test.only("if unit has spaces", () => {
        expect(formatPrice(49.99, " USD ")).toBe("49.99 USD")
    })
})
