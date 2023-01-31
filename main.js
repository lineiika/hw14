let num = 0;
function sum(number) {
  let a = number;
  sum= num+a
  console.log(sum)
    function sum1(number) {
      let b = number;
      sum1 = sum+b
      console.log(sum1);
    }
    function sum2(number) {
      let c = number;
      sum2 = c+sum1
      console.log(sum2);
    }
    sum1(5);
    sum2(4);
}
sum(5);
