//Déclarations initiales
  //Boutons
let startBtn = document.getElementById('startBtn');
let checkBtn = document.getElementById('answerSend');
let resetBtn = document.getElementById('resetBtn')
  //Selecteur
let choice = document.querySelector('select');
let rowDuChoix =  document.getElementById('rowDuChoix');
let choixSelector = document.getElementById('choixSelector');
  //Déclaration Initiale compteurs de scores
let score = '';
let questionNb = '';
score = 0;
questionNb = 0;

// Reset: event & fonction
resetBtn.addEventListener('click', reset)

function reset() {
  //Déclarations
let calcul = document.getElementById('calcul');
let affichageTable = document.getElementById('tableChoisie');
let formRow = document.getElementById('formRow');
let congratulations = document.getElementById('congratulations');
  //Disparitions
  resetBtn.style.display = 'none'
  finalScore.style.display = 'none'
  congratulations.innerText = ''
  //Apparitions
  choixSelector.style.display = 'block'
  formRow.style.display = 'block'
  //Remise à zéro des compteurs et affichages
  questionNb = 0;
  score = 0;
  document.getElementById('score').innerText = `0/5`;
  document.getElementById('questionNb').innerText = `0/5`;
  calcul.innerText = '';
  affichageTable.innerText = ''
  choice.value = 0;
}

//Choix de la table
choice.addEventListener('change', function() {
  //Déclarations
  let tableChoisie = choice.value;
  let affichageTable = document.getElementById('tableChoisie');
  let startBtn =  document.getElementById('startBtn');
  let formRow = document.getElementById('formRow');
  //Disparitions
  choixSelector.style.display = 'none'
  formRow.style.display = 'none'
  //Apparitions
  startBtn.style.display = 'block';
  affichageTable.style.display= 'block'

  affichageTable.innerText = `Tu as choisis la table de ${tableChoisie}`;
});

//Génération de l'inconnue
function hasard(min, max) {
  return min+Math.floor(Math.random()*(max-min+1));
}

//Génération du Calcul: Event & Fonction
startBtn.addEventListener('click', operation)

function operation() {
  //Déclarations
  let affichageTable = document.getElementById('tableChoisie');
  let answerZone = document.getElementById('answer');
  //Disparitions
  answerZone.value = '';
  affichageTable.style.display= 'none';
  startBtn.style.display = 'none';
  choixSelector.style.display = 'none';
  //Apparitions
  answerZone.style.display = 'block';
  checkBtn.style.display = 'block';
  //Conditions
  if (questionNb < 5) {
    //Déclarations
    let a = choice.value;
    let b = hasard(1, 10);
    let calcul = document.getElementById('calcul');
    //Affichage
    calcul.innerText = `Combien font: ${a} x ${b} ?`;
    //Vérification
    answerCheck = (a * b)
    //Retour du résultat
    return answerCheck;
  } else {
    //Déclarations
    let finalScore = document.getElementById('finalScore')
    let answerZone = document.getElementById('answer')
    let resetBtn = document.getElementById('resetBtn')
    let calcul = document.getElementById('calcul');
    //Disparitions
    calcul.innerText = ``;
    answerZone.style.display = 'none'
    checkBtn.style.display = 'none'
    //Apparitions
    finalScore.style.display = 'block'
    resetBtn.style.display = 'block'
    finalScore.innerText = `Ton Score est de: ${score}/5`
  }
};

//Résultats 
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

//Event bouton de vérification et poursuite du test
checkBtn.addEventListener('click', function() {
  //Déclarations
  let answer = document.getElementById('answer').value;
  let congratulations = document.getElementById('congratulations');
  //Conditions
    if (answer == answerCheck) {
    congratulations.innerText = `Bravo !`;
    bonneReponse();
  } else {
    congratulations.innerText = `Essaye encore...`;
    mauvaiseReponse();
  }
})