let Dialogue = [
    { user: "Licorne Codeuse", text: "Ahhh, rien de tel qu'une bonne matinée de codage ! Mon nouveau projet est presque terminé. Je suis une génie, mon code est parfait, comme d'habitude." },
    { user: "Lapin Bug", text: "Oh, vraiment ? Parfait, dis-tu ? Hihi, je crois que tu as oublié de fermer cette parenthèse ici... et là-bas aussi !" },
    { user: "Licorne Codeuse", text: "Quoi ?! Mais non, impossible ! Oh non, il y a des erreurs partout ! Comment est-ce possible ?!" },
    { user: "Lapin Bug", text: "Tu m'as sous-estimé, ma chère Licorne. Je suis le Bug, le maître du chaos dans ton monde parfait de lignes de code. Regarde ce que j'ai fait à ta boucle !" },
    { user: "Licorne Codeuse", text: "Mais pourquoi tu fais ça ?! Je veux juste écrire un beau code sans erreur !" },
    { user: "Lapin Bug", text: "Parce que c'est amusant ! Et avoue-le, tu te sentirais perdue sans moi. Qui d'autre te donnerait autant de défis à résoudre ?" },
    { user: "Licorne Codeuse", text: "Tu as peut-être raison... mais je finirai par te corriger, petit lapin ! Je vais traquer chaque bug, ligne par ligne, jusqu'à ce que tu disparaisses pour de bon !" },
    { user: "Lapin Bug", text: "Bonne chance avec ça ! Mais n'oublie pas, là où il y a du code, il y a toujours un petit bug quelque part..." },
    { user: "Licorne Codeuse", text: "On verra bien ! En attendant, je retourne au travail... et cette fois, je suis prête à tout !" }
];

// Ajoutez un écouteur d'événements au bouton "Commencer" :
// Cachez le texte de bienvenue et le bouton "Commencer".
// Affichez les images et la boîte de dialogue et le bouton suivant.
document.getElementById("welcomeText").style.color= "white";

let start = document.querySelector("#startButton");
const licorne = document.querySelector("#licorne");
const lapin = document.querySelector("#lapin");
const dialogue = document.querySelector("#dialogueBox");
const suivant = document.querySelector("#nextButton");
const recommencer = document.querySelector("#restartButton");
const bienvenue = document.querySelector("#welcomeText");
start.addEventListener("click", event => {


    licorne.style.display = "block";
    lapin.style.display = "block";
    dialogue.style.display = "block";
    suivant.style.display = "inline-block";
    recommencer.style.display = "none";
    bienvenue.style.display = "none";
    start.style.display = "none";

    displayNextLine();

})

document.getElementById('nextButton').addEventListener('click', () => {
    displayNextLine();

});


let currentIndex = 0;

function displayNextLine() {
    if (currentIndex < Dialogue.length) {
        // Récupère l'objet de dialogue correspondant à l'index actuel
        const LINE = Dialogue[currentIndex];

        // Sélectionne la boîte de dialogue dans le DOM
        const DIALOGUEBOX = document.getElementById("dialogueBox");

        DIALOGUEBOX.innerHTML = "";

        // Créer un nouvel élément de paragraphe pour afficher le texte
        const P = document.createElement('p');

        // Remplit le paragraphe avec le texte du dialogue actuel
        P.textContent = `${LINE.text}`

        // Ajoute le paragraphe avec le texte à la boîte de dialogue
        DIALOGUEBOX.appendChild(P);



        if(LINE.user === "Licorne Codeuse") {
            // Associe la classe "licorne" au paragraphe pour le styliser
            P.className = "licorne";

            // Ajoute les couleurs à la Licorne Codeuse.

            document.getElementById("licorne").classList.add("licorneBis");

            // Enlève les couleurs autours du Lapin Bug.

            document.getElementById("lapin").classList.remove("lapinBis");

        } else if (LINE.user === "Lapin Bug") {
            // Associe la classe "licorne" au paragraphe pour le styliser
            P.className = "lapin";

             // Ajoute les couleurs au Lapin Bug.

            document.getElementById("lapin").classList.add("lapinBis");

            // Enlève les couleurs autours à la Licorne Codeuse.

            document.getElementById("licorne").classList.remove("licorneBis");
        }

        currentIndex++;

    } else {
        document.getElementById('nextButton').style.display = "none";
        document.getElementById('restartButton').style.display = "inline-block";
    }
}


// Dans la fonction :
// Vérifie si le personnage qui parle est la Licorne Codeuse.
// Si c'est la licorne alors mettre le texte en rose et une bordure au tour de limage rose
// sinon faite en bleu pour le lapin


recommencer.addEventListener("click", event => {
    licorne.style.display = "none";
    lapin.style.display = "none";
    dialogue.style.display = "none";
    suivant.style.display = "none";
    recommencer.style.display = "none";
    bienvenue.style.display = "block";
    start.style.display = "inline-block";

    currentIndex = 0;
});



// Créez une variable "currentIndex" pour suivre la ligne de dialogue actuelle.
// Créer une fonction qui permet de lire le tableau
// Logique de la fonction
// si mon index actuel et inferieur à la taille de mon tableau alors ...'on affiche le dialogue'...
// sinon on fait disparaitre le button next et on affiche le button restarte

// Appeler la fonction au click sur le bouton commencer et suivant
// Ajouter + 1 à la fonction

// Récupère l'objet de dialogue correspondant à l'index actuel et affiche dans un console.log
