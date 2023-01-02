'use strict';

const arr = [2, 4, 815, 4, 3, -8, 7, 4, 9, 0, 3, 4, 5, 6];


const obj = {
    max: 'Максимальное число: ',
    min: 'минимальное число: '
};


function max(aray) {
    let num = aray[0];
    aray.forEach((item) => {
        if (item > num) {
            num = item;
        }
    });
    return num;
}


function min(aray) {
    let num = aray[0];
    aray.forEach((item) => {
        if (item < num) {
            num = item;
        }
    });
    return num;
}

console.log(`${obj.max + max(arr)}`);
console.log(`${obj.min + min(arr)}`);


const students = {

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
        }],

        semi: {
            students: [
                {
                    name: 'Test',
                    progress: 100
                }
            ], students2: [
                {
                    name: 'Test',
                    progress: 100,
                    students3: [
                        {
                            name: 'Test',
                            progress: 100,
                            students4: [
                                {
                                    name: 'Test',
                                    progress: 100,
                                    students5: [
                                        {
                                            name: 'Test',
                                            progress: 100,
                                            students6: [
                                                {
                                                    name: 'Test',
                                                    progress: 100, students5: [
                                                        {
                                                            name: 'Test',
                                                            progress: 100,
                                                            students6: [
                                                                {
                                                                    name: 'Test',
                                                                    progress: 100, students5: [
                                                                        {
                                                                            name: 'Test',
                                                                            progress: 100,
                                                                            students6: [
                                                                                {
                                                                                    name: 'Test',
                                                                                    progress: 100, students5: [
                                                                                        {
                                                                                            name: 'Test',
                                                                                            progress: 100,
                                                                                            students6: [
                                                                                                {
                                                                                                    name: 'Test',
                                                                                                    progress: 888
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
};


function evearageByRecursion(data) {

    if (Array.isArray(data)) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {

        let total = [0, 0];
        for (let user1 of Object.values(data)) {
            //console.log(user1)
            let result = evearageByRecursion(user1);
            total[0] += result[0];
            total[1] += result[1];
        }

        return total;
    }
}

console.log(JSON.stringify(students));
//console.log(evearageByRecursion(students));
