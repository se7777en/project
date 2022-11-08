'use strict';

function Tabs(){
    const tabs = document.querySelectorAll('.tabheader__item'),
    tabParent = document.querySelector('.tabheader__items'),
    tabContent = document.querySelectorAll('.tabcontent');


function HideTabsContent() {
    tabContent.forEach((item) => {
        // item.style.display = 'none';
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    tabs.forEach((item) => {
        if (item.classList.contains('tabheader__item_active')) {
            item.classList.remove('tabheader__item_active');
        }
    });
}

function ShowTabsContent(i = 0) {
    // tabContent[i].style.display = 'block';
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');

}
HideTabsContent();
ShowTabsContent();


tabParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                HideTabsContent();
                ShowTabsContent(i);
            }
        });
    }
});
}

module.exports = Tabs;