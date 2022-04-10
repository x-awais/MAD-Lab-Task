// Write program to find sum of all digits. Input 23617 output 2+3+6+1+8=20

var num = 23617;
var spl = num.toString().split('');
var numspl = spl.map(Number)
numspl = [2,3,6,1,7].reduce(add, 0);
function add(accumulator, a) {
  return accumulator + a;
}
console.log(numspl);
