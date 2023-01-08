'use strict';

const btn = document.querySelector('.btn'),
      box =  document.querySelector('.box');

    
      let pos = 0;

/*
      function myAnimation(){

        const id = setInterval(frame, 10);

        function frame(){
            if(pos == 297){
                pos = 0;
                clearInterval(id);
            }else{
                pos++;
                box.style.top = pos + 'px';
                box.style.left = pos + 'px';
            }
        }
      }

      btn.addEventListener('click',() => {
        myAnimation();
        
    });    
*/


function myAnimation(){
    pos++;
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';

    if(pos < 297){
     requestAnimationFrame(myAnimation);
    }

}

btn.addEventListener('click',() => {
    requestAnimationFrame(myAnimation);
    pos = 0;
});

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id);



//requestAnimationFrame