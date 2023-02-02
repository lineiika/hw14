
let sum =(function(){
  let a = 0;
  return function (number){
    return a = a + number;
  }
})();

console.log(sum(2));
console.log(sum(3));
console.log(sum(20));







 