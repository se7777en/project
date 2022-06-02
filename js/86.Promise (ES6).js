'use strict';

console.log('zapros dannix...');


const req = new Promise((resolve, reject) => { // prinimaet dve funkcii resolv - vse uspeshno reject - shtoto ne tak oshibka
    //////////
    setTimeout(() => {
        console.log('Podgotovka dannix...');

        const product = {
            name: 'TV',
            price: 2000
        };

        resolve(product);
    }, 2000);
    //////////
});

///////////////////////////////////
// metod then ispolzuetsya pri polojitelnom rezultate eta resolve
req.then((product) => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
            //reject(); // reject ispolzuetsya vmeste s catch(kotoraya prinemaet callback funkciu) v dannom sluchai mi vizivaem reject
        }, 2000);
    });

}).then(data => {
    data.modify = true;
    return data;
    
}).then(data => {
    console.log(data);
}).catch(() => {
console.log('Proizoshla oshibka!');
}).finally(() => { // finally vipolnyaetsya v lubom sluchae
    console.log('finally');
});



const test = time => {
    return new Promise(resolve =>{
            setTimeout(() => resolve(), time);
    });
};

//test(1000).then(() => console.log('1000 ms'));
//test(2000).then(() => console.log('2000 ms'));

// Promise.all -  on prinemaet masiv s promisami i jdet poka vse zaprosi ne budut gotovi i potom vipolnyaetsya
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('all');
});