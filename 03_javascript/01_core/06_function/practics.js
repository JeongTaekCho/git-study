const book = {
    title: "자바스크립트 입문",
    price: 15000,
};

const calculateTotal = (book, quantity) => {
    return book.price * quantity;
};

const totalPrice = calculateTotal(book, 2);
console.log(totalPrice);

book.price = 18000;

const totalPrice2 = calculateTotal(book, 2);
console.log(totalPrice2);

const regularPrice = (total) => {
    return total;
};

const discountPrice = (totalPrice) => {
    if (totalPrice < 3000) {
        return 0;
    }

    return totalPrice - 3000;
};

const checkout = (book, quantity, pricePolicy) => {
    const totalPrice = calculateTotal(book, quantity);

    return pricePolicy(totalPrice);
};

console.log(`${book.title} 2권의 일반결제 금액은 ${checkout(book, 2, regularPrice)}원 입니다.`);
console.log(`${book.title} 2권의 할인결제 금액은 ${checkout(book, 2, discountPrice)}원 입니다.`);
console.log(`${book.title} 0권의 할인결제 금액은 ${checkout(book, 0, discountPrice)}원 입니다.`);
