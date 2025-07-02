// 단락평가 테스팅
let falseFnc = () => {
  console.log("false 함수");
  return false;
};
let trueFnc = () => {
  console.log("true 함수");
  return true;
};

// console.log(trueFnc() || falseFnc());
// console.log(falseFnc() || trueFnc());

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "홍길동" });
