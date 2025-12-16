function sequence(...value){
    for(i=1;i<value.length;i++){
        if(value[i]<value[i-1]){
            return false
        }
    }
    return true
}
console.log(sequence(1,2,3))
console.log(sequence(1,2,3,6))
console.log(sequence(1,2,3,1))