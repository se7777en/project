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


