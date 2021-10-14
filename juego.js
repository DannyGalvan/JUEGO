var sonido_button = new Audio();
sonido_button.src="button-click-off-click.mp3";
var sonido_elementos = new Audio();
sonido_elementos.src="sonido.mp3";

let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById('puntos_usuario');
const cpuScore_span = document.getElementById('puntos_cpu');
const name_span = document.getElementById('name_user')

const restar = document.getElementById('restar');
restar.addEventListener("click",resetear);
const modal = document.querySelector(".modal");
const piedra_div = document.getElementById("piedra");
const papel_div = document.getElementById("papel");
const tijera_div = document.getElementById('tijera');

var nombre = prompt("Cual es tu Nombre?")

function asignacion()
{
  name_span.innerHTML = nombre;
}

function main() {
  piedra_div.addEventListener('click', function() {
    play('piedra');
  })

  papel_div.addEventListener('click', function() {
    play('papel');
  })

  tijera_div.addEventListener('click', function() {
    play('tijera');
  })
}

function opcionesCpu()
{
    const elementos = ["piedra","papel","tijera"];
    const numerorandom = Math.floor(Math.random()*3);
    return elementos[numerorandom];
    console.log(numerorandom);
}

function win(userChoice, cpuChoice)
 {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  resultado.innerHTML = `<h1 class="ganador">Ganaste</h1> <p class="ganador">CPU escogio <strong>${cpuChoice}</strong></p> <p class="ganador">Tú escogiste <strong>${userChoice}</strong></p>`;
  modal.style.display = 'block';
}

function lose(userChoice, cpuChoice)
 {
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  resultado.innerHTML = `<h1 class="perdedor">Perdiste</h1> <p class="perdedor">CPU escogio <strong>${cpuChoice}</strong></p> <p class="perdedor">Tu escogiste <strong>${userChoice}</strong></p>`;
  modal.style.display = 'block';
}

function draw(userChoice, cpuChoice)
 { 
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  resultado.innerHTML = `<h1 class="empate">Empataron</h1> <p class="empate">CPU escogio <strong>${cpuChoice}</strong></p> <p class="empate">Tú escogiste <strong>${userChoice}</strong></p>`;
  modal.style.display = 'block';
}

function play(userChoice)
{
  const cpuChoice = opcionesCpu();
  switch (userChoice + cpuChoice) {
    case 'piedratijera':
    case 'papelpiedra':
    case 'tijerapapel':
      win(userChoice, cpuChoice);
      break;
    case 'piedrapapel':
    case 'papeltijera':
    case 'tijerapiedra':
      lose(userChoice, cpuChoice);
      break;
    case 'piedrapiedra':
    case 'papelpapel':
    case 'tijeratijera':
      draw(userChoice, cpuChoice);
      break;
  }
}

function limpiarModal(e)
{
    if (e.target == modal)
    {
      modal.style.display = "none";
    }
}

function resetear()
{
  userScore = 0;
  cpuScore = 0;
  userScore_span.innerHTML = 0;
  cpuScore_span.innerHTML = 0;
}

window.addEventListener("click",limpiarModal);
main();
asignacion();
