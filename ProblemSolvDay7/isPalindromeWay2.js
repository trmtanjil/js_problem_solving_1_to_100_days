

const isPalindroWay2=function(x){
    if(x<0||x%10==0&&x!=0){
        return false
    }
    let rev = 0;
    while(x>rev){
        rev =rev*10+x%10;
        x=Math.floor(x/10);
    }
    return (rev==x || x==(Math.floor(rev/10)))
}
console.log(isPalindroWay2(121))
console.log(isPalindroWay2(1213))