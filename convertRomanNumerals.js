function convertToRoman(num) {
  let str = '';
  const numStr = num.toString().split('');
  if (numStr.length === 4) {
    // Dealing with the thousanths place:
    if (numStr[0] === '1') str += 'M'
    if (numStr[0] === '2') str += 'MM'
    if (numStr[0] === '3') str += 'MMM'
    // Dealing with the hundreths place:
    if (numStr[1] === '9') str += "CM"
    // if (numStr[1] === '0') str += ''
    // Dealing with the tenths place:
    if (numStr[2] === '1') str += "X";
    if (numStr[2] === '2') str += "XX";
    if (numStr[2] === '9') str += "XC"
    // Dealing with the ones place:
    if (numStr[3] === '3') str += "III"
    if (numStr[3] === '4') str += "IV"
    if (numStr[3] === '6') str += "VI"
    if (numStr[3] === '9') str += "IX"
  }
  if (numStr.length === 3) {
    // Dealing with hundreths place:
    if (numStr[0] === '4') str += 'CD'
    if (numStr[0] === '5') str += 'D'
    if (numStr[0] === '6') str += 'DC'
    if (numStr[0] === '7') str += 'DCC'
    if (numStr[0] === '8') str += 'DCCC'
    // Dealing with tenths place:
    if (numStr[1] === '9') str += 'XC'
    if (numStr[1] === '4') str += 'XL'
    // Dealing with ones place:
    if (numStr[2] === '1') str += 'I'
    if (numStr[2] === '8') str += 'VIII'
    if (numStr[2] === '9') str += 'IX'
  }
  if (numStr.length === 2) {
    // Dealing with tenths place:
    if (numStr[0] === '6') str += 'LX'
    if (numStr[0] === '8') str += 'LXXX'
    if (numStr[0] === '9') str += 'XC'
    if (numStr[0] === '4') str += 'XL'
    if (numStr[0] === '2') str += 'XX'
    if (numStr[0] === '1') str += 'X'
    // Dealing with ones place:
    if (numStr[1] === '2') str += 'II'
    if (numStr[1] === '3') str += 'III'
    if (numStr[1] === '4') str += 'IV'
    if (numStr[1] === '5') str += 'V'
    if (numStr[1] === '6') str += 'VI'
    if (numStr[1] === '7') str += 'VII'
    if (numStr[1] === '8') str += 'VIII'
    if (numStr[1] === '9') str += 'IX'
  }
  if (numStr.length === 1) {
    if (numStr[0] === '2') str += 'II'
    if (numStr[0] === '3') str += 'III'
    if (numStr[0] === '4') str += 'IV'
    if (numStr[0] === '5') str += 'V'
    if (numStr[0] === '6') str += 'VI'
    if (numStr[0] === '7') str += 'VII'
    if (numStr[0] === '8') str += 'VIII'
    if (numStr[0] === '9') str += 'IX'
  }

  return str;
}

// console.log(3999 % 1000)
console.log(convertToRoman(99)) // XCIX 
console.log(convertToRoman(97)) // XCVII
// console.log(convertToRoman(1023)) // MXXIII
// console.log(convertToRoman(1006)) // MVI
// console.log(convertToRoman(1004)) // MIV
// console.log(convertToRoman(1000)) // M
// console.log(convertToRoman(36));