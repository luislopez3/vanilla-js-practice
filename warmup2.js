/*
// Given a string and a non-negative int n, return a larger string that is n
// copies of the original string.

function stringTimes(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str;
  }
  console.log(result);
  return result;
}

stringTimes("Hi", 2);

// Given a string and a non-negative int n, we'll say that the front of the
// string is the first 3 chars, or whatever is there if the string is less than
// length 3. Return n copies of the front.

function frontTimes(str, n) {
  const frontLen = 3;
  if (frontLen > str.length) {
    frontLen = str.length;
  }
  let front = str.substring(0, frontLen);
  let result = "";
  for (let i = 0; i < n; i++) {
    result += front;
  }
  console.log(result);
  return result;
}

frontTimes("Chocolate", 2);

// Count the number of 'xx' in the given string.
// We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.

function countXX(str) {
  let result = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str.substring(i, i + 2) === "xx") {
      result += 1;
    }
  }
  console.log(result);
  return result;
}

countXX("abcxxxx");
*/

// Given a string, return true if the first instance of "x" 
// in the string is immediately followed by another "x".

function doubleX(str) {
  
}
