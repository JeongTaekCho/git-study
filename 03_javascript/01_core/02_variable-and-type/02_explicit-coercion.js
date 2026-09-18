// 문자열 타입으로 변환
// 1. String 생성자 함수를 new연산자 없이 호출
console.log(String(!0))

// 2. toString 메서드를 사용
console.log((10).toString())

// 숫자 타입으로 변환
// 1.  Number 생성자 함수를 new 연산자 없이 호출(완벽히 숫자일때만)
console.log(Number(10.01))
console.log(Number(true))

// 2. parseInt, parseFloat 함수를 이용 (문자열 > 숫자만 가능)
console.log(parseInt('10.01'))
console.log(parseFloat('10.01'))

// 논리(불린) 타입으로 변환

// 1. Boolean 생성자 함수를 new 연산자 없이 호출
// Falsy 6총사 (false, 0, null, undefined, NaN, '')는 false로, 나머지는 true로 바꿔주는 방법
console.log(Boolean('JS'))
console.log(Boolean(0))

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
console.log(!true) // false
// console.log(!!'하이') // true