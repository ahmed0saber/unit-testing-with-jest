const validateEmail = require("../units/validateEmail")

describe("validate email address", () => {
    test.skip("check a not valid email", () => {
        expect(validateEmail("ahmed")).toBe(false)
    })

    test("check a valid email", () => {
        expect(validateEmail("ahmed0saber33@gmail.com")).toBe(true)
    })
})
