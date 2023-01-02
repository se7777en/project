'use strict';

/*const obj = {
name: 'Melik',
sorname: 'Papikyan',
age: 36
};
let arr = Object.entries(obj);*/


const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
};
////////////////////
const userMap = new Map(Object.entries(user)); // takkak Object.entries vozvrashaet masiv v masive peredaem pervoe
// znachenie
console.log(userMap);

const newUserObj = Object.fromEntries(userMap); // iz karti map v obiekt fromEntries
console.log(newUserObj);
////////////////////////

console.log(Object.keys(user)[0]);

const shops = [
    {rice: 500},
    {oil: 200}, 
    {bread: 50}
];

const budget = [5000, 15000, 25000]; 

const map = new Map([
    [{paper:400},8000]
]);

shops.forEach((shop, i)=>{
    map.set(shop,budget[i]);
});

console.log(map);
///////////////
let arr = [];
for(let shop of map.keys()){
    arr.push(Object.keys(shop)[0]);
}
console.log(arr);
////////////////
for(let shop of map.values()){
    console.log(shop);
}
///////////
for(let [shop, price] of map.entries()){ // destrukturizaciya  map.entries()
    console.log(price,shop);
}

////////////
map.forEach((key,value, map)=>{
console.log(value,key);
});
////////////




/*
map.set(shops[0],5000);
map.set(shops[1],15000);
map.set(shops[2],25000);*/


//map.set(shops[0],5000).map.set(shops[1],15000).map.set(shops[2],25000);

/*console.log(map.get(shops[0]));
console.log(map.has(shops[0]));*/

//map.delete(key);
//map.clear();
//console.log(map.size);
console.log('////////');



