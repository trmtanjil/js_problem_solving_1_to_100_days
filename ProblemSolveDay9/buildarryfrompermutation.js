const pemutation = function(num){
    let ans = [];
    for(let i =0; i<num.length;i++){
        ans[i]=num[num[i]]
    }
    return ans
}
console.log(pemutation([0,2,1,5,3,4]))