# Jeu du Pendu

**Le jeu des pétales tombants**
-> Variante du célèbre jeu du pendu.
-> Ici, les pétales chutent de la fleur à chaque mauvaise lettre.
-> Douze pétales pour six essais, les pétales tombent par deux.

**Objectif du projet**
-> Créer un jeu animé et fonctionnel du pendu pour une personne avec une base de données contenant des mots prédéfinis.

**Découpage du projet**
-> Préparation de l'HTML et de la feuille de style pour un rendu botanique printanier coloré avec un clavier cliquable.

-> Préparation des mots à trouver (cents mots ont été générés sur un thème spécifique, de longueurs variées pour mélanger les difficultés)

-> Préparation du mot à générer et l'afficher en remplaçant les lettres par des underscores.

-> Activation du clavier cliquable (unique moyen de remplir les underscores, ici pas d'utilisation du clavier classique) et ajout d'écouteurs d'évènement pour rendre inactives les lettres choisies (grisées et curseur not-allowed)

-> Vérification des lettres choisies et conditions posées : en cas de mauvais choix, deux pétales s'animent et chutent de la fleur (une chance de moins).

Si le mot est trouvé, une alerte de victoire se déclenche.
Si le mot n'est pas trouvé, une alerte d'échec se déclenche avec affichage du mot qu'il fallait deviner.

Dans les deux cas, le jeu se termine : le clavier devient inactif pour empêcher l'ajout de nouvelles lettres.

-> Activation du bouton de réinitialisation pour que le clavier redevienne actif, que les lettres reprennent leur style initial, la fleur retrouve tous ses pétales et les chances sont remontées à six. Un nouveau mot est généré.

**Fonctions principales**
-> Fonction Math.random() pour générer un mot aléatoire dans le tableau de mots à trouver.

-> Fonction afficherMot() pour permettre d'afficher le mot généré en remplaçant les lettres par les underscores et ajouter des espaces entre les lettres.

-> Fonction verifierLettre() pour vérifier si la lettre choisie fait partie du mot ou non et l'arrêter si le jeu est terminé.
-> Conditions mises en cas de victoire ou d'échec.

-> Fonction redemarrerJeu() qui permet la complète réinitialisation du plateau de jeu (clavier, fleur, mot).
