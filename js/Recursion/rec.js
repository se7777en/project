'use strict';

const vObject = [{
        id: 1,
        name: 'Object1',
        children: [{
            id: 10,
            name: 'Object10',
            children: [{
                    id: 11,
                    name: 'Object11'
                    
                },
                {
                    id: 12,
                    name: 'Object12'
                    
                },
                {
                    id: 13,
                    name: 'Object13'
                    
                },
                {
                    id: 14,
                    name: 'Object14'
                     
                }
            ]
        }]

    },
    {
        id: 2,
        name: 'Object2'

    },
    {
        id: 3,
        name: 'Object3'
        
    },
    {
        id: 4,
        name: 'Object4'
       
    }
];

//console.log(vObject[0].children[0].name);

function rec(obj) {
let wotch = '';
    for (let i = 0; i < obj.length; i++) {
        const item = obj[i];
        wotch+= item.name +' ';
        if (item.hasOwnProperty('children') && item.children.length > 0) { //item.children.length > 0
            
            wotch += rec(item.children);
        }
    
    }
return wotch;
}

console.log(rec(vObject));