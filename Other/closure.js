// Example 1
// function f1()
// {
//   let n = 0;
//   console.log(n);
//   function f2()
//   {
//     n += 1;
//     console.log('-->>', n);
//   }
//   return f2;
// }
// const result = f1();
// result();
// result();
// result();

// Example 2
// function speak() {
//   var words = 'hi';
//   return function logIt() {
//     console.log(words);
//   }
// }
// var sayHello = speak();
// console.log(sayHello);
// sayHello();

// Example 3
function namef(n) {
  return function(a) {
    return `${n} likes ${a}`;
  };
}
var j = namef('John');
var c = namef('Cindy');
console.log(j());
console.log(c('cats'));