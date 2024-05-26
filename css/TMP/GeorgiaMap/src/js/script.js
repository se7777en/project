'use strict';

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();




  // const items = document.querySelectorAll('.item');
  const activeItems = document.querySelector('.active-items');
  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('.modal__close');
  const modalImg = document.querySelector('.modal__img');
  const modalDescr = document.querySelector('.modal__descr');
  const location = document.querySelector('.location a');
  const borders = document.querySelector('.borders');
  // console.log(items);


  let activePoint = '';

  modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('active');
    activePoint.classList.remove('selected');
  });

  const dataObj = {
    '01': {
      'text': '1Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'img': './img/bilberry.jpeg',
      'location': 'https://maps.app.goo.gl/Km29RGUYk9MZYEk68'
    },
    '02': {
      'text': '2Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'img': './img/bilberry.jpeg',
      'location': 'https://maps.app.goo.gl/Km29RGUYk9MZYEk68'
    },
    '03': {
      'text': '3Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'img': './img/bilberry.jpeg',
      'location': 'https://maps.app.goo.gl/Km29RGUYk9MZYEk68'
    },
    '04': {
      'text': '3Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'img': './img/bilberry.jpeg',
      'location': 'https://maps.app.goo.gl/Km29RGUYk9MZYEk68'
    },
    '05': {
      'text': '4Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'img': './img/bilberry.jpeg',
      'location': 'https://maps.app.goo.gl/Km29RGUYk9MZYEk68'
    },
    '06': {
      'text': '5Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'img': './img/bilberry.jpeg',
      'location': 'https://maps.app.goo.gl/Km29RGUYk9MZYEk68'
    },
    '07': {
      'text': '6Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'img': './img/bilberry.jpeg',
      'location': 'https://maps.app.goo.gl/Km29RGUYk9MZYEk68'
    },
    '08': {
      'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'img': './img/bilberry.jpeg',
      'location': 'https://maps.app.goo.gl/Km29RGUYk9MZYEk68'
    },
    '09': {
      'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'img': './img/bilberry.jpeg',
      'location': 'https://maps.app.goo.gl/Km29RGUYk9MZYEk68'
    },
    '10': {
      'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      'img': './img/bilberry.jpeg',
      'location': 'https://maps.app.goo.gl/Km29RGUYk9MZYEk68@@'
    },
  };



  activeItems.addEventListener('click', (e) => {
    const event = e.target;
    const closestItem = event.closest('.item');
    if (closestItem && !event.closest('.point') && event) {
      if (!closestItem.matches('.scal')) {

        closestItem.querySelectorAll('.municipal').forEach((item) => {
          item.classList.add('stroke');
        });

        //console.log('ok');
        activeItems.appendChild(closestItem);
        closestItem.classList.add('scal');
      } else {
        activeItems.prepend(closestItem);
        closestItem.classList.remove('scal');

        closestItem.querySelectorAll('.municipal').forEach((item) => {
          item.classList.remove('stroke');
        });
      }
    }


    if (event && closestItem && event.closest('.point')) {
      // console.log(event);
      modal.classList.remove('active');
      modal.classList.remove('anime');
      if (event.dataset && event.dataset.info) {
        activePoint = event;
        // console.log(event.dataset.info);
        const data = event.dataset.info;

        if (dataObj[data]) {
          // console.log(dataObj[data]);
          modalImg.src = dataObj[data].img;
          modalDescr.textContent = dataObj[data].text;
          location.href = dataObj[data].location;
        }




        activeItems.querySelectorAll('.selected').forEach((item) => {
          item.classList.remove('selected');
        });




        modal.classList.add('active');
        event.classList.add('selected');
        modal.classList.add('anime');

        setTimeout(() => {
          modal.classList.remove('anime');
        }, 1000);


      }
    }
  });


  document.addEventListener('click', (e) => { // esli klick proizoshel vne aktivnix aitemov
    const ev = e.target;
    if (!ev.closest('.active-items')) {
      console.log('out');
      modal.classList.remove('active');
      modal.classList.remove('anime');

      activeItems.querySelectorAll('.scal').forEach((item) => {
        item.classList.remove('scal');
      });
      activeItems.appendChild(borders);
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
