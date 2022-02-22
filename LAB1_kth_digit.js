// Write program to print the kth digit from last. E.g. input 23617 and k=4 output 3


array = [1,2,3,4,5]

function finder(i,array){
    return array[(array.length)-i]
}
console.log(finder(4,[2,3,6,1,7]))
