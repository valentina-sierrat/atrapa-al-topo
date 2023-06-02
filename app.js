const cuadrado=document.querySelector(".cuadro");
const tiempofaltante=document.querySelector("#tiempo");
let puntaje=document.getElementById("puntaje");

let resultado=0;
let tiempoactual=tiempofaltante.textContent;

function cuadroazar {
  cuadrado.forEach(nombredeclase=>){
    nombredeclase.classList.remove("topo");
  })
  let posicionalazar=cuadrado[Math.floor(Math.random()* 9)]
  posicionalazar.classList.add("topo");
  posiciontopo.posicionalazar.Id
}
cuadrado.forEach(identificador=>){
  identificador.addEvenListener("click"()=>){
    if(identificador.Id===posiciontopo){
      resultado=resultado+1;
      puntaje.textContent=resultado;
      posiciontopo=null;
    }
  })
})

function movertopo (){
  tiempotopo = setInterval(cuadroazar,700);
}
movertopo();

function cuentaregresiva (){
  tiempoactual--;
  tiempofaltante.textContent = tiempoactual;
  if (tiempoactual=== 0){
    clearInterval(idtiempo);
    clearInterval(tiempotopo);
    alert ("Se acabo el tiempo, tu puntaje fue:" + resultado + "Topos atrapados:");
    }
}


