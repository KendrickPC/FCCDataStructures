// Only change code below this line
function countdown(n){
  if (n < 1) return [];
  if (n === 1) return [1];
  // const results = [];
  const output = [n];
  return output.concat(countdown(n-1));
  // return countdown(n-1);
  
}
// Only change code above this line
console.log(countdown(10));