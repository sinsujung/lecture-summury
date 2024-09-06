/*
    함수란 입력을 받아서 정해진 출력을 하는 것

    함수의 입력은 파라미터(parameters)와 인자(arguments)라고 부름
 */

// 함수 정의하는 방법
// function statement를 사용
function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20));
//출력 결과: 30

// arrow function expression을 사용
const multiply = (a, b) => {
    return a * b;
}

console.log(multiply(10, 20));
// 출력 결과: 200
