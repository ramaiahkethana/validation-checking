#validation-checking

> A validation checking library

[![npm version][npm-version-image]][npm-version-url]
[![coverage][coverage-image]][coverage-url]
[![js-standard-style][js-standard-style-img]][js-standard-style-url] 

**Note:** This is module will work in both client side and server side

## Installing

```
npm i validation-checking
```

## Dependencies

No dependencies

## Usage
### Object, undefined and null validation
```js
    const ValidationChecking = require('validation-checking')

    ValidationChecking.isObjectEmpty({}) // true
    ValidationChecking.isObjectEmpty({ a: 1 }) //false

    ValidationChecking.isObjectUndefinedOrNullOrEmpty(null) // true
    ValidationChecking.isObjectUndefinedOrNullOrEmpty({ a: 1 }) // false

    ValidationChecking.isUndefinedOrNull(null) // true
    ValidationChecking.isUndefinedOrNull('testString') // false

    ValidationChecking.isUndefined(undefined) // true
    ValidationChecking.isUndefined('testString') // false

    ValidationChecking.isNull(null) // true
    ValidationChecking.isNull('testString') // false
```

### Data types validation
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

[npm-version-image]:https://badge.fury.io/js/validation-checking.svg
[npm-version-url]:https://badge.fury.io/js/validation-checking
[coverage-image]:https://coveralls.io/repos/github/christyram99/validation-checking/badge.svg?branch=master
[coverage-url]:https://coveralls.io/github/christyram99/validation-checking?branch=master
[js-standard-style-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[js-standard-style-url]: http://standardjs.com/