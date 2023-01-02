'use strict';

function Tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass){
    const tabs = document.querySelectorAll(tabsSelector),
    tabParent = document.querySelector(tabsContentSelector),
    tabContent = document.querySelectorAll(tabsParentSelector);


function HideTabsContent() {
    tabContent.forEach((item) => {
        // item.style.display = 'none';
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    tabs.forEach((item) => {
        if (item.classList.contains(activeClass)) {
            item.classList.remove(activeClass);
        }
    });
}

function ShowTabsContent(i = 0) {
    // tabContent[i].style.display = 'block';
    tabContent[i].classList.add('show', 'fade');
    tabContent[i].classList.remove('hide');
    tabs[i].classList.add(activeClass);

}
HideTabsContent();
ShowTabsContent();


tabParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
        tabs.forEach((item, i) => {
            if (target == item) {
                HideTabsContent();
                ShowTabsContent(i);
            }
        });
    }
});
}

//module.exports = Tabs;
export default Tabs;