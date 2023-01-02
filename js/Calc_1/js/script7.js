"use strict";

//const p = "Hellow";
//alert(p);

let conf = confirm("Are you here?");
document.write(typeof(conf));
let voprosi = [];

voprosi[0] = prompt("Kak vas zovut?","");
voprosi[1] = prompt("Skolko vam let?","");
voprosi[2] = prompt("Gde vi jivete?","");
voprosi[3] = prompt("Vash pol?","");

console.log(typeof(voprosi));
document.write(voprosi);

