// 배열 내장함수(forEach)
const arr = [1, 2, 3, 4];
const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 향상된 포문, 일반 포문(출력하는 것이다.)
arr.forEach((e) => {
  // console.log(e);
  // newArr.push(e * 2);
  // console.log(index);
  // console.log(array);
  // console.log("================");
});

// console.log(newArr);

// 배열내장객체 map => 위도,경도 => 새로운 리턴
const newArray2 = arr.map((e) => e * 3);
// console.log(newArray2);

// 배열내장객체 찾기, includes
// console.log(`4값체크유무: ${arr.includes(4)}`);

// 배열내장객체 indexOf
// console.log(`4값위치: ${arr.indexOf(4)}`);

// 배열내장객체 findIndex
const resultIndex = arr.findIndex((e) => {
  // console.log("찾는중임");
  return e === 4;
});
// console.log(`4 findIndex: ${resultIndex}`);

// 배열내장객체 find 해당되는 객체를 찾아서 리턴
let arr5 = [{ name: "구길동" }, { name: "홍길동" }];
const resultArray = arr5.find((e) => e.name === "홍길동");
// console.log(resultArray);

// 배열내장객체 filter (배열을 필터링하는방법)
let arr6 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];
const resultArray2 = arr6.filter((e) => {
  return e.hobby === "테니스";
});
console.log(resultArray2);

// 배열내장객체 map
const resultArray3 = arr6.map((e) => {
  return e.hobby + e.name;
});
console.log(resultArray3);
