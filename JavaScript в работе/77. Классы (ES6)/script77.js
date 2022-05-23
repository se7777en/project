//1) Klasi slujat dlya sozdaniya novix obiektov
//2) Obstrakciya - eto kogda mi otdelyaem koncepciu ot ee ekzemplyara
//3) Nasledovanie - eto sposobnost nashego obiekta ili klassa bazirovatsa na drogom obiekte ili klasse
//  eto glavni mexanizm

'use strict';

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calcArea() {
        return this.width * this.height;
    }
}

const double = new Rectangle(10, 6);
const long = new Rectangle(10, 40);


class ColoredRectangleWithText extends Rectangle {
    constructor(width, height, text, bgcolor) {
        super(width, height); // super stavitsya v nachale konstruktora i nasleduet svoistva ot roditelya
        this.text = text;
        this.bgcolor = bgcolor;
    }

    showMyProps() {
        console.log(`Tekst: ${this.text}, cvet: ${this.bgcolor}`);
    }

}

const div = new ColoredRectangleWithText(25, 10, 'Hellow World', 'Red');

div.showMyProps();
console.log(div.calcArea());



/*const square = new Rec(10, 20, 'kvadrat' , 'krasni');
const long = new Rec(10, 40, 'trexugolnik' , 'green');
console.log(S1.calcArea());
S1.func();*/



/*console.log(double.area());
console.log(long.area());*/