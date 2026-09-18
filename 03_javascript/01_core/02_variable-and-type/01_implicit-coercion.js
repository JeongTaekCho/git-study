// 암묵적 타입 변환
// 개발자가 직접 변환을 명령하지 않아도
// 자바스크립트 엔진이 문맥에 맞게 타입을 자동 변환하는 것

// 문자열 타입으로 변환
console.log("문자열 타입으로 변환")
console.log(10 + '20')
console.log(typeof (10 + '20'))

// 문자열로 변경 필요 시 빈 문자열을 사용하는 방법도 있다.
console.log(1 + ''); // '1'
console.log(true + ''); // 'true'
console.log(null + ''); // 'null'

console.log('숫자 타입으로 변환');
// console.log(10 * '5');

// console.log(10 % 'js') // NAN - 피연산자 숫자 변환 불가로 연산 수행 불가

// Falsy 값 (false로 평가되는 값) - 0, '', null, undefined, NaN (not a number), 