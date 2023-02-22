const validateEmail = (email) => {
    const EMAIL_PATTERN = /^[a-z]\w{2,}@\w{2,}\.\w{2,}$/

    return EMAIL_PATTERN.test(email)
}

module.exports = validateEmail
