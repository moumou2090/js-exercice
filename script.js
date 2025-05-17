// Problème 1 : Somme des éléments distincts dans deux ensembles

function sommeElementsDistincts(ensemble1, ensemble2) {
  let somme = 0;

  // Ajouter les éléments de ensemble1 qui ne sont pas dans ensemble2
  for (let i = 0; i < ensemble1.length; i++) {
    if (!ensemble2.includes(ensemble1[i])) {
      somme += ensemble1[i];
    }
  }

  // Ajouter les éléments de ensemble2 qui ne sont pas dans ensemble1
  for (let j = 0; j < ensemble2.length; j++) {
    if (!ensemble1.includes(ensemble2[j])) {
      somme += ensemble2[j];
    }
  }

  return somme;
}

// Test du problème 1
let ensembleA = [3, 1, 7, 9];
let ensembleB = [2, 4, 1, 9, 3];

console.log("Résultat problème 1 :", sommeElementsDistincts(ensembleA, ensembleB)); // 13


// Problème 2 : Calcul du produit scalaire et vérification de l'orthogonalité

// Fonction qui calcule le produit scalaire de deux vecteurs
function produitScalaire(vecteur1, vecteur2) {
  let produit = 0;
  for (let i = 0; i < vecteur1.length; i++) {
    produit += vecteur1[i] * vecteur2[i];
  }
  return produit;
}

// Fonction qui vérifie l'orthogonalité pour n paires de vecteurs
function verifierOrthogonalite(pairesDeVecteurs) {
  for (let i = 0; i < pairesDeVecteurs.length; i++) {
    let v1 = pairesDeVecteurs[i][0];
    let v2 = pairesDeVecteurs[i][1];
    let produit = produitScalaire(v1, v2);

    if (produit === 0) {
      console.log(`La paire numéro ${i + 1} est orthogonale.`);
    } else {
      console.log(`La paire numéro ${i + 1} n'est pas orthogonale.`);
    }
  }
}

// Test du problème 2
let paires = [
  [[1, 0], [0, 1]],   // Orthogonale
  [[1, 2], [2, 4]],   // Pas orthogonale
  [[2, -3], [3, 2]]   // Orthogonale
];

verifierOrthogonalite(paires);
