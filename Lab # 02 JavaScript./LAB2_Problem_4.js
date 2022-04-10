function SandwichCalculator(Bread,cheese) {
 if(Bread%2==0 && cheese>1)
 {
     return Bread/2;
 }
 else{
    return "insufficient ingridients "
 }
  
};
console.log(SandwichCalculator(12),(3))
