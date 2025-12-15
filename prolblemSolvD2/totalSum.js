// Write a function that returns the sum of two numbers.
// Write a function that returns the sum of all numbers regardless of # of params


function total(elements1, elements2){
    return elements1+elements2
}
// console.log(total(2,2))

function totolSum(...elements){
    let totall = 0
    elements.forEach(totalE => {
        totall=totall+totalE 
    });
    return totall;
}
console.log(totolSum(2,2,3))