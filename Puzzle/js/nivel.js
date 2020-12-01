class Nivel{
    level;
    timerVillano = 1000;
    timerMoneda;
    intervaloVillano;
    intervaloMoneda=5000;
    timer=0;
    lastMoneda=0;

    
    constructor(level, intervaloVillano, intervaloMoneda, timerMoneda){
        this.level = level;
        this.intervaloVillano = intervaloVillano;
        this.timerMoneda = timerMoneda;
    }
    crearVillano(){
        if (Date.now()-this.timer>=this.intervaloVillano){
            let random = Math.floor(Math.random() * (4 - 0)) + 0;
            let random2 = 0;
        switch(random){
        case 0:            
            random2 = Math.floor(Math.random() * (901 - 100)) + 100;   
            var villano = new Figura(1, random2, random, 50, 50, 0, "img/villano.png", false, "as");
            var shuriken = new Figura(2, villano.x, villano.y+25, 50, 50, 5, "img/shuriken.png", true,"s");
            break;     
        case 1:
            random = 450;
            random2 = Math.floor(Math.random() * (901 - 100)) + 100;
            var villano = new Figura(1, random2, random, 50, 50, 0, "img/villano.png", false, "as");
            var shuriken = new Figura(2, villano.x, villano.y+25, 50, 50, 5, "img/shuriken.png", true,"w");
            break;
        case 2:
            random = 0;
            random2 = Math.floor(Math.random() * (401 - 100)) + 100;
            var villano = new Figura(1, random, random2, 50, 50, 0, "img/villano.png", false, "as");
            var shuriken = new Figura(2, villano.x+25, villano.y, 50, 50, 5, "img/shuriken.png", true,"d");
            break;
        case 3:
            random = 950;
            random2 = Math.floor(Math.random() * (401 - 100)) + 100;
            var villano = new Figura(1, random, random2, 50, 50, 0, "img/villano.png", false, "as");
            var shuriken = new Figura(2, villano.x-25, villano.y, 50, 50, 5, "img/shuriken.png", true,"a");
            break;
    }
        
        this.timer = Date.now();
        
        let retorno = [villano, shuriken];
        
        return retorno;
        
            
        }
        

    }
    crearMoneda(){
        if (Date.now()-this.lastMoneda>=this.intervaloMoneda){
            let  random2 = Math.floor(Math.random() * (901 - 100)) + 100;   
            var moneda = new Figura(3, random2, 400, 25, 25, 0, "img/moneda.png", false, "as");
            this.lastMoneda = Date.now();
            return moneda;
        }
    }
    estadoNivel(puntaje, figurasPantalla){
        for (let imagen of figurasPantalla) {

            if(imagen.id == 3){
                if (Date.now()-imagen.timer>=this.timerMoneda){
                    let i = figurasPantalla.indexOf(imagen);
                    figurasPantalla.splice(i, 1);
                }
            } 
            if(imagen.id == 1){
                if (Date.now()-imagen.timer>=this.timerVillano){
                    let i = figurasPantalla.indexOf(imagen);
                    figurasPantalla.splice(i, 1);
                }
            }  
            if(imagen.id == 2){
        
                if (imagen.x < 0 || imagen.x > 1000){
                    let i = figurasPantalla.indexOf(imagen);
                    figurasPantalla.splice(i, 1);
                }                
                if (imagen.y < 0 || imagen.y > 500){
                    let i = figurasPantalla.indexOf(imagen);
                    figurasPantalla.splice(i, 1);
                }
            }  
            
            
        }
        return figurasPantalla;


    }
}