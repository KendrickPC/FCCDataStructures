const generateArr = (str) => {
  const strArr = str.split('');
  return generatePermutations(strArr);
}

function generatePermutations(arr) {
  if (arr.length === 0) return [[]];
  const first = arr[0];
  const perms = generatePermutations(arr.slice(1));

  const results = [];
  for (let perm of perms) {
    for (let i=0; i<=perm.length; i++) {
      results.push([...perm.slice(0, i), first, ...perm.slice(i)].join(''))
    }
  }
  return results;
}

function permAlone(str) {
  const permArr = generateArr(str);
  // return permArr;

  // Regex to match repeated consecutive characters:
  const re = /(.)\1+/;
  const results = permArr.filter( (str) => {
    return !str.match(re);
  })
  return results.length;
}

// console.log(generateArr('aba'));
console.log(permAlone('aba'));

