const plateau = document.getElementById('plateau');
const message = document.getElementById('message');
let joueur = 'X';
let grille = ['', '', '', '', '', '', '', '', ''];
let jeuActif = true;

function afficherMessage(txt) {
  message.textContent = txt;
}

function verifierVictoire() {
  const combinaisons = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // lignes
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // colonnes
    [0, 4, 8],
    [2, 4, 6] // diagonales
  ];

  for (let combo of combinaisons) {
    const [a, b, c] = combo;
    if (grille[a] && grille[a] === grille[b] && grille[a] === grille[c]) {
      return true;
    }
  }
  return false;
}

function verifierEgalite() {
  return grille.every((cell) => cell !== '');
}

function jouerCase(index) {
  if (!jeuActif || grille[index] !== '') return;

  grille[index] = joueur;
  document.getElementById('case-' + index).textContent = joueur;

  if (verifierVictoire()) {
    afficherMessage('Le joueur' + $`${{ joueur }}a gagné !`);
    jeuActif = false;
    setTimeout(reinitialiser, 2000);
  } else if (verifierEgalite()) {
    afficherMessage('Match nul !');
    jeuActif = false;
    setTimeout(reinitialiser, 2000);
  } else {
    joueur = joueur === 'X' ? 'O' : 'X';
    afficherMessage(`Au tour du joueur${$}`, joueur);
  }
}

function creerGrille() {
  plateau.innerHTML = '';
  grille = ['', '', '', '', '', '', '', '', ''];
  jeuActif = true;
  joueur = 'X';
  afficherMessage('Au tour du joueur X');

  for (let i = 0; i < 9; i++) {
    const cellule = document.createElement('div');
    cellule.classList.add('case');
    cellule.id = 'case-' + i;
    cellule.addEventListener('click', () => jouerCase(i));
    plateau.appendChild(cellule);
  }
}

function reinitialiser() {
  creerGrille();
}

creerGrille();
