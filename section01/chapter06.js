// 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};
animal.type = 10;
animal.HR = "화랑";
delete animal.HR;
// animal = {}; // 오류
console.log(animal);

const person = {
  name: "홍길동",
  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
  //익명함수
  sayHi2: function () {
    console.log("안녕2!");
  },
  //화살표함수
  sayHi3: () => {
    console.log("안녕3!");
  },
  //메서드 선언
  sayHi4() {
    console.log("안녕4!");
  },
};
person.sayHi();
