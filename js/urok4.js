"use strict";

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
   // prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    let price1 = +fDish.price.match(/\d+/g);
    let price2 = +sDish.price.match(/\d+/g);
    let ever = average.match(/\d+/g);
    //+fDish.price.slice(0, -1) + (sDish.price) < average
    if ((price1 + price2) < ever) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);
    //JSON.parse(JSON.stringify(data)) 

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(restorantData);



/*let r = 'sdkfsdfusoidfusoidfs202$sdfsdfsdf404sdfs';
let found = r.match(/\d+/g);
console.log(found);*/
/*
let str = '20$';
console.log(+str.slice(0, -1));*/