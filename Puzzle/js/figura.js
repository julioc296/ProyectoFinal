class Figura extends Image{
    id;//0:ninja 1:villano 2:shuriken 3:moneda 
    x;
    y;
    ancho;
    alto;
    velocidad;
    automov;
    direccion;//w:arriba s:abajo a:izquierda d:derecha false:quieto
    timer;
    existe;
    
    constructor(id, x, y, ancho, alto, velocidad, fuente, automov, direccion){
        super(ancho, alto);
        this.timer = Date.now();
        this.id = id;
        this.x = x;
        this.y = y;
        this.velocidad = velocidad;
        this.src = fuente;
        this.automov = automov;
        this.direccion = direccion;
        this.existe = true;
    }

    dibujar(ctx){
        this.onload = function(){
            if (this.automov){
                this.mover(this.direccion);
            }
            ctx.drawImage(this, this.x, this.y, this.width, this.height);
            
        }
        this.src = this.src;
             
    }

    

    mover(direccion){
        if (this.id == 0){
            switch(direccion){
            
                case 'w':
                case 'W':
                case 'ArrowUp':
                    if (this.y-this.velocidad>=50){
                        this.y-=this.velocidad;
                    }
                    break;
                case 's':
                case 'S':
                case 'ArrowDown':
                    if (this.y+this.velocidad<=400){
                        this.y+=this.velocidad;
                    }break;
                case 'a':
                case 'A':              
                case 'ArrowLeft':
                    if (this.x-this.velocidad>=50){
                        this.x-=this.velocidad;
                    }break;
                case 'd':
                case 'D':
                case 'ArrowRight':
                    if (this.x+this.velocidad<=900){
                        this.x+=this.velocidad;
                    }
                    break;
                case 'as':
                    break;
        }
    }else{
        switch(direccion){
            
            case 'w':
            case 'W':
            case 'ArrowUp':
                
                    this.y-=this.velocidad;
                
                break;
            case 's':
            case 'S':
            case 'ArrowDown':
                
                    this.y+=this.velocidad;
                break;
               
            case 'a':
            case 'A':              
            case 'ArrowLeft':
                
                    this.x-=this.velocidad;
               break;
            case 'd':
            case 'D':
            case 'ArrowRight':
                
                    this.x+=this.velocidad;
                
                break;
            

        }
    }}

    detectarColision(ninja, figurasPantalla){
        let colision = false;
        for (let imagen of figurasPantalla) {
            if (imagen.id!=0){

            }
        }

        

    }

    test(){}




}