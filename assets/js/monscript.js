let valider = document.getElementById('valider');
var choice = document.querySelector('select');
var rowDuChoix =  document.getElementById('rowDuChoix');
var choixSelector = document.getElementById('choixSelector');
var tableSelector = document.getElementById('tableSelector')
var jeu = document.getElementById('jeu');
let resetBtn = document.getElementById('resetBtn')
var formRow = document.getElementById('formRow');
let startBtn = document.getElementById('startBtn');
let checkBtn = document.getElementById('answerSend');
let answer = document.getElementById('answer').value;
let answerCheck = '';
let congratulations = document.getElementById('congratulations');
var score = '';
var questionNb = '';

score = 0;
questionNb = 0;

// Reset

resetBtn.addEventListener('click', reset)

function reset() {
  //Réapparait
  choixSelector.style.display = 'block'
  tableSelector.style.display = 'block'
  formRow.style.display = 'block'
  //Disparait
  resetBtn.style.display = 'none'
  finalScore.style.display = 'none'
  congratulations.innerText = ''
  questionNb = 0;
  score = 0;
  document.getElementById('score').innerText = `0/5`;
  document.getElementById('questionNb').innerText = `0/5`;
  let calcul = document.getElementById('calcul');
  choixSelector.style.display = 'flex'
  calcul.innerText = '';
  let affichageTable = document.getElementById('tableChoisie');
  affichageTable.innerText = ''
  choice.value = 0;
}

//Choix de la table

choice.addEventListener('change', function() {
  let tableChoisie = choice.value;
  let affichageTable = document.getElementById('tableChoisie');
  affichageTable.style.display= 'block'
  affichageTable.innerText = `Tu as choisis la table de ${tableChoisie}`;
  let startBtn =  document.getElementById('startBtn');
//Disparait
  tableSelector.style.display = 'none'
  formRow.style.display = 'none'
//Répparait
  startBtn.style.display = 'block';
});

//Génération de l'inconnue
function hasard(min, max) {
  return min+Math.floor(Math.random()*(max-min+1));
}

//Génération Calcul au clic
startBtn.addEventListener('click', operation)

//génération Calcul
function operation() {
  let affichageTable = document.getElementById('tableChoisie');
  let answerZone = document.getElementById('answer');
  answerZone.value = '';
  affichageTable.style.display= 'none';
  startBtn.style.display = 'none';
  choixSelector.style.display = 'none';
  answerZone.style.display = 'block';
  checkBtn.style.display = 'block';
  if (questionNb < 5) {
    let a = choice.value;
    let b = hasard(1, 10);
    let calcul = document.getElementById('calcul');
    calcul.innerText = `Combien font: ${a} x ${b} ?`;
    answerCheck = (a * b)
    console.log(`La Réponse est ${answerCheck}`);
    return answerCheck;
  } else {
    let finalScore = document.getElementById('finalScore')
    let answerZone = document.getElementById('answer')
    let resetBtn = document.getElementById('resetBtn')
    let calcul = document.getElementById('calcul');
    calcul.innerText = ``;
    answerZone.style.display = 'none'
    checkBtn.style.display = 'none'
    finalScore.style.display = 'block'
    resetBtn.style.display = 'block'
    finalScore.innerText = `Ton Score est de: ${score}/5`
  }
};



function bonneReponse() {
  score += 1;
  questionNb += 1;
  document.getElementById('score').innerText = `${score}/5`
  document.getElementById('questionNb').innerText = `${questionNb}/5`
  operation()
}

function mauvaiseReponse() {
  questionNb += 1;
  document.getElementById('questionNb').innerText = `Question ${questionNb}/5`
  operation()
}

//Vérification et poursuite du test

checkBtn.addEventListener('click', function() {
  let answer = document.getElementById('answer').value;
  console.log(`${answer} et ${answerCheck}`)
    if (answer == answerCheck) {
    congratulations.innerText = `Bravo !`;
    bonneReponse();
  } else {
    congratulations.innerText = `Essaye encore...`;
    mauvaiseReponse();
  }
})