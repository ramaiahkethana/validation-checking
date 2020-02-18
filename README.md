# validation-checking: a validation checking library

**Note:** This is module will work in both client side and server side

## Installing

```
npm i validation-checking
```

## Dependencies

No dependencies

## Usage
### Checking given variable is any one of undefined or null
```js
    const testVariable = null
    const result = ValidationChecking.isUndefinedOrNull(testVariable)

    console.log(result) // true
```

### Checking given object is empty or not
```js
    const emptyObject = {}
    const result = ValidationChecking.isObjectEmpty(emptyObject)

    console.log(result) // true
```

### Checking given variable is undefined or not
```js
    const testUndefinedVariable = undefined
    const result = ValidationChecking.isUndefined(testUndefinedVariable)

    console.log(result) // true
```

### Checking given variable is null or not
```js
    const testNullVariable = null
    const result = ValidationChecking.isNull(testUndefinedVariable)

    console.log(result) // true
```
