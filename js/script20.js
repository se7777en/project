'use strict';

const options = {
    name: 'test',
    width: 200,
    height: 400,
    color: {
        border: 10,
        bg: 'red',
        bg1: 'wight',
        bgn: {
            a: 10,
            b: 20,
            c: 40,
            d: 85,
            e:function(){
                console.log("my func");
            }

        }
    }
};

/*
for(let key in options){
    console.log(`kluch znachenie ${key} = ${options[key]}`);
}*/
let counter = 0;
for (let key in options) { //1


    if (typeof (options[key]) !== 'object') { //2
        counter++;
        console.log(`${key} = ${options[key]}`);
    } else {


        for (let i in options[key]) { //3


            ///////////////////
            if (typeof (options[key][i]) !== 'object') { //4
                counter++;
                console.log(`${i} = ${options[key][i]}`);
            } else {

                for (let k in options[key][i]) { //5
                    counter++;
                    console.log(`${k} = ${options[key][i][k]}`);
                } //5
            } //4

        } //3
    } //2
} //1

console.log(counter);

console.log(Object.keys(options));
console.log(Object.keys(options).length);
console.log(options.color.bgn.e());