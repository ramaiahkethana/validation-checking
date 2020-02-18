let ValidationChecking = require('./index')
let testUndefinedVariable = undefined
let testVariable = null
let emptyObject = {}

console.log(ValidationChecking.isUndefined(testUndefinedVariable)) // true
console.log(ValidationChecking.isNull(testUndefinedVariable)) // true
console.log(ValidationChecking.isUndefinedOrNull(testUndefinedVariable)) // true
console.log(ValidationChecking.isObjectEmpty(emptyObject)) // true