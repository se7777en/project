'use strict';

const userService = {
    status: 'true',
    arr: [
        { name: 'james1', status: 'false' },
        { name: 'james2', status: 'true' },
        { name: 'james3', status: 'false' },
    ],


    getFiltredUsers: function () {
        debugger;
        return this.arr.filter((item) => {
            return item.status === this.status;
        })
    }
}

console.log(userService.getFiltredUsers());


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
    },
    css: {
        normal: [{
            name: 'James',
            progress: 50
        }],
        medium: [{
            name: 'James',
            progress: 50
        }]
    }
};

function myFunk(data) {
    if (Array.isArray(data)) {
        let total = 0;
        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];
        for (let arr of Object.values(data)) {
            const result = myFunk(arr);
            total[0] += result[0];
            total[1] += result[1];
        }

        return total;
    }
}

const dat = myFunk(student);
console.log(dat[0], dat[1]);


