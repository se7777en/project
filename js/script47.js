"use strict";
<<<<<<< HEAD
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





=======

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

//console.log(student.html.pro[0].name);
>>>>>>> e24bf99da856b39efdd1210d7f8059df89dc4a48

function getTotalProgressByIteration(data) {
    let total = 0;
    let sum = 0;
<<<<<<< HEAD
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
=======
    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            total += course.length;
            for (let i = 0; i < course.length; i++) {
                sum += course[i].progress;
            }
        } else {
            for (let subcourse of Object.values(course)) {
                total += subcourse.length;
                for (let j = 0; j < subcourse.length; j++) {
                    sum += subcourse[j].progress;
                }
            }
        }
    }
    return [sum, total];
}

console.log(getTotalProgressByIteration(student));


function getTotalProgressByRecursion(data) {
>>>>>>> e24bf99da856b39efdd1210d7f8059df89dc4a48
    if (Array.isArray(data)) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
<<<<<<< HEAD

=======
>>>>>>> e24bf99da856b39efdd1210d7f8059df89dc4a48
        }
        return [total, data.length];
    } else {
        let total = [0, 0];
<<<<<<< HEAD
        for (let arr of Object.values(data)) {
            const result = getTotalProgressByzogad(arr);
=======
        for (let course of Object.values(data)) {
            let result = getTotalProgressByRecursion(course);
>>>>>>> e24bf99da856b39efdd1210d7f8059df89dc4a48
            total[0] += result[0];
            total[1] += result[1];
        }
        return total;
    }

}

<<<<<<< HEAD
console.log(getTotalProgressByzogad(students));
=======
console.log(getTotalProgressByRecursion(student));

console.log(student.html.pro[0].name);
>>>>>>> e24bf99da856b39efdd1210d7f8059df89dc4a48
