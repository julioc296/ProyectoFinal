class Jugador{
    nick;
    vidas = 3;
    puntaje;
    
    constructor(nick, puntaje){
        this.nick = nick;        
        this.puntaje = puntaje;
    }

    recolectarMoneda(moneda){
        for (let imagen of figurasPantalla){
            if (imagen === moneda) figurasPantalla.splice (figurasPantalla.indexOf(imagen), 1);
        }
        this.puntaje ++
        nivel.aumentarNivel()
    }

    perderVida(shuriken){
        for (let imagen of figurasPantalla){
            if (imagen === shuriken) figurasPantalla.splice (figurasPantalla.indexOf(imagen), 1);
        }
        if (this.vidas == 3){
            figurasPantalla[4].src= "img/noVida.png"
        }else if (this.vidas == 2){
            figurasPantalla[3].src= "img/Novida.png"            
        }else{
            figurasPantalla[2].src= "img/Novida.png"

        }
        
        this.vidas--
    }
}