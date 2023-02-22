const sayHello = require("../units/sayHello")

test("Test sayHello Function", () => {
    expect(sayHello()).toBe("Hello Saber")
})
