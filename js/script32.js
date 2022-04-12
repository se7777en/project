//console.log(document.head); // vivodit head
//console.log(document.documentElement);// vivodit ves html
//console.log(document.body.childNodes);// poluchaet vse dochernie elementi u body
//console.log(document.body.firstChild);// poluchaet pervi element u body
//console.log(document.body.lastChild);// poluchaet posledni element u body
//firstElementChild - poluchaet element
//lastElementChild - poluchaet element




//console.log(document.querySelector('.heart1').parentNode.parentNode); // poluchaet nodu raditelya u klassa heart1 dva raza
//console.log(document.querySelector('.heart1').parentNode.parentElement); // poluchaet element raditelya u klassa heart1 odin raz

//console.log(document.querySelector('[data-current = "3"]').previousSibling);
//nextElementSibling - poluchaet sledushi element
//previousElementSibling - poluchaet predidushi element
//nextSibling - poluchaet sledushuu nodu
//previousSibling - poluchaet predidushuu nodu
// [data-current = "3"] - osobi vid identificatora


for(let node of document.body.childNodes){
    if(node.nodeName == '#text'){
        continue;
    }
    console.log(node);
}

