// 배열내장함수(forEach)
const arr = [1, 2, 3, 4];
const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 향상된 포문
for (let e of arr) {
  // console.log(e);
}

// console.log("================");

// 배열내장객체 forEach(출력하는 것이다.)
arr.forEach((e) => {
  // console.log(e);
  // newArr.push(e * 2);
  // console.log(index);
  // console.log(array);
  // console.log("================");
});

// console.log(newArr);

// 배열내장객체 map => 위도,경도 => 새로운 리턴(배열)
const newArray2 = arr.map((e) => e * 3);
// console.log(newArray2);

// 배열내장객체 찾기, includes
let resultFind2 = false;
arr.forEach((e) => {
  if (e === 3) {
    resultFind2 = true;
  }
});
// console.log(resultFind2);

let resultFind = arr.includes(3);
// console.log(resultFind);

// console.log(`4값체크유무: ${arr.includes(4)}`);

// 배열내장객체 indexOf
let count = -1;
let findIndex = -1;
arr.forEach((e) => {
  count++;
  if (e === 4) {
    findIndex = count;
  }
});
// console.log(findIndex);

// console.log(`4값위치: ${arr.indexOf(4)}`);

// 배열내장객체 findIndex (true, false)
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
// console.log(resultArray2);

// 배열내장객체 map
const resultArray3 = arr6.map((e) => {
  return e.hobby + e.name;
});
// console.log(resultArray3);

// 배열내장객체 slice
let arr7 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
  { name: "홍길동", hobby: "독서" },
  { name: "홍길동", hobby: "독서" },
];
// console.log(arr7.slice(0, 4));

// 배열내장객체 concat
let arr8 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
];
let arr9 = [
  { name: "홍길동", hobby: "독서" },
  { name: "홍길동", hobby: "독서" },
];

// console.log(arr8.concat(arr9));

// 배열내장객체 sort
let charArray = ["가", "라", "다", "나"];
// console.log(charArray.sort());

let numArray = [1, 20, 11, 34, 50, 15, 100];
// console.log(numArray.sort());

//배열내장객체 sort 역정렬, 정렬 (기준)
console.log(numArray);
numArray.sort((a, b) => a - b);
console.log(numArray);

// 배열내장객체 toSorted 역정렬, 정렬 (기준)
const sortedArray = numArray.toSorted((a, b) => b - a);
console.log(numArray);
console.log(sortedArray);

// 배열내장객체 join
const arr10 = ["김동진", "님", "안녕하세요", "반가워요"];
const resultStr = arr10.join();
console.log(resultStr);
