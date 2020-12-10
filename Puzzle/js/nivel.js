class Nivel {
    level; //Nivel en que se encuentra el juego (5 niveles, se usa intervalo 0-4 para facilitar indexado)
    fondoCanvas = ["img/nivel1.jpg", "img/nivel2.jpg", "img/nivel3.jpg", "img/nivel4.jpg", "img/nivel5.jpg"]; //fondos de pantalla de cada nivel
    frecuenciaVillano = [6000, 5000, 4000, 3000, 2000];
    frecuenciaMoneda = [3000, 3000, 5000, 5000, 6000];
    duracionMoneda = [20000, 15000, 10000, 7000, 5000];
    velocidadShuriken = [2, 3, 5, 6, 7]
    ultimoVillano = 0; //tiempo creacion ultimo villano
    ultimaMoneda = 0;


    constructor(level) {
        this.level = level;
    }
    crearVillano() {
        if (Date.now() - this.ultimoVillano >= this.frecuenciaVillano[this.level]) {
            let random = Math.floor(Math.random() * (4 - 0)) + 0;
            let random2 = 0;
            switch (random) {
                case 0:
                    random2 = Math.floor(Math.random() * (901 - 100)) + 100;
                    var villano = new Figura("villano", random2, random, 50,  50, 0, "img/villano.png", false, "x");
                    var shuriken = new Figura("shuriken", villano.x, villano.y + 25, 50, 50, this.velocidadShuriken[this.level], "img/shuriken.png", true, "s");
                    break;
                case 1:
                    random = 450;
                    random2 = Math.floor(Math.random() * (901 - 100)) + 100;
                    var villano = new Figura("villano", random2, random, 50, 50, 0, "img/villano.png", false, "x");
                    var shuriken = new Figura("shuriken", villano.x, villano.y + 25, 50, 50, this.velocidadShuriken[this.level], "img/shuriken.png", true, "w");
                    break;
                case 2:
                    random = 0;
                    random2 = Math.floor(Math.random() * (401 - 100)) + 100;
                    var villano = new Figura("villano", random, random2, 50, 50, 0, "img/villano.png", false, "x");
                    var shuriken = new Figura("shuriken", villano.x + 25, villano.y, 50, 50, this.velocidadShuriken[this.level], "img/shuriken.png", true, "d");
                    break;
                case 3:
                    random = 950;
                    random2 = Math.floor(Math.random() * (401 - 100)) + 100;
                    var villano = new Figura("villano", random, random2, 50, 50, 0, "img/villano.png", false, "x");
                    var shuriken = new Figura("shuriken", villano.x - 25, villano.y, 50, 50, this.velocidadShuriken[this.level], "img/shuriken.png", true, "a");
                    break;
            }

            this.ultimoVillano = Date.now();
            let retorno = [villano, shuriken];
            return retorno;
        }


    }
    crearMoneda() {
        if (Date.now() - this.ultimaMoneda >= this.frecuenciaMoneda[this.level]) {
            let random = Math.floor(Math.random() * (901 - 100)) + 100;
            let random2 = Math.floor(Math.random() * (451 - 100)) + 100;
            this.ultimaMoneda = Date.now();
            return new Figura("moneda", random, random2, 25, 25, 0, "img/moneda.png", false, "as");
        }
    }
    aumentarNivel(){
        
        switch(jugador.puntaje){
            case 3:
            case 6:
            case 10:
            case 15:
                this.level++
                figurasPantalla[0].src = this.fondoCanvas[this.level];


            }
    }
}