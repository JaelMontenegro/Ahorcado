String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 

//Uso: palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);

const palabras = ['casa','perro','gato','elefante'];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos = 0;
document.querySelector('#output').innerHTML = palabraConGuiones;
document.querySelector('#calcular').addEventListener('click',()=>{
  const letra = document.querySelector('#letra').value;
  let haFallado = true;
  for(const i in palabra){
    if(letra == palabra[i]){
        palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
        haFallado = false;
    }
  }
   if(haFallado){
      contadorFallos++
      var canvas = document.getElementById("humano-canvas");
  var ctx = canvas.getContext("2d");

  switch (contadorFallos) {
    case 0:
      //Horca3
      ctx.moveTo(100, 10);
      ctx.lineTo(100, 30);
      break;
    case 1:
      //Horca
      ctx.moveTo(10, 10);
      ctx.lineTo(10, 200);
      break;
    case 2:
      //Horca2
      ctx.moveTo(10, 10);
      ctx.lineTo(100, 10);
      break;
    case 3:
      //cabeza
      ctx.moveTo(100, 30);
      ctx.arc(100, 50, 20, -(1.0 / 2.0) * Math.PI, (3.0 / 2.0) * Math.PI);
      break;
    case 4:
      //dorso
      ctx.moveTo(100, 70);
      ctx.lineTo(100, 150);
      break;
    case 5:
      //brazo derecho
      ctx.moveTo(100, 90);
      ctx.lineTo(75, 140);
      break;
    case 6:
      //brazo izquierdo
      ctx.moveTo(100, 90);
      ctx.lineTo(125, 140);
      break;
    case 7:
      //pierna derecha
      ctx.moveTo(100, 150);
      ctx.lineTo(75, 200);
      break;
    case 8:
      //pierna izquierda
      ctx.moveTo(100, 150);
      ctx.lineTo(125, 200);
      break;
    default:
      alert("perdiste el juego")
  }

  if (contadorFallos<9 && palabraConGuiones.indexOf('_')<0){
      document.querySelector('#ganador').style.display = 'flex';
  } 


  ctx.stroke();
   }
 

  document.querySelector('#output').innerHTML = palabraConGuiones;
  document.querySelector('#letra').value = ''; 
  document.querySelector('#letra').focus();
});