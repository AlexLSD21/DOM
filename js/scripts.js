
//Titulo pagina
const tituloPag = document.querySelector("title");
tituloPag.textContent = "BLOG | Lab's Alex";

//Modificando body
const cuerpo = document.querySelector("body");
cuerpo.style.fontFamily = "Roboto";
cuerpo.style.backgroundColor = "#e2e2e2";
cuerpo.style.padding = "0.5rem";

//Elimnando Objetos
const destinos = document.querySelector(".destinos");
destinos.parentNode.removeChild(destinos);

const hacer = document.querySelectorAll(".hacer");
hacer[2].parentNode.removeChild(hacer[2]);

const formulario = document.querySelector(".contenido-hero form");
formulario.parentNode.removeChild(formulario); 

const removeAnuncio = document.querySelector(".premium .info");
removeAnuncio.parentNode.removeChild(removeAnuncio);

//Modificando Header
const largoHeader = document.querySelector("header");
largoHeader.style.maxHeight = "55%";

const fondo = document.querySelector(".hero");
fondo.style.backgroundColor = "#DBB59AD9";

const headerContenedor = document.querySelector(".contenedor");
headerContenedor.style.backgroundColor = "gray";

const header = document.querySelector(".contenido-hero h1");
header.style.fontSize = "7rem";
header.textContent = "Mantente Curioso.";
header.style.textAlign = "left";
header.style.color = "black";

const nose = document.querySelector(".contenido-hero");
console.log(nose);
nose.style.padding = "auto";

//Modificando logo
const logo = document.querySelector(".hero img");
logo.src = "img/logociencias-removebg-preview.png";
logo.style.maxWidth = "45%";
logo.style.margin = " 0.5rem 0rem 1rem 5rem";

//Agregando parrafo al header
const paEntrada = document.createElement("p");
paEntrada.textContent = "Descubra historias, pensamientos y experiencia de escritores sobre cualquier tema.";
paEntrada.style.fontSize = "4rem";
header.appendChild(paEntrada); 

//Modificando la navegacion
const navegacion = document.querySelectorAll(".navegacion a");
navegacion[0].textContent = "Home |";
navegacion[1].textContent = "My Blog |"; 
navegacion[2].textContent = "Photos |";
navegacion[3].textContent = "About";
navegacion[0].addEventListener('click', function(){
    alert("ACCIÓN NO DISPONIBLE");
});
navegacion[1].addEventListener('click', function(){
    alert("ACCIÓN NO DISPONIBLE");
});
navegacion[2].addEventListener('click', function(){
    alert("ACCIÓN NO DISPONIBLE");
});
navegacion[3].addEventListener('click', function(){
    alert("ACCIÓN NO DISPONIBLE");
});



const navGeneral = document.querySelector(".navegacion");
navGeneral.style.fontSize = "3rem";
navGeneral.style.padding = "2rem";



//Boton flotante FOOTER
const btnflotFooter = document.querySelector(".btn-flotante");
btnflotFooter.textContent = "Contact";
btnflotFooter.addEventListener('click', function(){
    alert("BOTÓN NO DISPONIBLE");
});

 //Modificando imagenes
 const imagenes = document.querySelectorAll (".card img");
imagenes[0].src = "https://www.uncuyo.edu.ar/prensa/cache/pronostico-de-cosecha-mediante-machine-learning_203_360_c.jpg";
imagenes[1].src = "https://www.uncuyo.edu.ar/prensa/cache/lago-viedma-1_203_360_c.png";
imagenes[2].src = "https://www.uncuyo.edu.ar/prensa/cache/dsc4476_203_360_c.jpg";
imagenes[3].src = "https://www.uncuyo.edu.ar/prensa/cache/la71652_203_360_c.jpg";
imagenes[4].src = "https://www.uncuyo.edu.ar/prensa/cache/proyecto-internet-de-las-cosas_203_360_c.jpg";
imagenes[5].src = "https://www.uncuyo.edu.ar/prensa/cache/la779721_203_360_c.jpg";
imagenes[6].src = "https://www.uncuyo.edu.ar/prensa/cache/mg7412_203_360_c.jpg";
imagenes[0].style.maxWidth = "45%";
imagenes[1].style.maxWidth = "45%";
imagenes[2].style.maxWidth = "45%";
imagenes[3].style.maxWidth = "45%";
imagenes[4].style.maxWidth = "45%";
imagenes[5].style.maxWidth = "45%";
imagenes[6].style.maxWidth = "45%";
imagenes[0].style.borderRadius = "1rem";
imagenes[1].style.borderRadius = "1rem";
imagenes[2].style.borderRadius = "1rem";
imagenes[3].style.borderRadius = "1rem";
imagenes[4].style.borderRadius = "1rem";
imagenes[5].style.borderRadius = "1rem";
imagenes[6].style.borderRadius = "1rem";


//Modificando titulos
const titulos = document.querySelectorAll("h2");
titulos[0].textContent = "Divulgación científica";
titulos[1].textContent = "Eventos";
titulos[2].textContent = "Divulgaciones Pasadas";

//Modificando parrafos
                    //Parrafo CATEGORIA
                const parrafos = document.querySelectorAll(".categoria");
                parrafos[0].textContent = "Divulgación Cientifíca";
                parrafos[0].style.textTransform = "uppercase";
                parrafos[0].style.fontSize = "0.9rem";
                parrafos[0].style.fontWeight = "400px";
                parrafos[1].textContent = "Divulgación Cientifíca";
                parrafos[1].style.textTransform = "uppercase";
                parrafos[1].style.fontSize = "0.9rem";
                parrafos[1].style.fontWeight = "400px";
                parrafos[2].textContent = "Divulgación Cientifíca";
                parrafos[2].style.textTransform = "uppercase";
                parrafos[2].style.fontSize = "0.9rem";
                parrafos[2].style.fontWeight = "400px";
                parrafos[3].textContent = "Divulgación Cientifíca";
                parrafos[3].style.textTransform = "uppercase";
                parrafos[3].style.fontSize = "0.9rem";
                parrafos[3].style.fontWeight = "400px";
                parrafos[4].textContent = "Divulgación Cientifíca";
                parrafos[4].style.textTransform = "uppercase";
                parrafos[4].style.fontSize = "0.9rem";
                parrafos[4].style.fontWeight = "400px";
                parrafos[5].textContent = "Divulgación Cientifíca";
                parrafos[5].style.textTransform = "uppercase";
                parrafos[5].style.fontSize = "0.9rem";
                parrafos[5].style.fontWeight = "400px";
                parrafos[6].textContent = "Divulgación Cientifíca";
                parrafos[6].style.textTransform = "uppercase";
                parrafos[6].style.fontSize = "0.9rem";
                parrafos[6].style.fontWeight = "400px";

                    //Parrafo TITULO
                const subtitulos = document.querySelectorAll(".titulo");
                subtitulos[0].textContent = "Aplican inteligencia artificial para mejorar el pronóstico de cosecha";
                subtitulos[0].style.fontSize = "2rem";
                subtitulos[0].style.fontWeight = "900px";
                subtitulos[0].style.margin = "0";
                subtitulos[0].style.color = "red";
                subtitulos[1].textContent = "El lago más profundo de América y el quinto del mundo está en la Patagonia argentina";
                subtitulos[1].style.fontSize = "2rem";
                subtitulos[1].style.fontWeight = "900px";
                subtitulos[1].style.margin = "0";
                subtitulos[1].style.color = "red";
                subtitulos[2].textContent = "Avance clave para el desarrollo de una vacuna contra la leishmaniasis";
                subtitulos[2].style.fontSize = "2rem";
                subtitulos[2].style.fontWeight = "900px";
                subtitulos[2].style.margin = "0";
                subtitulos[2].style.color = "red";
                subtitulos[3].textContent = "La docencia en educación superior: qué pasa y cómo es la formación pedagógica";
                subtitulos[3].style.fontSize = "2rem";
                subtitulos[3].style.fontWeight = "900px";
                subtitulos[3].style.margin = "0";
                subtitulos[3].style.color = "red";
                subtitulos[4].textContent = "Detectan cómo hacer más seguro el Internet de las Cosas (IoT)";
                subtitulos[4].style.fontSize = "2rem";
                subtitulos[4].style.fontWeight = "900px";
                subtitulos[4].style.margin = "0";
                subtitulos[4].style.color = "red";
                subtitulos[5].textContent = "Describen cómo funciona una proteína clave para la sinapsis neuronal";
                subtitulos[5].style.fontSize = "2rem";
                subtitulos[5].style.fontWeight = "900px";
                subtitulos[5].style.margin = "0";
                subtitulos[5].style.color = "red";
                subtitulos[6].textContent = "Fármaco usado para la hipertensión resultó ser un aliado en el tratamiento del Chagas";
                subtitulos[6].style.fontSize = "2rem";
                subtitulos[6].style.fontWeight = "900px";
                subtitulos[6].style.margin = "0";
                subtitulos[6].style.color = "red";

                    //Parrafo PRECIO
                const fecha = document.querySelectorAll(".precio");
                fecha[0].textContent = "Una investigación de la UNCUYO indaga en la utilización de machine learning aplicado al proceso de ...";
                fecha[0].style.color = "var(--obscuro)";
                fecha[0].style.fontSize = "1.5rem";
                fecha[1].textContent = "Se trata del Viedma, el cual alcanza los 900 m de profundidad según mediciones hechas en una zona ...";
                fecha[1].style.color = "var(--obscuro)";
                fecha[1].style.fontSize = "1.5rem"; 
                fecha[2].textContent = "Un equipo de investigadores de Argentina y Brasil logró identificar cuatro antígenos ...";
                fecha[2].style.color = "var(--obscuro)";
                fecha[2].style.fontSize = "1.5rem"; 
                fecha[3].textContent = "Una investigación de la UNCUYO analiza en profundidad los significados y sentidos que se construyen ...";
                fecha[3].style.color = "var(--obscuro)";
                fecha[3].style.fontSize = "1.5rem"; 
                fecha[4].textContent = "Un equipo de investigadores de la UNCUYO se inclina por el uso de dispositivos de lógica ...";
                fecha[4].style.color = "var(--obscuro)";
                fecha[4].style.fontSize = "1.5rem"; 
                fecha[5].textContent = "Investigadores de la UNCUYO y del CONICET demostraron que la Sinaptotagmina-1 trabaja de a pares y ...";
                fecha[5].style.color = "var(--obscuro)";
                fecha[5].style.fontSize = "1.5rem"; 
                fecha[6].textContent = "Investigadores de la UNCUYO y el CONICET comprobaron que Carvedilol tiene un 'efecto inhibitorio'";
                fecha[6].style.color = "var(--obscuro)";
                fecha[6].style.fontSize = "1.5rem"; 

//Agregandos Parrafos nuevos
let parrafo1 = document.createElement("p");
parrafo1.textContent = "30/SEP/2022";
let parrafo2 = document.createElement("p");
parrafo2.textContent = "11/JUL/2022";
let parrafo3 = document.createElement("p");
parrafo3.textContent = "07/JUN/2022";
let parrafo4 = document.createElement("p");
parrafo4.textContent = "02/MAY/2022";
let parrafo5 = document.createElement("p");
parrafo5.textContent = "06/ABR/2022";
let parrafo6 = document.createElement("p");
parrafo6.textContent = "17/MAR/2022";
let parrafo7 = document.createElement("p");
parrafo7.textContent = "02/MAR/2022";

//Agregando enlaces
const enlace1 = document.createElement("button");
enlace1.textContent = "Leer más ==>";
enlace1.style.borderRadius = "1rem";
enlace1.style.backgroundColor = "#0ffff8";
const enlace2 = document.createElement("button");
enlace2.textContent = "Leer más ==>";
enlace2.style.borderRadius = "1rem";
enlace2.style.backgroundColor = "#0ffff8";
const enlace3 = document.createElement("button");
enlace3.textContent = "Leer más ==>";
enlace3.style.borderRadius = "1rem";
enlace3.style.backgroundColor = "#0ffff8";
const enlace4 = document.createElement("button");
enlace4.textContent = "Leer más ==>";
enlace4.style.borderRadius = "1rem";
enlace4.style.backgroundColor = "#0ffff8";
const enlace5 = document.createElement("button");
enlace5.textContent = "Leer más ==>";
enlace5.style.borderRadius = "1rem";
enlace5.style.backgroundColor = "#0ffff8";
const enlace6 = document.createElement("button");
enlace6.textContent = "Leer más ==>";
enlace6.style.borderRadius = "1rem";
enlace6.style.backgroundColor = "#0ffff8";
const enlace7 = document.createElement("button");
enlace7.textContent = "Leer más ==>";
enlace7.style.borderRadius = "1rem";
enlace7.style.backgroundColor = "#0ffff8";
enlace1.addEventListener('mouseenter', function() {
    enlace1.style.background = 'white';
});
enlace1.addEventListener('click', function(){
    alert("BOTÓN NO DISPONIBLE");
});
enlace2.addEventListener('mouseenter', function() {
    enlace2.style.background = 'white';
});
enlace2.addEventListener('click', function(){
    alert("BOTÓN NO DISPONIBLE");
});
enlace3.addEventListener('mouseenter', function() {
    enlace3.style.background = 'white';
});
enlace3.addEventListener('click', function(){
    alert("BOTÓN NO DISPONIBLE");
});
enlace4.addEventListener('mouseenter', function() {
    enlace4.style.background = 'white';
});
enlace4.addEventListener('click', function(){
    alert("BOTÓN NO DISPONIBLE");
});
enlace5.addEventListener('mouseenter', function() {
    enlace5.style.background = 'white';
});
enlace5.addEventListener('click', function(){
    alert("BOTÓN NO DISPONIBLE");
});
enlace6.addEventListener('mouseenter', function() {
    enlace6.style.background = 'white';
});
enlace6.addEventListener('click', function(){
    alert("BOTÓN NO DISPONIBLE");
});
enlace7.addEventListener('mouseenter', function() {
    enlace7.style.background = 'white';
});
enlace7.addEventListener('click', function(){
    alert("BOTÓN NO DISPONIBLE");
});



const cuartoParrafo = document.querySelectorAll(".info")
cuartoParrafo[0].appendChild(parrafo1);   
cuartoParrafo[1].appendChild(parrafo2);   
cuartoParrafo[2].appendChild(parrafo3);  
cuartoParrafo[3].appendChild(parrafo4);  
cuartoParrafo[4].appendChild(parrafo5);  
cuartoParrafo[5].appendChild(parrafo6);  
cuartoParrafo[6].appendChild(parrafo7);  

let quintoParrafo = document.querySelectorAll(".info");
quintoParrafo[0].appendChild(enlace1);
quintoParrafo[1].appendChild(enlace2);
quintoParrafo[2].appendChild(enlace3);
quintoParrafo[3].appendChild(enlace4);
quintoParrafo[4].appendChild(enlace5);
quintoParrafo[5].appendChild(enlace6);
quintoParrafo[6].appendChild(enlace7);


//Modificando cards
const card = document.querySelectorAll(".card");
card[0].style.display = "inline-flex";
card[0].style.position = "relative";
card[0].style.border = "1px solid #e2e2e2";
card[0].style.backgroundColor = "#fff";
card[0].style.borderRadius = "5px";
card[0].style.padding = "1rem";

card[1].style.display = "inline-flex";
card[1].style.position = "relative";
card[1].style.border = "1px solid #e2e2e2";
card[1].style.backgroundColor = "#fff";
card[1].style.borderRadius = "5px";
card[1].style.padding = "1rem";

card[2].style.display = "inline-flex";
card[2].style.position = "relative";
card[2].style.border = "1px solid #e2e2e2";
card[2].style.backgroundColor = "#fff";
card[2].style.borderRadius = "5px";
card[2].style.padding = "1rem";

card[3].style.display = "inline-flex";
card[3].style.position = "relative";
card[3].style.border = "1px solid #e2e2e2";
card[3].style.backgroundColor = "#fff";
card[3].style.borderRadius = "5px";
card[3].style.padding = "1rem";

card[4].style.display = "inline-flex";
card[4].style.position = "relative";
card[4].style.border = "1px solid #e2e2e2";
card[4].style.backgroundColor = "#fff";
card[4].style.borderRadius = "5px";
card[4].style.padding = "1rem";

card[5].style.display = "inline-flex";
card[5].style.position = "relative";
card[5].style.border = "1px solid #e2e2e2";
card[5].style.backgroundColor = "#fff";
card[5].style.borderRadius = "5px";
card[5].style.padding = "1rem";

card[6].style.display = "inline-flex";
card[6].style.position = "relative";
card[6].style.border = "1px solid #e2e2e2";
card[6].style.backgroundColor = "#fff";
card[6].style.borderRadius = "5px";
card[6].style.padding = "1rem";



const cardParrafo = document.querySelectorAll(".info");
cardParrafo[0].style.padding = "3rem";
cardParrafo[0].style.backgroundColor = "white";

cardParrafo[1].style.padding = "3rem";
cardParrafo[1].style.backgroundColor = "white";

cardParrafo[2].style.padding = "3rem";
cardParrafo[2].style.backgroundColor = "white";

cardParrafo[3].style.padding = "3rem";
cardParrafo[3].style.backgroundColor = "white";

cardParrafo[4].style.padding = "3rem";
cardParrafo[4].style.backgroundColor = "white";

cardParrafo[5].style.padding = "3rem";
cardParrafo[5].style.backgroundColor = "white";

cardParrafo[6].style.padding = "3rem";
cardParrafo[6].style.backgroundColor = "white";

//Funciones "NO DISPONIBLE"



