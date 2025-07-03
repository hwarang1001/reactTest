// 비동기로 처리한 방식(Web APIs 실행)
// console.log(1);

// // web apis 전송
// setTimeout(() => {
//   console.log(2);
// }, 3000);
// console.log(3);

// 비동기 작업 처리하기(콜백함수)
function task() {
  setTimeout(() => {
    console.log("hello");
  }, 3000);
}
// task();

function add(a, b) {
  setTimeout(() => {
    const sum = a + b;
    console.log(sum);
  }, 3000);
}
// add(1, 2);

// 비동기적인 함수를 외부에서 활용하고 싶으면 다음과 같이 콜백함수 활용하기
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

// let callback = (sum) => console.log(sum);
// callback(10);

// add(a, b, callback);
// add(1, 2, (sum) => console.log(sum));

// 1단계 음식을 주문하는 상황
function orderFood(food, callback) {
  console.log(food + "음식주문");
  setTimeout(() => {
    callback(food);
  }, 3000);
}
// orderFood("백숙", (food) => {
//   console.log(food + "주문완료");
// });

// 1단계 음식을 차게주문하는 상황
function coolFood(food, callback) {
  console.log(food + "차게주문");
  setTimeout(() => {
    callback(food);
  }, 2000);
}
// coolFood("백숙", (food) => {
//   console.log(food + "차게완료");
// });

// 1단계 음식을 냉동주문하는 상황
function freezeFood(food, callback) {
  console.log(food + "냉동주문");
  setTimeout(() => {
    callback(food);
  }, 2000);
}
// freezeFood("백숙", (food) => {
//   console.log(food + "냉동완료");
// });

// 2단계 [콜백] 음식주문(주문완료) 30분
// => 음식차게주문(음식차게완료) 20분
// orderFood("백숙", (food) => {
//   console.log(food + "주문완료");
//   coolFood("백숙", (food) => {
//     console.log(food + "차게완료");
//   });
// });

// 3단계 [콜백] 음식주문(주문완료 30분)
// => 음식차게주문(차게완료 20분) => 냉동주문(냉동완료 20분)
orderFood("백숙", (food) => {
  console.log(food + "주문완료");
  coolFood("백숙", (food) => {
    console.log(food + "차게완료");
    freezeFood("백숙", (food) => {
      console.log(food + "냉동완료");
    });
  });
});
