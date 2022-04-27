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

//console.log(student.html.pro[0].name);

function getTotalProgressByIteration(data) {
    let total = 0;
    let sum = 0;
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
    if (Array.isArray(data)) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];
        for (let course of Object.values(data)) {
            let result = getTotalProgressByRecursion(course);
            total[0] += result[0];
            total[1] += result[1];
        }
        return total;
    }

}

console.log(getTotalProgressByRecursion(student));

console.log(student.html.pro[0].name);