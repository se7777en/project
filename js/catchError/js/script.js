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
        if (!item.id) {throw new SyntaxError(`identifikator itsustvuet ${i + 1}`);}
        
        element.setAttribute('id',item.id);
        document.body.append(element); 
    });

} catch (error) {
    
if(error.name === 'SyntaxError'){
    console.log('ERR');
}

} finally {
    console.log('Kod vipolnyaetsya v lubom sluchae');
}

console.log('////////');
const err = new Error('sfsf');
console.log(err.name);
console.log(err.message);
console.log(err.stack);


