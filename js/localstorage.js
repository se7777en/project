'use strict';

localStorage.setItem('checked', true);

if (localStorage.getItem('checked')) {
    console.log('storaje is full');
}

localStorage.removeItem('checked');

if (localStorage.getItem('checked')) {
    console.log('storaje is full');
} else {
    console.log('storaje is empty');
}

localStorage.setItem('bg', 'red');
localStorage.clear();