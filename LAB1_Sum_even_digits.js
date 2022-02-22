// Write program to find sum of even digits. Input 23617 output 2+6=8.
var num = 23617;
var spl = num.toString().split('');
var numspl = spl.map(Number)
console.log(numspl);
let arr = [2,3,6,1,7];
    let n = arr.length;
    EvenSum(arr, n);
function EvenSum(arr, n)
{
    let even = 0;
    for (let i = 0; i < n; i++)
    {
        if (i % 2 == 0)
            even += arr[i];
    }
    console.log("Even index positions sum " + even);
}
