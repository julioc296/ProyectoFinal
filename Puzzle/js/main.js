//Juego recoger monedas con ninja

var canvas = document.getElementById("miCanvas"),
    ctx = canvas.getContext("2d"),
    figurasPantalla = [];//Arreglo elementos aparecen en pantalla
    jugador = new Jugador("", 0)

function jugar() {
    let jugador = new Jugador("Nombre", 0)
        nivel = new Nivel(0);
    figurasPantalla.push(new Figura("fondo", 0, 0, canvas.width, canvas.height, 0, nivel.fondoCanvas[nivel.level], false, "default"));
    figurasPantalla.push(new Figura("ninja", canvas.width / 2, canvas.height / 2, 50, 50, 10, "img/ninja.png", false, "default"));
    figurasPantalla.push(new Figura("vidas", 0, 0, 25, 25, 10, "img/vida.png", false, "default"));
    figurasPantalla.push(new Figura("vidas", 26, 0, 25, 25, 10, "img/vida.png", false, "default"));
    figurasPantalla.push(new Figura("vidas", 52, 0, 25, 25, 10, "img/vida.png", false, "default"));
    figurasPantalla.push(new Figura("cofre", 840, 0, 50, 35, 10, "img/cofre.png", false, "default"));
    requestAnimationFrame(dibujar);
}

function dibujar() {
    for (let imagen of figurasPantalla) {
        imagen.dibujar(ctx);
    }
    ctx.font = "30px Pokemon GB";
    ctx.fillStyle = "#F0E68C";
    ctx.fillText("X", 890, 30);
    ctx.fillText(jugador.puntaje, 920, 30);
    ctx.fillStyle = "black";
    ctx.font = "15px Pokemon GB";
    let level = nivel.level + 1
    if (level == 5) level = "max"
    ctx.fillText(("Nivel " + level), 200, 20)
    if (jugador.vidas>0) requestAnimationFrame(dibujar);

}

//Controla la aparicion de villanos y monedas
function controlNivel() {
    limpiarVillanos();
    limpiarMonedas(nivel.duracionMoneda[nivel.level]);
    let villano = nivel.crearVillano();
        moneda = nivel.crearMoneda();
    if (villano != undefined) figurasPantalla = figurasPantalla.concat(villano);
    if (moneda != undefined) figurasPantalla.push(moneda);
}
setInterval(controlNivel, 1000)

function limpiarVillanos() {
    for (let imagen of figurasPantalla) {
        if (imagen.tipo == "villano") figurasPantalla.splice(figurasPantalla.indexOf(imagen), 1)
    }
}

function limpiarMonedas(duracionMoneda) {
    for (let imagen of figurasPantalla) {
        let tiempoActivo = Date.now() - imagen.timer;
        if (imagen.tipo == "monedad" && tiempoActivo >= duracionMoneda) figurasPantalla.splice(figurasPantalla.indexOf(imagen), 1)
    }
}

//Mover ninja
window.addEventListener('keydown', (e) => {
    figurasPantalla[1].mover(e);
})
window.addEventListener('keyup', (e) => {
    figurasPantalla[1].mover(e);
})
jugar();
