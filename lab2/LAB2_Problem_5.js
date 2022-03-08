AverageHighest=function(){
    array=new Array()
    Sum=0
    for(i=0;i<arguments.length;i++){
        Sum=Sum+arguments[i]
    }
    array.push(Sum/arguments.length)
    array.push(Math.max.apply(Math,arguments))
    return array
    }
Result=AverageHighest(11,22,33,44,55,66)
console.log("Average=",Result[0])
console.log("Highest=",Result[1])