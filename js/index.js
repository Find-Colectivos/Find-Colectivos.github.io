function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 60);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            location.replace("pag/findbus.html");
        }       
         else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label").innerHTML = width * 1 + '%';
        }
    }
}
function aparecerbarrita(element){
    let barrita = document.getElementById("myProgress");
    let iniciar = document.getElementById("iniciar");
    let buscando = document.getElementById("buscando");
    if(element == iniciar){
        iniciar.style.display="none";
        barrita.style.display="block";
        buscando.style.display="block";
        move();
    }
}

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll("#slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft = document.querySelector("#btnLeft");
const btnRight = document.querySelector("#btnRight");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
  let sliderSectionFirst = document.querySelectorAll("#slider__section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout( function() {
      slider.style.transition = "none";
      slider.insertAdjacentElement('beforeend', sliderSectionFirst),
      slider.style.marginLeft = "-100%";
  }, 500);
}

function Prev(){
    let sliderSection = document.querySelectorAll("#slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout( function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast),
        slider.style.marginLeft = "-100%";
    }, 500);
  }

btnRight.addEventListener("click", function(){
  Next();
});
btnLeft.addEventListener("click", function(){
    Prev()
  });
