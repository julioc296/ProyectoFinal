//Juego recoger monedas con ninja

var canvas = document.getElementById("miCanvas");
var ctx = canvas.getContext("2d");
var figurasPantalla = [];//Arreglo elementos aparecen en pantalla

//Dibuja ninja 
var ninja = new Figura(0, 250, 420, 50, 50, 10, "img/ninja.png", false, "as");
figurasPantalla.push(ninja);

//Establece nivel
var nivel = new Nivel(1, 2000, 5000, 3000);

function dibujar(){
    
    for (let imagen of figurasPantalla) {
        if (imagen.existe){
            imagen.dibujar(ctx);
        }else{

        }
        
                
    }
    
    canvas.width = canvas.width;
}
setInterval(dibujar,1000/45);
function jugar(){
    let villano = nivel.crearVillano();
        moneda = nivel.crearMoneda();
        
    figurasPantalla = nivel.estadoNivel(20, figurasPantalla);
    
    if (villano != null){
        figurasPantalla=figurasPantalla.concat(villano);
    }
    if (moneda != null){
        figurasPantalla.push(moneda);
    }
    
    
}
setInterval(jugar,1000);

//Mover ninja
window.addEventListener('keydown',(e)=>{    
    ninja.mover(e.key);    
  
})



