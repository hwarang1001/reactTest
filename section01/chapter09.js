// 익명객체
const person = {
  name: "김동진",
  age: 25,
  tall: 175,
  name2: "김동진",
  age2: 25,
  tall2: 175,
  name3: "김동진",
  age3: 25,
  tall3: 175,
};
let keyArray = Object.keys(person);
let valueArray = Object.values(person);
console.log(keyArray);
console.log(valueArray);
for (let i = 0; i < keyArray.length; i++) {
  console.log(`${keyArray[i]} : ${person[keyArray[i]]}`);
}
// console.log(person["tall3"]);
