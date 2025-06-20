// Grille de base
const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
//
const announce = document.querySelector('.announce');

let currentPlayer = 'X';

// Constante des victoires
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
//
// Fonction pour activer la victoire dès qu'une séquence est remplie avec Some()
// On crée une boucle dans le tableau jusqu'à rencontrer une victoire pour retourner true sinon
// il continue et retourne false si le dernier combo n'est pas gagnant
function checkWin() {
  return winCombos.some((combo) => {
    return combo.every((index) => cells[index].textContent === currentPlayer);
    // Every : exécute une fonction sur chaque élément de la combinaison actuelle et on vérifie que la cellule correspondant à chaque
    // index de la combinaison ait à chaque fois le même signe du joueur
  });
}

// Fonction du match nul pour vérifier que toutes les cellules sont remplies ET de signes différents
function checkDraw() {
  return [...cells].every((cell) => cell.textContent !== ''); // ( ... ) permet d'avoir un tableau
}

// Fonction pour passer du X au O alternativement
function switchPlayer() {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else if (currentPlayer === 'O') {
    currentPlayer = 'X';
  }
}
//

function handleClick(event) {
  const cell = event.target;

  if (!cell.classList.contains('cell') || cell.textContent !== '')
    // SI 'Cellule' Contient une Classe nommée Cell ET ( || ) si la cellule est vide, alors (sans (!))
    // Condition inversée avec le (!)
    return;
  cell.textContent = currentPlayer;
  if (checkWin()) {
    announce.textContent = currentPlayer + ' a gagné !';
    board.removeEventListener('click', handleClick);
  } else if (checkDraw()) {
    announce.textContent = 'Match nul';
    board.removeEventListener('click', handleClick);
  } else {
    switchPlayer();
  }
}

board.addEventListener('click', handleClick);
