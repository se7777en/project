'use strict';
document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();

   // const items = document.querySelectorAll('.item');
    const activeItems = document.querySelector('.active-items');
   // const borders = document.querySelector('.borders');
    // console.log(items);

    activeItems.addEventListener('click', (e) => {
        const event = e.target;
        const closestItem = event.closest('.item');
        if (closestItem && event) {
            if (!closestItem.matches('.scal')) {

                closestItem.querySelectorAll('.municipal').forEach((item)=>{
                    item.classList.add('stroke');
                });
                
                //console.log('ok');
                activeItems.appendChild(closestItem);
                closestItem.classList.add('scal');
            }else {
                activeItems.prepend(closestItem);
                closestItem.classList.remove('scal');

                closestItem.querySelectorAll('.municipal').forEach((item)=>{
                    item.classList.remove('stroke');
                });
            }
        }
    });

    // const border = document.querySelectorAll('.border');

    // items.forEach((item) => {
    //     item.addEventListener('click', () => {
    //         if (!item.matches('.scal')) {
    //         activeItems.appendChild(item);
    //         item.classList.toggle('scal');
    //         activeItems.insertBefore(borders, item);
    //         //activeItems.prepend(borders);

    //            // activeItems.appendChild(borders);
    //         } else {
    //            // activeItems.prepend(item);


    //              item.classList.toggle('scal');
    //              activeItems.parentNode.insertAdjacentElement('afterend', borders);
    //          }

    //         // setTimeout(() => {
    //         //     item.classList.remove('scal');
    //         //     activeItems.appendChild(borders);
    //         // }, 3000);

    //     });
    // });

    // kartli.addEventListener('click', () => {
    //     kartli.classList.add('scal');

    //     // border.forEach((item) => {
    //     //     item.classList.add('index');
    //     // });
    //     setTimeout(() => {
    //         kartli.classList.remove('scal');
    //         // border.forEach((item) => {
    //         //     item.classList.remove('index');
    //         // });
    //     }, 3000);
    // });
});
