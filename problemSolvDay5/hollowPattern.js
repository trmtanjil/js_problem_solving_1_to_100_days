const row = 5;
const col = 4;
let star ='';
for(let i =1; i<=row;i++){
    for(let j=1; j<=col;j++){
      if(j==1|| j==col){
        star +='*'
      }
      else if(i==1||i==row){
        star +='*'
      }else{
        star +=' '
      }
    }
    star +='\n';
}
console.log(star)