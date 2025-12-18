const row = 5;
const col = 4;
let star ='';
for(let i =1; i<=row;i++){
    for(let j=1; j<=col;j++){
        star +="*";
    }
    star +='\n';
}
console.log(star)