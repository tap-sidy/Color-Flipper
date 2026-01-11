// Récupère la balise <body> du document HTML
const body = document.getElementsByTagName("body")[0];
body.style.backgroundColor = "Pink";

// Fonction qui reçoit une couleur en paramètre
function setColor(name) {
  body.style.backgroundColor = name;
}

// Fonction qui génère une couleur aléatoire
function randomColor() {
  // Génère un nombre aléatoire pour le rouge (0 à 255)
  const red = Math.random() * 255;

  // Génère un nombre aléatoire pour le vert (0 à 255)
  const green = Math.random() * 255;

  // Génère un nombre aléatoire pour le bleu (0 à 255)
  const blue = Math.random() * 255;

  // Génère un nombre aléatoire pour le rouge (0 à 255)
  const color = `rgb(${red},${green},${blue})`;

  // Applique la couleur aléatoire au fond de la page
  body.style.backgroundColor = color;
}

randomColor();
