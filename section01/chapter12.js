// 배열 삽입 push
let arr1 = [1, 2, 3];
arr1.push(4);
const newLength = arr1.push(5, 6, 7); //배열의 길이 리턴
console.log(arr1);
console.log(newLength);

// 배열 내용삭제 pop
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop(); //제거한값을 반환한다.
console.log(poppedItem);
