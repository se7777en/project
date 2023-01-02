const family = ['Peter', 'Ann', 'Alex', 'Linda'];


function showFamily(arr) {
   if(arr.length < 1){
       return "Семья пуста";
   }
    let str = '';
    arr.forEach((elem)=>{
    str+= `${elem} `;
});
return `Семья состоит из: ${str}`;
}



console.log(showFamily(family));



const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach((elem)=>{
        console.log(elem.toLowerCase());
    });
}

standardizeStrings(favoriteCities);



const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }

    let st = '';
   for (let i = str.length - 1; i >= 0; i--) {
        st += str[i];
    }
   

return st;

}

console.log(reverse(someString));



const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
   
    if(arr.length < 1) {return "Нет доступных валют";}

     let str = 'Доступные валюты:\n';
    arr.forEach((elem)=>{
        if(elem !== missingCurr){
            str+=`${elem}\n`;
        }
    });
    return str;
}

console.log(availableCurr(['UAH', 'RUB', 'CNY'],'CNY'));