console.log("Bonjour!");
console.log(8);
console.log(8 * 8);
let age = 20;// "let" pour créer la variable, "age" est le nom et "20" est ce qui lui est attribué initialement.
age = 23; //je réattribue une valeur, sans "let" car elle est créée
const nom = "Rémy"; /* Avec "const", la variable ne peut pas changer. 
Le "=" ne veut pas dire "égal", c'est une affectation de valeur.*/
console.log(`${nom} a ${age} ans.`);
const nombreDeQuestion = 20;
let score = 0;
console.log(score);
score +=5;
score ++;
score = score/2
console.log(score);
console.log(nombreDeQuestion);
console.log(typeof 25);
console.log(typeof "Bur");
console.log(typeof true);
console.log("10" + 5);
console.log("Bonjour " + "Rémy");

console.log("Essai petit progamme.");
const prenom = "Rémy";
console.log(`Bienvenue ${prenom}`);

const nombreDeQuestions = 20;
console.log(`Questions : ${nombreDeQuestions}`);

const bonnesRéponses = 16;
console.log(`Bonnes réponses : ${bonnesRéponses}`);

const mauvaisesRéponses = nombreDeQuestions - bonnesRéponses;
console.log(`Mauvaises réponses : ${mauvaisesRéponses}`);

const score2 = 14;
if (score2 >=10) {
    console.log("Examen réussi!");
} else {
    console.log("Examen échoué.");
}

const vitesse = 75;
if (vitesse >=50 && vitesse <=80) {
    console.log("Vitesse correcte.");
} else {
    console.log("Vitesse hors plage.");
}

console.log("ex22 :");
const notes = [8, 14, 6, 17, 12];
let compteur = 0;
for (let i=0; i <notes.length; i++){
    if (notes[i]>=10){
        compteur +=1;
    }
}
console.log(compteur)

console.log("Exercice bilan niveau 2.")
const notes2 = [12, 7, 16, 9, 14, 5, 18];
let ns10 = 0;
let totalNotes = 0
for (let i2=0; i2 < notes2.length; i2++){
    totalNotes += notes2[i2];
    if (notes2[i2] >= 10){
        ns10 += 1;
    }
}
console.log(ns10);
console.log(totalNotes);

console.log("Exercice bilan 2 niveau 2.")
const scores2 = [15, 8, 12, 6, 19];
function compterReussites(tableau){
    let compteur = 0;
    for (let i2 = 0; i2 < tableau.length; i2 ++){
        if (tableau[i2] >= 10){
            compteur += 1;
        }
    }
    return compteur;
}
const bonnesNotes = compterReussites(scores2);
console.log (bonnesNotes);

console.log("Exercice bilan 3 niveau 2.");
const reponses = [true, true, false, true, false, true];
function calculerResultat(donnees){
    let compteur = 0;
    for (let i = 0; i < donnees.length; i++){
        if (donnees[i]){
            compteur += 1;
        }
    }
    return compteur;
}
const score3 = calculerResultat(reponses);
console.log (score3);
if (score3 >= 5){
    console.log("Excellent");
} else if (score3 >= 3){
    console.log ("Réussi");
} else {
    console.log ("Echoué");
}