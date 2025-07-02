// 실수
let num1 = 10;
let num2 = 3;
// console.log(num1 / num2);

// number 타입 
let num3 = 2 * "3as";
// console.log(num3);
// console.log(typeof num3);

// 형변환(강제 형변환)
let str1 = "10"; 
let str2 = "10";
let strToNum1 = Number(str1); 
// console.log(10 + strToNum1); 
// console.log(str1 + str2);

// NaN 형변환
// Number(), parseInt()
let num4 = Number("20a");
let num5 = parseInt("20a");
let num6 = parseInt("a20");
// console.log(num4);
// console.log(num5); 
// console.log(num6);

// Null 병합 연산자 (Null과 Undefined는 안됨)
let a; 
let b = 100;
a = b ?? 0;
console.log(`a = ${a}`);

