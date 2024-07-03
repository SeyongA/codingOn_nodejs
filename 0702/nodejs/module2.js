//하나의 모듈 파일에 여러개의 모듈 만들기
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

// const add = (x, y) => x + y;
// const subtract = (x, y) => x - y;
// const multiply = (x, y) => x * y; //화살표 함수는 한줄로 쓸 때 중괄호와 리턴은 생략가능하다

// module.exports = { add, subtract, multiply }; 
// ^^ module.exports는 호이스팅이라는 개념 때문에 화살표 함수를 사용했을때는 반드시 밑에 있어야한다.
// function 키워드를 사용해서 함수를 생성 했을때는 어디에 있어도 상관없음 

// 방법2 

// module.exports.add = (x,y) => x + y;
// module.exports.subtract = (x,y) => x - y;
// module.exports.multiply = (x,y) => x * y;

//방법2의 생략버전

exports.add = (x,y) => x + y;
exports.subtract = (x,y) => x - y;
exports.multiply = (x,y) => x * y;