const sumNumbers = require("../units/sumNumbers")

describe("sumNumbers - unit tests", () => {
    describe("check undefined and null", () => {
        test("return 0 if no parameter is passed", () => {
            expect(sumNumbers()).toBe(0)
        })

        test("return 0 if no parameter is passed", () => {
            expect(sumNumbers(null)).toBe(0)
        })
    })

    describe("check array of numbers", () => {
        test("return num1 if one parameter is passed", () => {
            expect(sumNumbers(5)).toBe(5)
        })

        test("return sum if two parameters are passed", () => {
            expect(sumNumbers(1, 2)).toBe(3)
        })

        test("return sum if there parameters are passed", () => {
            expect(sumNumbers(1, 2, 3)).toBe(6)
        })
    })
})
