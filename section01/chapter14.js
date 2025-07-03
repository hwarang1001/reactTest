// 배열 구조분해 할당
let arr = [1, 2, 3];
let [one, two, three, four = 5] = arr;
console.log(one, two, three, four);

// 객체 구조분해 할당
let person = {
  name: "홍길동",
  age: 27,
  hobby: "테니스",
};

let { age: myAge, hobby, name, extra = "hello" } = person;
console.log(myAge, name, hobby, extra);

// 객체 구조분해할당 이용 함수의 매개변수 받기
let person2 = {
  name: "홍길동",
  age: 27,
  hobby: "테니스",
};
const func = ({ age: myAge, hobby, name, extra = "hello" }) => {
  console.log(name, myAge, hobby, extra);
};
func(person2);
