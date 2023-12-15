'use strict';

const items = document.querySelectorAll('.accordion__item'),
      light = document.querySelectorAll('.wrap .wrap__inner input'),
      main = document.querySelector('.accordion');


items.forEach((item, ind) => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');

        const element = item.querySelector('.accordion__descr');

        if (item.classList.contains('open')) {
            element.style = 'transition: all .3s linear;';
            element.style.height = `${element.scrollHeight}px`;
            // item.querySelector('i').classList.replace('fa-plus', 'fa-minus');
            item.querySelector('i').style = 'transform: rotate(45deg);';


        } else {
            element.style = 'transition: none; opacity: 0;';
            element.style.height = '0px';
            // item.querySelector('i').classList.replace('fa-minus', 'fa-plus');
            item.querySelector('i').style = 'transform: rotate(0deg);';
        }
    });
});

light.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target.type === 'radio') {
            const val = e.target.value;
            // if(val === 'light') console.log('light');
            // if(val === 'dark') console.log('dark');
            // if(val === 'auto') console.log('auto');
            switch (val) {
                case 'light':
                    console.log('light');
                    main.style = 'color: #1d1d1f';
                    document.body.style = 'background-color: #fff';
                    break;

                case 'dark':
                    console.log('dark');
                    main.style = 'color: #f5f5f7';
                    document.body.style = 'background-color: #1d1d1f';
                    break;

                case 'auto':
                    console.log('auto');
                    main.style = 'color: #1d1d1f';
                    document.body.style = 'background-color: #f5f5f7';
                    break;
            }
        }
    });
});

