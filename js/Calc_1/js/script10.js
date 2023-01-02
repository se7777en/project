let num = 20;
/*
while (num > 2) {
    console.log(num);
    num--;
}*/


do {
    console.log(num);
    num--;
} while (num > 5);


for (let i = 1; i < 10; i++) {

    if (i == 6) {
        //break; // vixod iz cikla
        continue; //propuskaem odin oborot
    }
    console.log(i);

}