let a = 0;
function sum() {
  let b = 3;
  console.log(a+b)
    function sum1() {
      let c = 5;
      sum1 = b+c
      console.log(sum1);
      
    }
    function sum2() {
      let d = 20;
      console.log(sum1+d);
    }
    sum1();
    sum2();
}
sum();
