// continue: 현재 반복문의 나머지 코드를 건너뛰고, 다음 반복으로 넘어간다
// break: 현재 반복문을 완전히 종료한다

for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // 이번 반복만 패스
  }

  console.log(i);
}

for (let i = 1; i < 10; i++) {
  if (i % 2 === 0) {
    break; // 반복문 종료
  }

  console.log(i);
}

// 중첩 반복문

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      continue;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

// 구구단

for (let i = 1; i < 10; i++) {
  console.log(`${i}단`);
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
ㅓ;
