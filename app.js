
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}


function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let angular = document.getElementById("angular");
crearBarra(angular);
let java = document.getElementById("java");
crearBarra(java);
let c = document.getElementById("c");
crearBarra(c);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);


let contadores = [-1,-1,-1,-1,-1,-1];

let entro = false;


function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 9, 1, intervalJavascript);
        },100);
        const intervalangular = setInterval(function(){
            pintarBarra(angular, 6, 2, intervalangular);
        },100);
        const intervaljava = setInterval(function(){
            pintarBarra(java, 11, 3, intervaljava);
        },100);
        const intervalc = setInterval(function(){
            pintarBarra(c, 10, 4, intervalc);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 16, 5, intervalIlustrator);
        },100);
    }
}


function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#1abc9c";
    }else{
        clearInterval(interval)
    }
}


window.onscroll = function(){
    efectoHabilidades();
}