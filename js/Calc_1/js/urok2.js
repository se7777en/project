"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let sum = 0;
    const { height } = data;
    const { shops } = data;
    const { moneyPer1m3 } = data;
    const { budget } = data;

    shops.forEach((item) => {
        sum += item.width * item.length * height;

    });
    console.log(sum * moneyPer1m3);

    if ((sum * moneyPer1m3) <= budget) {
        return "Бюджета достаточно";
    } else {
        return "Бюджета недостаточно";
    }


    //console.log(sum * moneyPer1m3);
}

console.log(isBudgetEnough(shoppingMallData));