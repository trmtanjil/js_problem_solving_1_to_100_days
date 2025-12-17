// A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
// 

// function primeSum(num){
//     let primeTotal = 0;
//     for(let i=2;i<num;i++){
//         for(let j=2;j<num;j++){
//             if(i===j){
//                 primeTotal = primeTotal + num;
//             }
//             if(i%j===0){
//                 break
//             }
//         }
//     }
//     return primeTotal
// }
function primeSum(num) {
    let primeTotal = 0;

    for (let i = 2; i < num; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeTotal += i;
        }
    }

    return primeTotal;
}

console.log(primeSum(10)); // 17


console.log(primeSum(10))