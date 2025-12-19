const minimumSum= function(num){
    const arr = num.toString().split('').sort();
    const sum = Number(arr[0]+arr[2])+ Number(arr[1]+arr[3])
    return sum;
}
console.log(minimumSum(2956))