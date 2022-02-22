// Write a JavaScript program to check whether 10 appears in first or last position of a given array of integers. The array length must be greater or equal to 2.
let array = [22,33,44,55,66,77]
let array2 = [10,11,12,13,14,15]
function Check_digit_appears(array){
    if(array.length==1||array.length==0){
        return "Length of Array must be greater or equal to 2"
    }
    if(array[0]===10||array[array.length-1]==10){
        console.log("10 is present")
    }else{
        console.log("10 is not present")
    }
}
Check_digit_appears(array)
Check_digit_appears(array2)
