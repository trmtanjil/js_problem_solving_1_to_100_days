 
function matrixOfCharacters(picture)  {
let wall = '*'.repeat(picture[0].length+2)
console.log(wall)

picture.unshift(wall)
picture.push(wall)

for(let i=1; i<picture.length-1;i++){
    picture[i]="*".concat(picture[i],"*")
}
return picture
}
console.log(matrixOfCharacters(["abc", "dad"]))
