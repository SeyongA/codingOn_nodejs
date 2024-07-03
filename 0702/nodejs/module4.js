//방법1
// function add(x, y) {
//     return x + y;
// }

// function subtract(x, y) {
//     return x - y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// 기존
// module.exports = { add, subtract, multiply };

//====변경점=====
// es6 문법에서는 화살표 함수로 해도 export 위치가 상관없음
// 이유 : es6는 모든 export와 import문이 로드시점에 한번에 평가되고, 처리되기 때문에
//        함수선언이나 변수선언의 위치와 무관하게 올바르게 작동한다.
// export { add, subtract, multiply };

//방법2 
// export function add(x,y) {
//     return x + y;
// }
// export function subtract(x,y) {
//     return x - y;
// }
// export function multiply(x,y) {
//     return x * y;
// }



// 방법 2의 화살표버전
// export const add = (x,y) => x + y;
// export const subtract = (x,y) => x - y;
// export const multiply = (x,y) => x * y;

// 방법 3 (한번에 내보내기)

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
// 하나의 객체 변수로
const values = {add, subtract, multiply};
export default values;