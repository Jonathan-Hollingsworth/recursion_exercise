/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1

  return nums[i] * product(nums, i+1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  if (i === words.length) return 0

  return Math.max(words[i].length, longest(words, i+1))
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0) {
  if (i === str.length) return ''
  if (i > 0 && i%2 !== 0) return '' + everyOther(str, i+1)

  return str[i] + everyOther(str, i+1)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  const endIdx = str.length - 1

  function _isPalindrome(str, i=0) {
    if (i === str.length) return true

    if(str[i] !== str[endIdx - i]) return false

    return true && _isPalindrome(str, i+1)
  }

  return _isPalindrome(str)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  let idxOfVal = -1

  function _findIdx(arr, val, i=0){
    if (i === arr.length) return
    if (arr[i] === val) {
      idxOfVal = i
      return
    }
    _findIdx(arr, val, i+1)
  }

  _findIdx(arr, val)
  return idxOfVal
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  let reversed = ''

  function _revString(str, i){
    if (i < 0) return ''
    reversed += str[i]
    _revString(str, i-1)
  }

  _revString(str, str.length-1)
  return reversed
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const strings = []

  function _gatherStrings(obj) {
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        _gatherStrings(obj[key])
      } else if (typeof obj[key] === "string") {
        strings.push(obj[key])
      }
    }
  }

  _gatherStrings(obj)
  return strings
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
  let idxOfVal = -1

  function _binarySearch(arr, val, leftIdx=0, rightIdx=arr.length-1) {
    const middleIdx = Math.floor((leftIdx + rightIdx) / 2)
    let middleVal = arr[middleIdx];

    if(leftIdx > rightIdx) return

    if (middleVal > val) {
      _binarySearch(arr, val, leftIdx, middleIdx - 1)
    } else if (middleVal < val) {
      _binarySearch(arr, val, middleIdx + 1, rightIdx)
    } else {
      idxOfVal = middleIdx
    }
  }

  _binarySearch(arr,val)
  return idxOfVal
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
