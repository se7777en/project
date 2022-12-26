import { openModal,closeModal } from "./Modals";
import {postData} from "../services/services";

function Forms(formsSelector, modalTimerId){

    const forms = document.querySelectorAll(formsSelector);

    const message = { // konteinet soobsheni
        loading: 'img/form/spinner.svg',
        success: 'Spasibo! mi Skoro s vami svyajemsya',
        failure: 'Chtoto poshlo ne tak...'
    };

    forms.forEach(item => {
        bindPostData(item);

    });

  

    function bindPostData(form) {
        form.addEventListener('submit', (e) => { // u kajdoi knopki(sushnosti) gde est input est submit
            e.preventDefault();


            //const statusMessage = document.createElement('div');
            const statusMessage = document.createElement('img');
            //statusMessage.classList.add('status');
            statusMessage.src = message.loading; // mojno setAttribute
            //statusMessage.textContent = message.loading;
            statusMessage.style.cssText = `  
        display: block;
        margin: 0 auto;
        `; // dobavlyaem stili k statusMessage
            //form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage); // metod vstavki


            /* const request = new XMLHttpRequest(); // sozdaem zapros -- XMLHttpRequest eto stari metod no jelatelno ego znat
             request.open('POST', 'server.php');*/ // nastraivaem zapros


            // request.setRequestHeader('Content-type', 'miltipart/form-data');// kogda mi ispolzuem XMLHttpRequest() i FormData() togda zagolovok ne nujen on sozdaetsya avtomaticheski
            /* request.setRequestHeader('Content-type', 'applicatin/json');*/ // otprajka dannix na server v formate JSON
            const formData = new FormData(form); // chtobi ne sobirat kajdi value po otdelnosti i potom sozdavat obiekt dlya nego dlya etogo est FormData
            // kogda dannie idut na server s formi togda obizatelno doljni bit u vsex inputov atribut name

            /////////////
            /*const object = {};
            formData.forEach(function(value, key) {// dobavlyaem iz formData dannie value, key v pustoi obiekt cherez cikl forEach
                object[key] = value;    
            });*/
            ////////////// ili 

            const json = JSON.stringify(Object.fromEntries(formData.entries())); // vot tak bolee sovremenni metod

            //Object.entries() - preobrazuet obiekt v masiv - masiv masivov
            //Object.fromEntries() -  prevrashaem masiv masivov v obiekt
            //JSON.stringify() - prevrashaem obiekt v json


            // const obj = {a: 23, b: 50};
            //console.log(Object.entries(obj));// prevrashaem obiekt v masiv masivov tipa matrici
            /* const json = JSON.stringify(object); */ // preobrazuem object v json

            // request.send(formData);// bez ispolzovaniya JSON
            /*request.send(json);*/ // s ispolzovaniem JSON

            //////////////////////////////////////////   fetch zaprosi 

            ///////    
            /*fetch('server.php',{
                 method: "POST",
                 headers: {
                     'Content-type' : 'application/json'
                 },
                 body: JSON.stringify(object)
             });*/
            ///////

            postData('http://localhost:3000/requests', json)
                /*.then(data => data.text())*/
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);

                    statusMessage.remove();
                }).catch(() => {
                    showThanksModal(message.failure);
                }).finally(() => {
                    form.reset();
                });
            ///////////////////////////

            /*  request.addEventListener('load', () => {
                  if (request.status === 200) {
                      console.log(request.response);
                      //statusMessage.textContent = message.success;
                      showThanksModal(message.success);
                      form.reset();
                      //setTimeout(() => {
                                  statusMessage.remove();
                      //},2000);
                  } else {
                      //statusMessage.textContent = message.failure;
                      showThanksModal(message.failure);
                  }

              });*/


        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class = "modal__content">
        <div data-close class="modal__close">×</div>
        <div class="modal__title">${message}</div>
        </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }





    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));


    /*
    // na servere sozdaem fail s imene server.php i v nego propisivaem
    <?php
    $_POST = json_decode(file_get_contents("php://input"),true);
    echo var_dump($_POST);
    ?>*/
}

//module.exports = Forms;
export default Forms;