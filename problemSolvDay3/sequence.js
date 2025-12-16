 function sequence(...value){
    for(i=1;i<value.length;i++){
        if(value[i]<value[i-1]){
            return false
        }
    }
    return true
}

function sequencee(...valuee){
    for(i=1;i<valuee.length;i++){
      let current = valuee[i];
      let prev = valuee[i-1] 
      if(current-prev !==2){
        return false
      }
    }
    return true
}


console.log(sequencee( 4,6))
console.log(sequence(1,2,3,6))
console.log(sequence(1,2,3,1))

function isAlphabetSequence(inputSequence) {
    const sequence = Array.from(inputSequence);

    console.log(sequence)
    // কমপক্ষে 2টা character লাগবে
    if (sequence.length < 2) {
        return false;
    }

    for (let i = 1; i < sequence.length; i++) {
        const currentChar = sequence[i];
        const previousChar = sequence[i - 1];

        const currentCode = currentChar.charCodeAt(0);
        const prevCode = previousChar.charCodeAt(0);

        if (currentCode - prevCode !== 1) {
            return false;
        }
    }

    // সবগুলো ঠিক থাকলে
    return true;
}





console.log("Example 1 (Lowercase):", isAlphabetSequence("abcde"));    // Output: true
console.log("Example 2 (Uppercase):", isAlphabetSequence(['F', 'G', 'H'])); // Output: true
console.log("Example 3 (Broken):", isAlphabetSequence("acde"));       // Output: false (c এবং a এর পার্থক্য 2)
console.log("Example 4 (Different Cases):", isAlphabetSequence("aBc")); // Output: false (B এর ASCII A বা a এর ঠিক পরে নয়)
console.log("Example 5 (Reversed):", isAlphabetSequence("zyxw"));