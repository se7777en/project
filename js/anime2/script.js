'use strict';

const btnPhone = document.querySelector('#iphone'),
    btnMacbook = document.querySelector('#macbook'),
    images = document.querySelectorAll('img');

let phoneAnimation;

btnPhone.addEventListener('click', () => {

    if (!phoneAnimation) {
        phoneAnimation = images[0].animate([
            {
                transform: 'translateY(0) rotate(0deg)',
                filter: 'opacity(100%)'
            },
            {
                transform: 'translateY(100px) rotate(180deg)',
                filter: 'opacity(50%)'
            },
            {
                transform: 'translateY(-100px)  rotate(270deg)',
                filter: 'opacity(75%)'
            },
            {
                transform: 'translateY(0) rotate(360deg)',
                filter: 'opacity(100%)'
            }
        ], {
            duration: 3000,
            iterations: Infinity
        });
    } else if (phoneAnimation.playState === 'paused') {
        phoneAnimation.play();
    } else {
        phoneAnimation.pause();
    }

});


let pcAnimate;

btnMacbook.addEventListener('click', () => {

    if (!pcAnimate) {
        pcAnimate = images[1].animate([
            { transform: 'translateX(0px) rotate(0deg)' },
            { transform: 'translateX(100px) rotate(0deg)' },
            { transform: 'translateX(-100px) rotate(0deg)' },
            { transform: 'translateX(0px) rotate(0deg)' }
        ],
            {
                duration: 3500,
                iterations: Infinity
            });
    } else if (pcAnimate.playState === 'paused') {
        pcAnimate.play();
    } else {
        pcAnimate.pause();
    }


});