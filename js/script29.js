'use strict';

const box = document.getElementById('box'), // poluchaet element iz html s identifikatorom box
      btns = document.getElementsByTagName('button'), // poluchaet element iz html po tegu
      circles = document.getElementsByClassName('circle'), // poluchaet elent html po imeni klasa s ogranichenimi prototipami
      hearts = document.querySelectorAll('.heart'), // poluchaet vse elementi iz html po klasu hearts
      oneHeart = document.querySelector('.heart'), // poluchaem pervi elementi iz html 
      wrapper = document.querySelector('.wrapper');// poluchaem pervi elementi iz html

     // console.log(hearts);
      /*
      box.style.backgroundColor = 'blue';
      box.style.width = '500px';

      btns[1].style.borderRadius = '100%';
      circles[0].style.backgroundColor = 'red';



   /* for(let i = 0; i< hearts.length;i++){
        hearts[i].style.backgroundColor = 'gray';
    }*/

      hearts.forEach(item =>{
        item.style.background = 'blue'; // perebiraet vse serdechki v cikle forEach i stilizuet kajdi element v cvet blue
      });


      const div = document.createElement('div'); // sozdaet v js element div
      div.classList.add('black'); // dobavlyaet class black k sozdanomu elementu div

     // document.querySelector('.wrapper').append(div);
     
      wrapper.append(div);// vstavlyaet v konec raditelya element div
      //wrapper.prepend(div);// vstavlyaet v konec raditelya element div
/*
      wrapper.insertBefore(div,hearts[1]);

     //console.log(hearts);
     // hearts[0].before(div);
     hearts[0].before(div); // dobavlyaet k masivu hearts posle nulevogo elementa blok div
     circles[0].remove(); // udalyaet 0 element iz masiva circles 
     hearts[0].replaceWith(circles[0]); // zamenyaet hearts[0] element iz masiva hearts na circle[0]
     wrapper.replaceChild(circles[0],hearts[0]); // zamenyaet dochernie elementi heart[0] na circles[0]
*/

div.innerHTML = "Hellow how are you?"; // dobavlyaet tekst k div mojno ispolzovat html
//div.textContent = "<h1>Hellow</h1>";// dobavlyaet k divu tolko tekst

div.insertAdjacentHTML("afterbegin","<h2>afterbegin</h2>");// vstavlyaet html posle nachala
div.insertAdjacentHTML("afterend","<h2>afterend</h2>"); // vstavlyaet html posle elementa

















