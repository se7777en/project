"use strict";

let student = {
    js: [{
        name: 'John',
        progress: 40
    }, {
        name: 'Bill',
        progress: 54
    }],

    html: {
        basic: [{
            name: 'Mikle',
            progress: 60
        }, {
            name: 'Shon',
            progress: 25
        }],

        pro: [{
            name: 'James',
            progress: 77
        }]
    }

};



console.log(student.html.pro[0].name);