'use strict';

const dino = document.querySelector('.dino'),
      cactus = document.querySelector('.cactus');  


      document.addEventListener('keydown', ()=> {
        jump();
      });

      function jump(){
        dino.classList.add('jump');

        setTimeout(function(){
            dino.classList.remove('jump');
          }, 300);
      }

  
      setInterval(function() {
        const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
        const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
        
        if(dinoTop > 140 && cactusLeft < 44  && cactusLeft > 0){
            alert('GAME OVER');

            console.log(`dinoTop = ${dinoTop} cactusLeft = ${cactusLeft}`);
        }
    }, 5);