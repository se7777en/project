'use strict';

document.querySelector('.but').addEventListener('click',()=>{
console.log('OK');
});

/*
try {
    console.log('1');
    console.log('b');
    console.log('2');
} catch (error) {
    //console.log(error.name);
   // console.log(error.message);
    console.log(error.stack);
}finally {
    console.log('finally end script');
}
*/

try { 
    const arr = [
        {
            id: 'menu',
            tag: 'nav'
        },
        {
            id: '',
            tag: 'div'
        },
        {
            id: 'sp',
            tag: 'span'
        }
        ];
        
        arr.forEach((item, i) => {
        const element = document.createElement(item.tag);
        if (!item.id) {throw new Error(`identifikator itsustvuet ${i + 1}`);}
        
        element.setAttribute('id',item.id);
        document.body.append(element); 
    });

} catch (error) {
    console.log(error.message);
} finally {
    console.log('Kod vipolnyaetsya v lubom sluchae');
}



