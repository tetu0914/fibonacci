'use strict';

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fib(n) {
  if(memo.has(n)) {
    return memo.get(n);
  }
  const value = fib(n - 1) + fib(n - 2);
  memo.set(n, value);
  return value;
}

//function fib(n) {
//  if (n === 0) {
//    return 0;
//  } else if (n === 1) {
//    return 1;
//  }
////  return fib(n - 1) + fib(n - 2);
//  var resultMap = new Map();
//  let result = 0;
//  let v1 = 1;
//  let v2 = 0;
//  for (let i = 1; i<=n; i++){
//    result = v1 + v2;
//    v2 = v1;
//    v1 = result;
//  }
//  return result;
//}
const length = 40;
for (let i = 0; i <= length; i++) {
  console.log(fib(i));
}