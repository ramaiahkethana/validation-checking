# validation-checking: a validation checking library

**Note:** This is module will work in both client side and server side

## Installing

```
npm i validation-checking
```

## Dependencies

No dependencies

## Usage
### Object related validation
#### Object is empty or not checking
```js
    const ValidationChecking = require('validation-checking')

    const emptyObject = {}
    const result = ValidationChecking.isObjectEmpty(emptyObject)

    console.log(result) // true
```

#### Object is undefined or null or empty checking
```js
    const ValidationChecking = require('validation-checking')

    const emptyObject = null
    const result = ValidationChecking.isObjectUndefinedOrNullOrEmpty(emptyObject)

    console.log(result) // true
```

### Variable related validation
#### Undefined or Null checking
```js
    const ValidationChecking = require('validation-checking')

    const testVariable = null
    const result = ValidationChecking.isUndefinedOrNull(testVariable) // true
```


#### Undefined variable checking
```js
    const ValidationChecking = require('validation-checking')

    const testUndefinedVariable = undefined
    const result = ValidationChecking.isUndefined(testUndefinedVariable) // true
```

#### Null variable checking
```js
    const ValidationChecking = require('validation-checking')

    const testNullVariable = null
    const result = ValidationChecking.isNull(testUndefinedVariable) // true
```

### Data types checking
```js
    const ValidationChecking = require('validation-checking')

    // number
    ValidationChecking.isNumber(5) // true
    ValidationChecking.isNumber('testString') // false

    // boolean
    ValidationChecking.isBoolean(false) // true
    ValidationChecking.isBoolean('testString') // false

    // string
    ValidationChecking.isString('testString') // true
    ValidationChecking.isString(5) // false

    // array
    ValidationChecking.isArray([1, 2]) // true
    ValidationChecking.isArray('testString') // false

    // object
    ValidationChecking.isObject({ testKey: 'testValue' }) // true
    ValidationChecking.isObject('testString') // false
```