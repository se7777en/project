//<script defer src="script58.js"></script>

//defer zagrujaet script v fonovom rejime i zagrujaet ego kogda on zagruzitsya
// scripti s defer nikogda ne blokiruut stranicu
// scripti s defer vipolnyautsya togda kogda dom derevo uje gotova
// ani srabativaut do sobitiya DOMContentLoaded eto ni osoba na praktike no vi eto doljni znat
// esli neskolko podklucheni scripta to ani budut podkluchatsya posledovatelno
// esli odin script bolshoi drugoi malenki no malenki stoit vtorim 
// on budet jdat vipolnenie pervogo scripta


//<script async src="script58.js"></script>
//async - nikogo ne jdet on vopolnyaetsya togda kogda budet zagrujen
// ani nezavisemi

// ani vosnovnom prednaznacheni dlya storonix skriptov dlya metrik i shechikov
// on doljen ne zavisit ot drugix skriptov on zagruzilsya i srazu vipolnilsya
// s takim atributom buddte akuratni



// dinamicheski podgrujaem skripti
function loadScript(src){
    const script = document.createElement('script');
    script.src = src;
    script.async = false;// esli zakomentirovat to poryadok budet narushen
    document.body.append(script);

}

loadScript("js/test.js");
loadScript("js/some.js");



