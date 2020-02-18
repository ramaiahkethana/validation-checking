/**
 * Check whether given variable is null or not
 * @param {*} variable
 */
function isNull (variable) {
  return variable === null
}

/**
 * Check whether given variable is undefined or not
 * @param {*} variable
 */
function isUndefined (variable) {
  return variable === undefined
}

/**
 * Function to check given variable is either null or undefined
 * @param {*} variable
 */
function isUndefinedOrNull (variable) {
  return isUndefined(variable) || isNull(variable)
}

/**
 * Function to check given object is either null or empty
 * @param {*} obj
 */
function isObjectNullOrEmpty (obj) {
  return isNull(obj) || isObjectEmpty(obj)
}

/**
 * Function to check given object is either undefined or null or empty
 * @param {*} obj
 */
function isObjectUndefinedOrNullOrEmpty (obj) {
  return isUndefined(obj) || isNull(obj) || isObjectEmpty(obj)
}

/**
 * Check whether given object is empty or not
 * @param {*} obj
 */
function isObjectEmpty (obj) {
  return Object.keys(obj).length === 0
}

/**
 * Check whether given array has any empty element or not
 * @param {Array} arr an array
 */
function isAnyElementEmpty (arr) {
  let check = false
  arr.forEach(el => {
    if (isUndefinedOrNull(el)) {
      check = true
    }
  })

  return check
}

/**
 * Check whether given array has any empty element or not
 * @param {Array} arr an array
 */
function isAllElementsNonEmpty (arr) {
  let check = true
  for (let index = 0; index < arr.length; index++) {
    if (isUndefinedOrNull(arr[index])) {
      check = false
      break
    }
  }

  return check
}

function isAllElementsEmpty (arr) {
  let check = true
  for (let index = 0; index < arr.length; index++) {
    if (!isUndefinedOrNull(arr[index])) {
      check = false
      break
    }
  }

  return check
}

module.exports = {
  isNull,
  isUndefined,
  isObjectEmpty,
  isAnyElementEmpty,
  isUndefinedOrNull,
  isObjectNullOrEmpty,
  isObjectUndefinedOrNullOrEmpty,
  isAllElementsNonEmpty,
  isAllElementsEmpty,
}