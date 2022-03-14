const num = 150;
/*
if (num < 100) {
    console.log("neverni otvet");

} else {
    console.log('OK');
}


if (num == 20) {
    console.log("ne pravilni otvet");
} else if (num > 200) {
    console.log('Toje nepravilni otvet');

} else if (num == 150) {
    console.log('V tochku!!');
}

(num < 150) ? console.log('Error'): console.log('asd');*/

switch (num) {
    case 50:
        console.log('err1');
        break;

    case 100:
        console.log('err2');
        break;

    case 120:
        console.log('err3');
        break;

    case 150:
        console.log('V tochku');
        break;

    default:
        console.log('vipolnyaetsya v lubom sluchae');
        break;

}