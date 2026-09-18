// switch문
// 하나의 변수에 대해 여러 경우를 처리한다.

const fruit = "사과1";

switch (fruit) {
  case "바나나":
    console.log("바나나입니다.");
    break;
  case "사과":
    console.log("사과입니다.");
    break;
  case "오렌지":
    console.log("오렌지입니다.");
    break;
  default: // 위 조건들에 해당하지 않을 때 실행
    console.log("그냥 과일입니다.");
}
