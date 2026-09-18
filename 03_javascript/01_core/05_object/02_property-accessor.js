// 프로퍼티 접근
// 1. 마침표 표기법
// 2. 대괄호 표기법

const dog = {
  name: "깜장이",
  eat: function (food) {
    console.log(`${this.name}는 ${food}먹는걸 좋아한다.`);
  },
};

console.log(dog.name);
dog["eat"]("라면");

// key가 변수에 담겨 있을 때 반드시 대괄호 표기법을 써야 한다.

const prop = "name";
console.log(dog[prop]);
