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

// Given a string, return true if the first instance of "x"
// in the string is immediately followed by another "x".

function doubleX(str) {
  let i = str.indexOf("x");
  const x = str.substring(i);
  console.log(x.startsWith("xx"));
  return x.startsWith("xx");
}

doubleX("axxbb");

// Given a string, return a new string made of every other char 
// starting with the first, so "Hello" yields "Hlo".

function stringBits(str) {
  let result = "";
  for (let i = 0; i < str.length; i += 2) {
    result += str.substring(i, i + 1);
  }
  console.log(result);
  return result;
}

stringBits("Hello");

// Given a non-empty string like "Code" return a string like "CCoCodCode".

function stringSplosion(str){
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str.substring(0, i + 1);
  }
  console.log(result);
  return result;
}

stringSplosion("Code");


// Given a string, return the count of the number of times that a substring
// length 2 appears in the string and also as the last 2 chars of the string, so
// "hixxxhi" yields 1 (we won't count the end substring).

function last2(str) {
  if (str.length < 2) {
    return 0;
  }
  let end = str.substring(str.length - 2);
  let count = 0;
  for (let i = 0; i < str.length - 2; i++) {
    let sub = str.substring(i, i + 2);
    if (sub === end) {
      count += 1;
    }
  }
  console.log(count);
  return count;
}

last2("hixxhi");

// Given an array of ints, return the number of 9's in the array.

function arrayCount9(nums) {
  let count = 0;
  return nums.filter(num => num === 9 ? console.log(count += 1) : console.log(count));
}

arrayCount9([1, 2, 3]);

// Given an array of ints, return true if one of the first 4 elements in the array is a 9.
// The array length may be less than 4.

function arrayFront9(nums) {
  let end = nums.length;
  if (end > 4) {
    end = 4;
  }
  for (let i = 0; i < end; i++) {
    if (nums[i] === 9) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}

arrayFront9([1, 2, 3, 4, 9]);

// Given an array of ints, return true if the sequence of numbers 1, 2, 3
// appears in the array somewhere.

function array123(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === 1 && nums[i + 1] === 2 && nums[i + 2] === 3) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}

array123([5, 4, 3, 1, 2, 2]);

// Given 2 strings, a and b, return the number of the positions where they 
// contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3,
// since the "xx" "xx", "aa", and "az" substrings appear in the same place 
// in both strings.

function stringMatch(a, b) {
  const len = Math.min(a.length, b.length);
  let count = 0;
  for (let i = 0; i < len - 1; i++) {
    const aSub = a.substring(i, i + 2);
    const bSub = b.substring(i, i + 2);
    if (aSub === bSub) {
      count += 1;
    }
  }
  console.log(count);
  return count;
}

stringMatch("xxcaazz", "xxbaaz");

// Given a string, return a version where all the "x" have been removed. 
// Except an "x" at the very start or end should not be removed.

function stringX(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!(i > 0 && i < str.length - 1 && str.substring(i, i + 1) === "x")) {
      result += str.substring(i, i + 1);
    }
  }
  console.log(result);
  return result;
}

stringX("x");

// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9
// ... so "kittens" yields "kien".

function altPairs(str) {
  let result = "";
  for (let i = 0; i < str.length; i += 4) {
    let end = i + 2;
    if (end > str.length) {
      end = str.length;
    }
    result += str.substring(i, end);
  }
  console.log(result);
  return result;
}

altPairs("kitten");

// Suppose the string "yak" is unlucky. Given a string, return a version where
// all the "yak" are removed, but the "a" can be any char. The "yak" strings
// will not overlap.

function stringYak(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (
      i + 2 < str.length &&
      str.charAt(i) === "y" &&
      str.charAt(i + 2) === "k"
    ) {
      i += 2;
    } else {
      result += str.charAt(i);
    }
  }
  console.log(result);
  return result;
}

stringYak("yakpak");

// Given an array of ints, return the number of times that two 6's are next to 
// each other in the array. Also count instances where the second "6" 
// is actually a 7.

function array667(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 6) {
      if (nums[i + 1] === 6 || nums[i + 1] === 7) {
        count += 1;
      }
    }
  }
  console.log(count);
  return count;
}

array667([6, 7, 2, 6]);

// Given an array of ints, we'll say that a triple is a value appearing 3 times
// in a row in the array. Return true if the array does not contain any triples.

function noTriples(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];
    if (nums[i + 1] === first && nums[i + 2] === first) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

noTriples([1, 1, 2, 2, 1]);

// Given an array of ints, return true if it contains a 2, 7, 1 pattern -- a value, 
// followed by the value plus 5, followed by the value minus 1. 
// Additionally the 271 counts even if the "1" differs by 
// 2 or less from the correct value.

function has271(nums) {
  for (let i = 0; i < nums.length - 2; i++) {
    var first = nums[i];
    if (nums[i + 1] === (first + 5) && Math.abs(nums[i + 2] - (first - 1)) <= 2) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}

has271([3, 8, 2]);
*/

function alsoHas271(nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i][0] == 2 || nums[i][1] == 7 || nums[i][2] == 1);
  }
}

alsoHas271([2, 7, 1]);