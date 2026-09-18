const dog = {
  name: "쪼롱",
  age: 20,
  weight: "30kg",
};

dog.name = "깜장이";

// 존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성된다.
dog.age = 5;
console.log(dog);

// 삭제: delete 연산자 사용하여 프로퍼티를 사용한다
delete dog.age;

console.log(dog);

// const 객체의 프로퍼티 내부 값을 변경, 추가, 삭제 하는것은 가능하지만
// 객체 자체를 재할당 하는것은 불가능하다.

// dog = { name: "초코", age: 10 };

// 존재 확인 : in 연산자
// 해당 객체가 특정 프로퍼티를 가지고 있는지 boolean 값으로 알려줌
console.log("name" in dog); // true
console.log("weight" in dog); // false

for (const key in dog) {
  console.log(`키 : ${key}`);
  console.log(`값: ${dog[key]}`);
}
