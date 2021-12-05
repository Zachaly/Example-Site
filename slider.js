var slide1 = '<img src="img/packa.png"> <h2>Packa Smack </h2> <h3>Cena: 6,66zł</h3>';
var slide2 = '<img src="img/moskitiera.png"> <h2>Moskitiera YouNoPass</h2> <h3>Cena: 21,37zł</h3>';
var slide3 = '<img src="img/spray.png"> <h2>Spray <q>Nie siada</q></h2> <h3>Cena: 11,11zł</h3>';

var slides = [slide1, slide2, slide3];

function generateSlides(){
    for(var i=1; i < 4; i++){
        document.getElementById("slide"+i).innerHTML = "";
        document.getElementById("slide"+i).innerHTML = slides[i-1];
    }
}

function shiftSlidesRight(){
    var temp = slides[0];
    slides[0] = slides[2]; // last slide becomes first
    slides[2] = slides[1]; // second slide becomes last
    slides[1] = temp; // first slide goes to the middle

    generateSlides();
}

function shiftSlidesLeft(){
    var temp = slides[0];
    slides[0] = slides[1]; // middle slides becomes first
    slides[1] = slides[2]; // last slide becomes middle
    slides[2] = temp; // first slide becomes last
    generateSlides();
}