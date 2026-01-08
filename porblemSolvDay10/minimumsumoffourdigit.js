const minimumsum=function (num) {
    const arr = num.toString().split("").sort();
    console.log(arr)
    const sum = Number(arr[0]+arr[2]) + Number(arr[1]+arr[3])
    return sum   
}

console.log(minimumsum(2932))

const minimumsum1=function(num){
let digit = num.toString().split("").sort((a,b) => a - b);

let num1 = ""
let num2 = ""

for(let i=0;i<digit.length; i++){
if( i%2 ===0){
    num1 +=digit[i]
}else{
    num2 +=digit[i]
}
}
return Number(num1) + Number(num2);

}

console.log(minimumsum1(2932)); 