// /* Failed Example */
// function buyDonut(){
//   orderDonut();
//   console.log('pay');
//   console.log('walk out door');
// }
// /* function that gets a donut */
// function orderDonut(){
//   var x = setTimeout(function () {
//     console.log('donut on counter');
//   }, 10);
// }
// buyDonut();
// /* Callback Example */
// function buyDonut2(){
//   orderDonut2(function whatToDoAfterDonutOnCounter(){
//     console.log('pay');
//     console.log('walk out door');
//   });
// }
// /* function that gets a donut */
// function orderDonut2(callback){
//   var x = setTimeout(function () {
//     console.log('donut is on counter');
//     callback();
//   }, 10);
// }
// buyDonut2();

// PROMISE
console.log("PROMISE EXAMPLE");
var beginDonutTransaction = new Promise(
  function(resolve,reject){
    var x = setTimeout(function () {
      console.log('donut is on counter');
      resolve();
    }, 10);
  }
);
beginDonutTransaction
.then(function(){
  //this is the resolve
  console.log('pay');
  console.log('walk out door');
})
.catch(function(){
  //this is the reject
  console.log("give me my donut!");
});
