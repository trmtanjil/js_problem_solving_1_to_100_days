
const inParindrom= function(x){
    let result = x.toString().split('').reverse().join('');
    if(result==x){
       return true
    }
   else{
    return false
   }
}

console.log(inParindrom(404))
console.log(inParindrom(40))