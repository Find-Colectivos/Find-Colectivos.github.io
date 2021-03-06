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

function mover() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 60);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            location.replace("https://www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude},20z");
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
function buscarBus(element){
    let barrita = document.getElementById("myProgress");
    let buscar = document.getElementById("buscar");
    let buscando = document.getElementById("buscando");
    if(element == buscar){
        buscar.style.display="none";
        barrita.style.display="block";
        buscando.style.display="block";
        mover();
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

const funcionInit = () => {
	if (!"geolocation" in navigator) {
		return alert("Tu navegador no soporta el acceso a la ubicaci??n. Intenta con otro");
	}

	const $latitud = document.querySelector("#latitud"),
		$longitud = document.querySelector("#longitud"),
		$enlace = document.querySelector("#enlace");


	const onUbicacionConcedida = ubicacion => {
		console.log("Tengo la ubicaci??n: ", ubicacion);
		const coordenadas = ubicacion.coords;
		$latitud.innerText = coordenadas.latitude;
		$longitud.innerText = coordenadas.longitude;
		$enlace.href = `https://www.google.com/maps/@${coordenadas.latitude},${coordenadas.longitude},20z`;
	}
	const onErrorDeUbicacion = err => {

		$latitud.innerText = "Error obteniendo ubicaci??n: " + err.message;
		$longitud.innerText = "Error obteniendo ubicaci??n: " + err.message;
		console.log("Error obteniendo ubicaci??n: ", err);
	}

	const opcionesDeSolicitud = {
		enableHighAccuracy: true, // Alta precisi??n
		maximumAge: 0, // No queremos cach??
		timeout: 5000 // Esperar solo 5 segundos
	};

	$latitud.innerText = "Cargando...";
	$longitud.innerText = "Cargando...";
	navigator.geolocation.getCurrentPosition(onUbicacionConcedida, onErrorDeUbicacion, opcionesDeSolicitud);

};
document.addEventListener("DOMContentLoaded", funcionInit);
