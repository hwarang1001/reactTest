// 외부에 공개모듈을 가져와야한다. import
// const { add, sub } = require("./math");
import add, { sub } from "./math.js";
import randomColor from "randomcolor";
console.log(add(10, 20));
console.log(sub(10, 20));
let color = randomColor();
console.log(`color = ${color}`);
