'use strict'
document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    const parent = document.querySelector('.parent');
    const childe = document.querySelector('.childe');
    parent.addEventListener('click', (e) => {
        const ev = e.target;
        if (ev) {
           // console.log(ev);
           const closest = ev.closest('.childe'); // ishet blijaishi roditelski element
            const contains = ev.contains(childe); // proveryaet esli e.target kliknuti element soderjit node child
            const containsClass = ev.classList.contains('childe'); // proveryaet esli e.target kliknuti element soderjit class child na tomje urovne
            const matches = ev.matches('.childe'); // proveryaet esli e.target kliknuti element sootvestvuet classu child na tomje urovne



            
            
            if (closest) {
               console.log(`${closest} -  closest`);
            }


            if (contains) {
                console.log(`${contains} -  contains`);
            }

            if(containsClass) {
                console.log(`${containsClass} -  containsClass`);
            }


            if(matches) {
                console.log(`${matches} -  matches`);
            }

        }



    });

});