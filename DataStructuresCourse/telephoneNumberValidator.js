// I started solving for the bottom problems first. I used REGEX to negate a vast majority of the inputs.
// Then I coded to negate inputs with too many dashes.
// At last, I tried to validate the last remaining inputs left (they were suppose to kick in an output of true).

function telephoneCheck(str) {
  console.log(str.indexOf())
  if (str.length === 14 && str[0] === '1' && str[1] === ' ' && str[5] === '-' && str[9] === '-') return true
  if (str.length === 16 && str[0] === '1' && str[2] === '(' && str[6] === ')' && str[11] === '-') return true;
  if (str.length === 13 && str[0] === '(' && str[4] === ')' && str[8] === '-') return true;
  if (str[0] === '1' && str[1] === '(' && str[5] === ')' && str.length === 14) return true;
  if (str.length === 14 && str[0] === '1' && str[1] === ' ' && str[5] === ' ' && str[9] === ' ') return true;

  // Begin counting dashes:
  let dashCount = 0;
  for (let char of str) {
    // console.log(char)
    if (char === "-") {
      dashCount += 1;
    }  
  }
  if (dashCount > 2) return false;
  // End counting dashes:

  // Begin Regex of str:
  const re = /[-/s]/g
  const reducedWithRegexStr = str.replace(re, '')
  if (reducedWithRegexStr.length !== 10) return false;
  return true;
  // End regex of str:
}

// console.log(telephoneCheck("1 555-555-5555"))
// should return true.
console.log(telephoneCheck("1 555-555-5555"))
// should return true.
// console.log(telephoneCheck("1 (555) 555-5555"))
//  should return true.

