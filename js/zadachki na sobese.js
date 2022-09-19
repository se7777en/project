'use strict';
////////////////////////////////   zadachka 1
function myfunc() {

    try {

        if (Math.random() <= 0.5) {
            throw new Error('');
        }
        return 1;

    } catch (e) {
        return 2;

    } finally {

        return 3;
    }
}

console.log(myfunc());




const stack = [];
const res = stack.pop();
console.log(res);// udefined



///////////////////////////////////// zadachka 2
const obj = {
    "(": ")",
    "[": "]",
    "{": "}"
};

// console.log(obj['(']);

function myfunc2(brackets) {
    const stack = [];
    for (let i = 0; i <= brackets.length - 1; i++) {
        // console.log(i);
        const br = brackets[i];
        if (br === ')' || br === '}' || br === ']') {
            stack.push(br);
        } else {
            const last = stack.pop();
            /*if (!last) {
                console.log('1');
                return false;
            }*/
            if (br === obj[last]) {
                console.log('1');
                return false;
            }
        }

        if (!stack.length) {
            console.log('2');
            return false;

        } else {
            console.log('3');
            return true;
        }
    }
}

console.log(myfunc2('())))()())))))((((())))((((())))))))))))))))))))))))))))'));

///////////////////////////zadachka 3


const arr = [1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9]; // vivesti v steck unikalnie znacheniya

function myfunc3(arr) {
    let uniq = false;
    const steck = [];
    arr.forEach((item, i) => {

        for (let j = 0; j <= arr.length - 1; j++) {
            if (j != i) {
                if (item == arr[j]) {
                    uniq = false;
                    break;
                } else {
                    uniq = true;
                }
            }
        }
        if (uniq) {
            steck.push(item);
        }
    });
    return steck;
}

console.log(myfunc3(arr));

////////////////////////////////////////

const arr2 = [1, 1, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9]; // vivesti v steck unikalnie znacheniya
const obj2 = {};
const steck2 = [];

arr2.forEach((item) => {
if(!(item in obj2)){
    obj2[item] = 1;
}else{
    obj2[item] +=1;
}
});
//console.log(obj2);

let vals = Object.keys(obj2);
vals.forEach((item) => {
    if(obj2[item] === 1){
        steck2.push(item);
    }
});

console.log(steck2);

////////////////////////////////////////