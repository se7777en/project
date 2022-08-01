'use strict';

const usd = document.querySelector('.usd'),
      rub = document.querySelector('.rub');

      usd.addEventListener('input',() => {
            const  reques = new XMLHttpRequest();
            reques.open('GET','js/current.json');
            reques.setRequestHeader('Content-type','application/json; charset=utf-8');
            reques.send();

            reques.addEventListener('load',() => {

                if(reques.readyState === 4 && reques.status === 200){
                    const data = JSON.parse(reques.response);
                    //console.log(data.current.usd);


                    const n = (+usd.value / data.current.usd);
                    if (!isNaN(parseFloat(n)) && isFinite(n)){
                    rub.value = n.toFixed(1);
                    }else{
                        rub.value = 'eto ne chislo';
                    }
                }else{
                    rub.value = "Chtoto poshlo ne tak";
                }
            });
      });