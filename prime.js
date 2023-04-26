let a=20;
let count=0;
for(let i=1;i<=20;i++){
if(a%i==0){
count++
}
if(count==2){
console.log("prime");
}
else{
console.log("not")
}
}