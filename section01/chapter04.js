// 함수 호이스팅
// add(11, 20);
// sub(11, 20);
// sub2(11, 20);

// 함수 표현식 (익명 함수) 호이스팅 X
let sub1 = function(num1, num2){
  console.log(num1 + num2);
};
let sub2 = (num1, num2) => console.log(num1 * num2);
let sub3 = (func, num1, num2) => {
  // 콜백 함수
  func(num1,num2);
  console.log(num1 / num2);
};

// sub3(sub1, 10, 20);
// console.log("------------------");
// sub3((num1, num2) => console.log(num1 - num2), 10, 20);

// 함수 선언문 호이스팅 O
function add(num1, num2){
  console.log(num1 + num2);
}

// 콜백함수 응용
function repeat(count, callback) { 
  for (let idx = 1; idx <= count; idx++) { 
    callback(idx); 
  } 
} 
function repeat2(count, callback) { 
  for (let idx = 1; idx <= count; idx++) { 
    let result = callback(idx, idx); 
    console.log(`result = ${result}`);
  } 
} 
// 함수표현식 (화살표 방식)
repeat2(5, (a, b) => a + b);
repeat2(5, (a, b) => a - b);
repeat2(5, (a, b) => a * b);
repeat2(5, (a, b) => a / b);
repeat2(5, (a, b) => a * b * 3);
