'use strict';

let cache =new WeakMap();

function cahcheUser(user){
    if(!cache.has(user)){
        cache.set(user, Date.now());
    }
    return cache.get(user);
}

let lena = {name: 'Elena'};
let alex = {name: 'Alex'};

cahcheUser(lena);
cahcheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));
//WeakMap kluchi doljni bit tolko obiekti
//WeakSet dabavlyaem tolko obiekti, Podderjivaet tolko  add, has ,delete


let message = [
    {text: 'Hellow', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '...', from: 'N'},
];

let readMessage = new WeakSet();

readMessage.add(message[0]);
//readMessage.add(message[1]);

readMessage.add(message[0]);
message.shift();
console.log(readMessage.has(message[0]));

//WeakSet WeakMap - dopolnitelnoe xranolishe dannix dlya obiektov, ani kontroliruut ispolzovanie pamyati
// esli na nix net silok to oni budut udaleni iz pamyati