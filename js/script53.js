'use strict';
/*
function sum1(a, b, c){ 
    let k = `${c || 4}`; // znachenie po defaultu 4 (ne propuskaet 0)
    return a * b * k;
}


function sum(a, b, c){ //  Оператор нулевого слияния (Nullish, ??) ES11
    let k = c ?? 4; // esli c ne sushestvuet ili ne ravno 0 budet rovnyatsa 4
    return a * b * k;
}


console.log(sum(2,2));
*/


const obj = {
name:'James',
same: function(){
    console.log('hellow');
}
};


//obj.same?.();// Оператор опциональной цепочки (?.) ES11 esli metod same()
//sushestvuet vizivaet ego v protivnom sluchae prodoljaet vipolnyat sledushi kod
obj.same();
console.log('hi');

//const k = null;
//console.log(k ?? 'user');