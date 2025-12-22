/*
Write a function that accepts a plain text password and returns the relative strength of the password based on the following criteria.

Types of Passwords:
- Weak Password: 0 - 2 points.
- Medium Password: 3 points.
- Strong Password: 4 points.
- Very Strong Password: 5 Points.

Criteria For Points:
- Length: 1 point if more than 10 characters
- Capital letters: 1 point if at least 1 capital letter is present
- Lowercase letters: 1 point if at least 1 lowercase letter is present
- Numbers: 1 point if at least 1 number is present
- Special characters: 1 point if any of the following characters are present: %, ^, &, *, (, ),
@, !, #, $ (i.e all the special characters accessible from the number keys 1, 2, 3, 4... etc)

Your function should return “weak”, “medium”, “strong” or “very strong” to classify the given password.
*/

function passwordStrength(password) {

    if (typeof password !== 'string') {
        throw new Error('password must be a string')
    }

    let points = 0
    const passwordTypes = {
        0: "weak",
        3: "medium",
        4: "strong",
        5: "very strong"
    }

    if (password.length > 10) points++
    if (/[A-Z]/.test(password)) points++
    if (/[a-z]/.test(password)) points++
    if (/[0-9]/.test(password)) points++
    if (/[!@#$%^&*()]/.test(password)) points++

    if (points < 3) {
        return passwordTypes[0]
    }

    return passwordTypes[points]
}

module.exports = { passwordStrength }