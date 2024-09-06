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

let a = 1;
let b = 2;

console.log(a < b);
//출력 결과: true

console.log(a > b);
//출력 결과: false

console.log(a <= b);
// 출력 결과: true

console.log(a >= b);
// 출력 결과: false

/*
    동등 연산자(Equality operators)
    a == b (a가 b와 같다)

    a != b (a가 b와 같지 않다)

    일치 연산자(Strict equality operators)
    a === b
    (a가 b와 값과 자료형이 모두 같다)

    a !== b
    (a가 b와 값이나 자료형이 같지 않다)
 */
let a = 1;
let b = '1';

console.log(a == b);
//출력 결과: true

console.log(a != b);
//출력 결과: false

console.log(a === b);
//출력 결과: false

console.log(a !== b);
//출력 결과: true

/*
    이진 논리 연산자(Binary logical operators)

    a && b
    (a와 b가 모두 true일 경우에만 true)

    a || b
    (a 또는 b가 true일 경우에는 true)
 */

let a = true;
let b = false;

console.log(a && b);
// 출력 결과: false

console.log(a || b);
// 출력 결과: true

/*
    조건부 연산자(Conditional operator)
    삼항 연산자(Ternary operator)
    조건식 ? true일 경우: false일 경우
 */
let a = true;
let b = false;

console.log(a ? 1 : 2);
// 출력 결과: 1

console.log(b ? 1 : 2);
// 출력 결과: 2
