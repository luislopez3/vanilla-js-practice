/*
let numbers = "1 2 -3 4 5";

function highAndLow(numbers) {
    let number = numbers.split(" ");
    console.log(`${Math.max(...number)} ${Math.min(...number)}`)
    return `${Math.max(...number)} ${Math.min(...number)}`;
}

highAndLow(numbers);


let words = "4of Fo1r pe6ople g3ood th5e the2";

function order(words) {
    if (words.length === 0) return " ";
    let word = words.split(' ').map((char) => {
        if (char.includes(1)) {
            return char;
        }
    })
    console.log(word);
}

order(words);


// Given a string, return a new string where the first and last chars have been exchanged.
const str = 'code';

function frontBack(str) {
    if (str.length <= 1) return str;
    const center = str.substring(1, str.length - 1);
    console.log (str.charAt(str.length - 1) + center + str.charAt(0));
    return str.charAt(str.length - 1) + center + str.charAt(0);
}

frontBack(str);


// Given a string, we'll say that the front is the first 3 chars of the string. 
// If the string length is less than 3, the front is whatever is there. 
// Return a new string which is 3 copies of the front.
const str = 'Chocolate';

function front3(str) {
    const word = str.slice(0, 3);
    console.log(word + word + word);
    return word;
}

front3(str);


// Given a string, take the last char and return a new string
// with the last char added at the front and back, 
// so 'cat' yields 'tcatt' The original string will be length 1 or more.
const str = 'cat'

function backAround(str) {
    const backAdd = str.charAt(str.length - 1);
    const word = str.split();
    console.log(backAdd + word + backAdd)
}

backAround(str);

// Return true if the given non-negative number is a multiple of 3 or a multiple of 5.
const n = 8;

function or35(n) {
    const remainder3 = n % 3;
    const remander5 = n % 5;
    if (remainder3 === 0 || remander5 === 0) {
        console.log(true);
        return true;
    }
    else {
        console.log(false)
        return false;
    }
}

or35(n);


// Given a string, take the first 2 chars and return the string 
// with the 2 chars added at both the front and back, 
// so 'kitten' yields 'kikittenki' chars are there.
const str = 'kitten';

function front22(str) {
    const firstLtr = str.charAt(0);
    const secondLtr = str.charAt(1);
    const word = str.split();
    console.log(firstLtr + secondLtr + word + firstLtr + secondLtr);
}

front22(str);


// Given a string, return true if the string starts with 'hi'and false otherwise
const str = 'hi there';

function startHi(str) {
    console.log(str.indexOf('hi') === 0 ? true : false);
    return str.indexOf('hi') === 0 ? true : false;
}

startHi(str);


// Given two temperatures, return true if one is less than 0 and the other is greater than 100.
const temp1 = 120;
const temp2 = -1;

function icyHot(temp1, temp2) {
    console.log(temp1 > 100 && temp2 < 0 || temp2 > 100 && temp1 < 0 ? true : false);
    return temp1 > 100 && temp2 < 0 || temp2 > 100 && temp1 < 0 ? true : false;
}

icyHot(temp1, temp2);

// We'll say that a number is 'teen' if it is in the range 13..19 inclusive. 
// Given 3 int values, return true if 1 or more of them are teen.
const a = 12;
const b = 1;
const c = 15;

function hasTeen(a, b, c) {
    const teenNo = [13, 14, 15, 16, 17, 18, 19]
    if (teenNo.includes(a) || teenNo.includes(b) || teenNo.includes(c)) {
        console.log(true);
        return true;
    }
    else {
        console.log(false);
        return false;
    }
}

hasTeen(a, b, c);


// We'll say that a number is 'teen' if it is in the range 13..19 inclusive. 
// Given 2 int values, return true if one or the other is teen, but not both.

function loneTeen(a, b) {
    const teenNo = [13, 14, 15, 16, 17, 18, 19];
    if (teenNo.includes(a) && teenNo.includes(b) || a === b) {
        console.log(false);
        return false;
    }
    else {
        console.log(true);
        return true;
    }
}

loneTeen(13, 11);


// Given a string, if the string "del" appears starting at index 1,
// return a string where that "del" has been deleted.
// Otherwise, return the string unchanged.

function delDel(str) {
  if (str.length >= 4 && str.substring(1, 4).includes("del")) {
    console.log(str.substring(0, 1) + str.substring(4));
    return str.substring(0, 1) + str.substring(4);
  }
  console.log(str);
  return str;
}

delDel("adelHello");


// Return true is the given string begins with 'mix',
// except the 'm' can be anything, so 'pix' and '9ix' should return 'true'

function mixStart(str) {
  (str.charAt(1) === "i") & (str.charAt(2) === "x")
    ? console.log(true)
    : console.log(false);
}

mixStart("pi snacks");


// Given a string, return a string made of the first 2 chars
// (if present), however include first char only if it is 'o'
// and include the second only if it is 'z', so 'ozymandias' yields 'oz'.

function startOz(str) {
  if (str.charAt(0) === "o" & str.charAt(1) === "z") {
    console.log("oz");
  } else if (str.charAt(0) === "o") {
    console.log("o");
  } else if (str.charAt(1) === "z") {
    console.log("z");
  } else {
    console.log('');
  }
}

startOz('abc')


// Given three int values, a b c, return the largest.

function intMax(a, b, c) {
  if (a > b) {
    max = a;
  } else {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  console.log(max);
}

intMax(2, 2, 10);

// Given 2 int values, return whichever value is nearest
// to the value 10, or return 0 in the event of a tie.
// Note that Math.abs(n) returns the absolute value of a number.

function close10(a, b) {
  let aValue = Math.abs(a - 10);
  let bValue = Math.abs(b - 10);

  if (aValue < bValue) {
    console.log(a);
  }
  if (bValue < aValue) {
    console.log(b);
  } else {
    console.log(0);
  }
}

close10(13, 7);

// Given 2 int values, return true if they are both in the range 30..40 inclusive,
// or they are both in the range 40..50 inclusive.

function in3050(a, b) {
  if (a >= 30 && a <= 40 && b >= 30 && b <= 40) {
    console.log(true);
    return true;
  }
  if (a >= 40 && a <= 50 && b >= 40 && b <= 50) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

in3050(40, 51);

// Given 2 positive int values, return the larger value that is in the range
// 10..20 inclusive, or return 0 if neither is in that range.

function max1020(a, b) {
  if (b > a) {
    const temp = a;
    a = b;
    b = temp;
  }
  if (a >= 10 && a <= 20) {
    console.log(a);
    return a;
  }
  if (b >= 10 && b <= 20) {
    console.log(b);
    return b;
  } else {
    return 0;
  }
}

max1020(10, 21);

// Return true if the given string contains between 1 and 3 'e' chars.

function stringE(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === "e") {
      count++;
    }
  }
  console.log(count >= 1 && count <= 3);
  return count >= 1 && count <= 3;
}

stringE("Heeeello");

// Given two non-negative int values, return true if they have the same last
// digit, such as with 27 and 57. Note that the % 'mod' operator computes
// remainders, so 17 % 10 is 7.

function lastDigit(a, b, c) {
  console.log(a % 10 === b % 10);
  return a % 10 === b % 10;
}

lastDigit(6, 17)

// Given a string, return a new string where the last 3 chars are now in upper
// case. If the string has less than 3 chars, uppercase whatever is there.
// Note that str.toUpperCase() returns the uppercase version of a string.

function endUp(str) {
  if (str.length <= 3) {
    console.log(str.toUpperCase());
    return str.toUpperCase();
  }
  let cut = str.length - 3;
  let front = str.substring(0, cut);
  let back = str.substring(cut);
  console.log(front + back.toUpperCase());
  return front + back.toUpperCase();
}

endUp("Hello");
*/

// Given a non-empty string and an int N, return the string made starting with
// char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6,
// ... and so on. N is 1 or more.

function everyNth(str, n) {
  let result = "";
  for (let i = 0; i < str.length; i += n) {
    result += str.charAt(i);
  }
  console.log(result);
  return result;
}

everyNth("Miracle", 2);
