/*
    대입 연산자(Assignment operator)
    대입 연산자는 항상 오른쪽에서 왼쪽 방향으로 흐름이 흘러감
*/

let a = 10;
let b = 20;

console.log(a);
// 출력 결과 : 10

console.log(b);
// 출력 결과 : 20;

/*
    산술 연산자
        사칙 연산자
        +, -, *, /, %, **
 */

let a = 2;
let b = 4;

console.log(a + b);
 // 출력 결과: 6

console.log(a - b);
// 출력 결과: -2

console.log(a * b);
// 출력 결과: 8

console.log(a / b);
// 출력 결과: 0.5

console.log(a % b);
// 출력 결과: 2

console.log(a ** b);
// 출력 결과: 16

// 산술 연산자는 대입 연산자와 함께 사용되는 경우가 많다
let a = 2;
let b = 4;

a += b // a = a + b
console.log(a);
// 출력 결과: 6

a -= b // a = a - b
console.log(a);
// 출력 결과: 2

a *= b // a = a * b
console.log(a);
// 출력 결과: 8

a /= b // a = a / b
console.log(a);
// 출력 결과: 2

/*
    증가 연산자(++)
    감소 연산자(--)

    [사용 방법]
    postfix 방식: a++

    prefix 방식: ++a
 */

let a = 1;
let b = a++;

console.log(a, b);
// 출력 결과: 2, 1

let c = 1;
let d = ++c;

console.log(c, d);
// 출력 결과 : 2, 2

/*
    관계 연산자(Relational operators) or 비교 연산자(Comparison operators)
    <, >, <=, >=
 */