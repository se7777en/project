'use strict';

const vObject = [

    {
        id: 1,
        name: "Object 1",
        children: [
            {
                id: 11,
                name: "Object 11",
                children: [
                    {
                        id: 12,
                        name: "Object 12"
                    },
                    {
                        id: 13,
                        name: "Object 13",
                       
                        children : [{
                                id: 14,
                                name: "Object 14"
                        }]

                    }
                ]
            }
        ]
    },

    {
        id: 2,
        name: "Object 2"
    },
    {
        id: 3,
        name: "Object 3"
    },
    {
        id: 4,
        name: "Object 4"
    }


];

const students = {

    js: [{
        name: 'John',
        progress: 10
    }, {
        name: 'Bill',
        progress: 20
    }]
};

function navObj(pObject){
    let obj = "";
    const total = 0;

  //  console.log(typeof(pObject));
    for(let i = 0; i < pObject.length; i++){
        
        const vItem = pObject[i];
    
        console.log(vItem.name, typeof(vItem.children), Array.isArray(vItem.children));
       // console.log(Array.isArray(vItem.children));


       // const bo = vItem.children;
       if(typeof(vItem.children) === 'object'){ //Array.isArray(vItem.children)
            navObj(vItem.children);
        }
        //console.log(vItem.name);
    }
}
/*
const arr1 = [];
const arr2 = {};

console.log(Array.isArray(arr1));
console.log(Array.isArray(arr2));*/

navObj(vObject);// vObject
