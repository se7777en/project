"use strict";
const students = {
    js: [{
            name: 'John',
            progress: 10
        },
        {
            name: 'Bill',
            progress: 20
        }
    ],
    html: [{
            name: 'Alex',
            progress: 30
        },
        {
            name: 'Jonatan',
            progress: 10
        },
    ],
    css6: {
        css4: {
            css7: {
                basic: [{
                        name: 'James',
                        progress: 11
                    },
                    {
                        name: 'Jack',
                        progress: 10,
                    },

                ],
                basic2: [{
                        name: 'James',
                        progress: 30
                    },

                    {
                        name: 'Jack',
                        progress: 10,
                    }
                ],
            }
        }
    },
    css: [{
            name: 'Marvell',
            progress: 40
        },
        {
            name: 'Albano',
            progress: 70
        }
    ]

};
//console.log(students.css[2].progress);






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
console.log(getTotalProgressByIteration(students));


function getTotalProgressByzogad(data) {
    if (Array.isArray(data)) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;

        }
        return [total, data.length];
    } else {
        let total = [0, 0];
        for (let arr of Object.values(data)) {
            const result = getTotalProgressByzogad(arr);
            total[0] += result[0];
            total[1] += result[1];
        }
        return total;
    }

}

console.log(getTotalProgressByzogad(students));
