// for in, for of
let person = {
  name: "홍길동",
  age: 27,
  hobby: "테니스",
};
let personArray = [
  {
    name: "홍길동",
    age: 27,
    hobby: "테니스",
  },
  {
    name: "홍길동",
    age: 27,
    hobby: "테니스",
  },
];
for (let person of personArray) {
  console.log(person);
  for (let data in person) {
    console.log(`${data} = ${person[data]}`);
  }
}
