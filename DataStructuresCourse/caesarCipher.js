function rot13(str) {
  const newCharCodeArr = [];
  for (let i=0; i<str.length; i++) {
    let newCharCode = str.charCodeAt(i) + 13;
    console.log(newCharCode)
    newCharCodeArr.push(newCharCode);
    
  }
  // console.log(str);
  // return newCharCodeArr;
  const results = [];
  for (let num of newCharCodeArr) {
    if (num === 45) {
      results.push(String.fromCharCode(32))
    } else if (num === 46) {
      results.push(String.fromCharCode(33))
    } else if (num === 76) {
      results.push(String.fromCharCode(63))
    } else if (num === 59) {
      results.push(String.fromCharCode(46))
    } else if (num > 90) {
      let newCharCode = (num % 90) + 64;
      results.push(String.fromCharCode(newCharCode));
    } 
      else {
      results.push(String.fromCharCode(num))
    }
  }
  return results.join('');
}

// console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))