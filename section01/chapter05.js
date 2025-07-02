// 객체 생성
let obj1 = new Object(); // 생성자 객체
let obj2 = {}; // 리터럴 객체
// console.log(obj1);
// console.log(obj2);

let person = { 
  name: "홍길동", 
  age: 30, 
  hobby: "축구", 
  job: "Developer", 
  extra: {},   
  extra2: function () {},   
  "like cat": true,    
}; 
person.name = 10;
console.log(person["name"]);

// 추가
person.khr = "abc";
console.log(person);

// 삭제
delete person.khr
console.log(person);

// 객체에 해당되는 변수 존재 유무 (in 연산자)
let result1 = "name" in person;
console.log(result1);