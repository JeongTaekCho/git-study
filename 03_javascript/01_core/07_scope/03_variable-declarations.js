function compareVar() {
    var i = 100;
    for (var i = 0; i < 3; i++) {
        console.log("var 안: ", i);
    }

    console.log("var 밖: ", i);
}

compareVar();

// let : 블록 범위
function compareLet() {
    let i = 100;
    for (let i = 0; i < 3; i++) {
        console.log("let 안: ", i);
    }

    console.log("let 밖: ", i);
}

compareLet();

function CompareAssignment() {
    var oldMessage = "처음";
    var oldMessage = "변경"; // 같은 범위에서의 재선언을 허용

    console.log(oldMessage);

    let message = "처음";
    // let message = "처음"; // 중복선언 불가 let
    message = "변경1";

    console.log(message);

    const greeting = "안녕하세요";
    console.log(greeting);
    // greeting = "안녕히 가세요"; // const 재할당 불가
}

CompareAssignment();

function compareInitialization() {
    console.log("var 선언 전", oldValue);
    var oldValue = "준비됨";
    console.log("var 대입 후", oldValue);

    let value;
    console.log("let 선언 후", value);
    value = "준비됨";
    console.log("let 대입 후", value);
}

compareInitialization();
