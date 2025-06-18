// Tableau de mots à deviner
let motsATrouver = [
  'ALCHEMISTE',
  'ARCHER',
  'ARMURE',
  'BATAILLE',
  'BOSS',
  'BOUCLIER',
  'CARAVANE',
  'CHAMAN',
  'CHATEAU',
  'CHEVALIER',
  'CLAN',
  'CONJURATION',
  'COURONNE',
  'CREPUSCULE',
  'CRISTAL',
  'DEMON',
  'DESTIN',
  'DIMENSION',
  'DONJON',
  'DRAGON',
  'DRUIDE',
  'ECLAT',
  'ECLIPSE',
  'ECUYER',
  'ELIXIR',
  'ENCHANTEMENT',
  'ENFER',
  'ENIGME',
  'ENVOUTEMENT',
  'EPEE',
  'ETHER',
  'EXPERIENCE',
  'FANTOME',
  'FEE',
  'FLAMME',
  'FORGE',
  'FORTERESSE',
  'GEOLE',
  'GOBELIN',
  'GOULE',
  'GRIFFON',
  'GRIMOIRE',
  'GUERRIER',
  'GUILDE',
  'HALLEBARDE',
  'HEROS',
  'HERITAGE',
  'INVOCATION',
  'INVISIBILITE',
  'KATANA',
  'LABYRINTHE',
  'LEGENDE',
  'LICH',
  'LIVRE',
  'LUNE',
  'MAITRE',
  'MALEDICTION',
  'MANA',
  'MANNE',
  'MARTEAU',
  'MAGICIEN',
  'MEDAILLON',
  'MIRAGE',
  'MONSTRE',
  'MONTURE',
  'MURMURE',
  'MYSTERE',
  'NECROMANCIEN',
  'OBSCURITE',
  'OMBRE',
  'ORACLE',
  'PALADIN',
  'PARCHEMIN',
  'PAPILLON',
  'PHENIX',
  'POISON',
  'PORTAIL',
  'PRESTIGE',
  'PRINCE',
  'PROPHETIE',
  'QUETE',
  'RAGE',
  'REGENERATION',
  'RELIQUE',
  'RITUEL',
  'RUISSEAU',
  'RUNE',
  'SANCTUM',
  'SANG',
  'SANCTUAIRE',
  'SCEPTRE',
  'SORCELLERIE',
  'SORCIERE',
  'SORTILEGE',
  'TAVERNE',
  'TEMPETE',
  'TROLL',
  'VAMPIRE',
  'VOLCAN'
];

// Math.floor() arrondit un décimal à l'entier inférieur (2.99 donne 2).
// Math.random() est une fonction qui génère un nombre compris entre 0 et 1 non inclus (de 0 à 0.9999).
let motSecret = motsATrouver[Math.floor(Math.random() * motsATrouver.length)];

// Crée un tableau doté d'entrées vides.
let lettresTrouvées = [];

// Boucle qui permet de remplacer les lettres du mot généré par un underscore ( _ ) en parcourant chaque lettre du motSecret
for (let i = 0; i < motSecret.length; i++) {
  lettresTrouvées.push('_');
}

// La fleur est dotée de 12 pétales qui tombent deux par deux.
let tentativesRestantes = 6;

/**
 * Permet d'afficher le mot généré en remplaçant les lettres par des underscores et de joindre des espaces entre chacune d'elles.
 * @param {}
 * @returns {}
 */
function afficherMot() {
  document.getElementById('word').textContent = lettresTrouvées.join(' ');
}

afficherMot();

// Partie clavier + vérification lettre :
const lettresClavier = document.querySelectorAll('.letter');

const pétales = document.querySelectorAll('.petal');

let erreurs = 0;

let jeuTerminé = false;

/**
 * Fonction de vérification de la lettre choisie.
 * @param {string} lettre
 * @returns {}
 */
function verifierLettre(lettre) {
  if (jeuTerminé) return;

  let lettreTrouvée = false;

  // Vérifie si la lettre est dans le mot en testant les index de chaque lettre
  for (let i = 0; i < motSecret.length; i++) {
    if (motSecret[i] === lettre) {
      lettresTrouvées[i] = lettre;
      lettreTrouvée = true;
    }
  }

  // Si mauvaise lettre, alors plus (+) d'erreurs et moins de tentatives
  if (!lettreTrouvée) {
    tentativesRestantes--;
    erreurs++;

    const petales = document.querySelectorAll('.petal');
    const indexDepart = (erreurs - 1) * 2;

    // Faire tomber 2 pétales par mauvaise lettre
    for (let i = indexDepart; i < indexDepart + 2; i++) {
      if (petales[i]) {
        petales[i].classList.add('fall');
      }
    }

    // Animation en cas d'échec : si le nombre de tentatives restantes est inférieur ou égal à 0, alors le jeu se termine et l'alerte d'échec s'affiche au bout de 500ms.
    if (tentativesRestantes <= 0) {
      jeuTerminé = true;
      setTimeout(() => {
        alert("C'est perdu ! Le mot était : " + motSecret);
      }, 500);
    }
  }
}

// Pour chaque lettre du clavier, on ajoute un écouteur d'évènement au click qui permet d'afficher le texte associé, soit la lettre en question avec vérification de son existence / emplacement.
lettresClavier.forEach((element) => {
  element.addEventListener('click', (event) => {
    if (jeuTerminé) return;
    const lettreCliquée = event.target.textContent;
    verifierLettre(lettreCliquée);
    afficherMot();

    // Animation en cas de victoire : si le mot ne comporte plus d'underscore, alors le jeu est gagné et se termine. Les lettres cliaquées sont grisées et le curseur change. L'alerte s'affiche au bout de 50ms.
    setTimeout(() => {
      if (!lettresTrouvées.includes('_')) {
        jeuTerminé = true;
        alert('Bravo ! Tu as trouvé le mot !');
      }
    }, 50);

    event.target.style.cursor = 'not-allowed';
    event.target.style.backgroundColor = 'grey';
    event.target.style.color = '#5e5e5e';
    event.target.style.boxShadow = 'none';
    event.target.style.opacity = '0.6';
  });
});

// Bouton Nouveau Mot.
const newGame = document.getElementById('new-game');

/**
 * Permet de remettre le jeu à son état d'origine, à savoir les lettres remplacées par des underscores, les douze pétales sur la fleur, toutes les tentatives restaurées.
 * @param {}
 * @returns {}
 */
function redemarrerJeu() {
  motSecret = motsATrouver[Math.floor(Math.random() * motsATrouver.length)];
  lettresTrouvées = Array(motSecret.length).fill('_');
  tentativesRestantes = 6;
  erreurs = 0;
  jeuTerminé = false;
  afficherMot();

  // Réinitialise les pétales
  const petales = document.querySelectorAll('.petal');
  petales.forEach((petale) => {
    petale.classList.remove('fall');
  });

  // Réinitialise le clavier et le style des touches
  lettresClavier.forEach((element) => {
    element.style.cursor = 'pointer';
    element.style.backgroundColor = '';
    element.style.color = 'purple';
    element.style.boxShadow = '2px 2px 2px #a75aa7';
    element.style.opacity = '1';
  });
}

// Écouteur d'évènement pour permettre de lancer la fonction de réinitialisation du jeu au click.
newGame.addEventListener('click', () => {
  redemarrerJeu();
});
