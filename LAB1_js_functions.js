// Develop and demonstrate JavaScript script that uses functions for the following problems: 
// 1. Parameter: A string 
// 2. Output: The position in the string of the left-most vowel 
// 3. Parameter: A number 
// 4. Output: The number with its digits in the reverse order


vowels("a,e,i,o,u")
function vowels(string){
    var j=string.split(",")
    console.log(j[1])
}

function reverse_numbers(i){
	i = i + "";
	return i.split("").reverse().join("")
}
console.log(Number(reverse_numbers(87532)))
