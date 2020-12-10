class Figura extends Image {
  tipo;//0:ninja 1:villano 2:shuriken 3:moneda 4:background
  x;
  y;
  ancho;
  alto;
  velocidad;
  automov;
  direccion;//w:arriba s:abajo a:izquierda d:derecha default:quieto
  timer;
  teclado = {}
  teclasFlechas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
  };
  teclasWASD = {
    UP: 87,
    DOWN: 83,
    LEFT: 65,
    RIGHT: 68
  };

  constructor(tipo, x, y, ancho, alto, velocidad, fuente, automov, direccion) {
    super(ancho, alto);
    this.timer = Date.now();
    this.tipo = tipo;
    this.x = x;
    this.y = y;
    this.velocidad = velocidad;
    this.src = fuente;
    this.automov = automov;
    this.direccion = direccion;
  }

  dibujar(ctx) {
    this.onload = function () {
      if (this.automov) this.mover(this.direccion);
      ctx.drawImage(this, this.x, this.y, this.width, this.height)
      if (this.tipo == "shuriken" || this.tipo == "moneda") this.detectarColision();      
    }
    this.src = this.src
  }

  mover(direccion) {

    if (this.tipo == "ninja") {
      this.teclado[direccion.keyCode] = direccion.type == 'keydown'
      

      if (direccion.type == 'keyup') return


      if (this.teclado[this.teclasFlechas.UP]) {
        if (this.y - this.velocidad >= 50) this.y -= this.velocidad
      }
      if (this.teclado[this.teclasFlechas.DOWN]) {
        if (this.y + this.velocidad <= 400) this.y += this.velocidad
      }
      if (this.teclado[this.teclasFlechas.RIGHT]) {
        if (this.x + this.velocidad <= 900) this.x += this.velocidad
      }
      if (this.teclado[this.teclasFlechas.LEFT]) {
        if (this.x - this.velocidad >= 50) this.x -= this.velocidad
      }

      if (this.teclado[this.teclasWASD.UP]) {
        if (this.y - this.velocidad >= 50) this.y -= this.velocidad
      }
      if (this.teclado[this.teclasWASD.DOWN]) {
        if (this.y + this.velocidad <= 400) this.y += this.velocidad
      }
      if (this.teclado[this.teclasWASD.RIGHT]) {
        if (this.x + this.velocidad <= 900) this.x += this.velocidad
      }
      if (this.teclado[this.teclasWASD.LEFT]) {
        if (this.x - this.velocidad >= 50) this.x -= this.velocidad
      }

    } else {
      switch (direccion) {

        case 'w':
        case 'W':
        case 'ArrowUp':
          this.y -= this.velocidad
          break
        case 's':
        case 'S':
        case 'ArrowDown':
          this.y += this.velocidad
          break
        case 'a':
        case 'A':
        case 'ArrowLeft':
          this.x -= this.velocidad
          break
        case 'd':
        case 'D':
        case 'ArrowRight':
          this.x += this.velocidad
          break
      }
    }
    
  }

  detectarColision(){

/*
      shuriken
      ninja
      moneda
      
      comparar los x,
       elegir más izquierdo
       si final izquierdo > inicio derecho : cumple x
       elegir más arriba
       si final arriba > inicio abajo: cumple y
       si x && y:  reportar colision*/
       
      let colisionX = false,
          colisionY = false,
          izquierdo,
          derecho,
          arriba,
          abajo;
      if (this.x <= figurasPantalla[1].x){
        izquierdo = this;
        derecho = figurasPantalla[1]
      }else{
        izquierdo = figurasPantalla[1];
        derecho = this        
      }
      if (this.y <= figurasPantalla[1].y){
        arriba = this;
        abajo = figurasPantalla[1]
      }else{
        arriba = figurasPantalla[1];
        abajo = this        
      }
      if (izquierdo.x + izquierdo.width > derecho.x) colisionX = true;
      if (arriba.y + arriba.height > abajo.y) colisionY = true;
      if (colisionX && colisionY){
        if (this.tipo == "moneda"){
          jugador.recolectarMoneda(this);
        }else{
          jugador.perderVida(this)
        }
      }


      
  }
}






