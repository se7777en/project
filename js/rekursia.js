"use strict";

let student = {
    js: [{
        name: 'John',
        progress: 10
    }, {
        name: 'Bill',
        progress: 20
    }],

    html: {
        basic: [{
            name: 'Mikle',
            progress: 30
        }, {
            name: 'Shon',
            progress: 40
        }],

        pro: [{
            name: 'James',
            progress: 50
        }]
    }

};


function getTotalProgressByIteration(data) {
    let total = 0;
    let sum = 0;

    for (let users of Object.values(data)) {

        if (Array.isArray(users)) {
            total += users.length;
            for (let i = 0; i < users.length; i++) {
                sum += users[i].progress;
            }

        } else {

            for (let subarr of Object.values(users)) {
                total += subarr.length;
                for (let j = 0; j < subarr.length; j++) {
                    sum += subarr[j].progress;
                }
            }
        }
    }

    return [sum, total];


}

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let arr of Object.values(data)) {
            const result = getTotalProgressByRecursion(arr);
            total[0] += result[0];
            total[1] += result[1];
        }
        return total;
    }
}

console.log(getTotalProgressByIteration(student));
console.log(getTotalProgressByRecursion(student));

//console.log(student.html.pro[0].name);