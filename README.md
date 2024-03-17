# InsightEdu

## Présentation du Projet

InsightEdu est une plateforme de suivi de compétences développée spécifiquement pour l'ISFEC (Institut Supérieur de Formation de l'Enseignement Catholique). Cette plateforme vise à aider les enseignants de l'éducation catholique à suivre leur progression dans l'acquisition des compétences nécessaires à leur métier.

Ce README sert à la fois de manuel utilisateur pour le déploiement et de documentation technique. Il fournit des instructions détaillées sur l'installation, l'exécution en mode développement, l'utilisation de la plateforme, la construction du projet pour le déploiement, ainsi que des explications sur le fonctionnement du login et le calcul des pourcentages des compétences des apprenants. De plus, il aborde les plans futurs concernant l'intégration de tests unitaires avec Jest et l'utilisation de Storybook pour la visualisation des composants.

## Installation

Pour installer InsightEdu localement, suivez ces étapes :

1. Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine.

2. Clonez ce dépôt sur votre ordinateur :
   ```bash
   https://github.com/Onijjam/insightedu
   ```
3. Accédez au répertoire du projet :
   ```bash
   https://github.com/Onijjam/insightedu
   ```
4. Installez les dépendances du projet :
   ```bash
   npm install
   ```
## Exécution en Mode Développement

Une fois les dépendances installées, vous pouvez lancer InsightEdu en mode développement en suivant ces étapes :

1. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```
2. Ouvrez votre navigateur et accédez à l'adresse suivante :
   ```text
   http://localhost:3000
   ```
## Utilisation

Pour accéder à la plateforme, utilisez les identifiants suivants :

- Pour un apprenant :
   - Email : user@test.com
   - Mot de passe : password

- Pour un formateur :
   - Email : formateur@test.com
   - Mot de passe : password
   
## Construction du Projet (Déploiement)

Pour construire InsightEdu en vue d'un déploiement en production, suivez ces étapes :

1. Exécutez la commande de construction :
   ```bash
   npm run build
   ```
2. Les fichiers construits seront disponibles dans le répertoire `dist`.
3. Vous pouvez ensuite déployer ces fichiers sur votre serveur ou une plateforme de déploiement statique.

## Fonctionnement du Login

Dans InsightEdu, le fonctionnement du login est géré par le composant `App.jsx`. Ce composant utilise les états `useState` pour gérer la connexion de l'utilisateur ainsi que les actions associées telles que la déconnexion et la création de mot de passe.

**Code Exemple (App.jsx) :**


```jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false);
const navigate = useNavigate();

const handleLogin = () => {
// Code de vérification des informations de connexion
setIsLoggedIn(true);
navigate('/dashboard');
};

const handleDisconnectUser = () => {
// Code de déconnexion de l'utilisateur
setIsLoggedIn(false);
sessionStorage.clear(); // Efface les données de session
};

// Le reste du code...
};
```

Une fois que l'utilisateur est connecté avec succès, la fonction `handleLogin` est appelée, mettant à jour l'état de connexion `isLoggedIn` et redirigeant l'utilisateur vers la page appropriée à l'aide de `useNavigate` fourni par React Router.

De même, la déconnexion est gérée par la fonction `handleDisconnectUser`, qui met à jour l'état de connexion et les données de session.

Il est important de noter que ce système de login utilise le `sessionStorage` pour stocker temporairement les informations de connexion. Cette solution sera remplacée par une solution plus robuste comme `auth.js` (https://authjs.dev/) une fois que la connexion au backend sera effective.

De plus, le choix du tableau de bord approprié est géré dans le fichier `root.jsx` en fonction du rôle utilisateur. Cette logique permet d'offrir une expérience personnalisée à chaque utilisateur dès qu'il se connecte.

Pour plus de détails sur le fonctionnement spécifique de chaque composant et sur la manière dont ils interagissent, vous pouvez consulter les fichiers mentionnés (`App.jsx`, `NavBar.jsx`, `root.jsx`) et examiner les interactions entre eux.

## Calcul des Pourcentages des Compétences des Apprenants

Dans InsightEdu, les pourcentages des compétences des apprenants sont calculés en fonction des points attribués à chaque compétence et de leur niveau. Le calcul est effectué en suivant les étapes suivantes :

### Attribution des Points :

Chaque compétence est associée à un ensemble de points, représentant différents niveaux de maîtrise. Les compétences sont regroupées en cinq catégories majeures : Service public d'éducation, Service de la réussite de tous les élèves, Acteurs de la communauté éducative, Porteur de savoirs et d'une culture commune, et Experts des apprentissages.

**Code Exemple (Compétences.jsx) :**

```jsx
const SumComp = [
{
educationPublique: {
R: 1,
C: 1,
},
educationReussite: {
E: 2,
R: 1,
N: 2,
D: 2,
},
// Autres catégories...
},
]
```
### Calcul des Points Acquis :

Pour chaque compétence, les points attribués sont multipliés par une valeur correspondant à leur niveau de maîtrise. Les valeurs utilisées sont les suivantes : Novice (N) = 0, Débutant (D) = 1, Compétent (C) = 2, Expert (E) = 3, et Ressource (R) = 4.

**Code Exemple (Compétences.jsx) :**

```jsx
const valueMap = {
    N: 0,
    D: 1,
    C: 2,
    E: 3,
    R: 4
};
```

### Calcul du Total des Points :

Les points attribués à chaque compétence sont multipliés par le nombre total de compétences dans chaque catégorie majeure, puis multipliés par 4 pour obtenir le total des points possibles pour chaque catégorie majeure.

**Code Exemple (Compétences.jsx) :**

```jsx
const calculateCompletionPercentage = comp => {
    let totalPoints = 0;
    let achievedPoints = 0;

    for (const subComp in comp) {
        const subCompValues = comp[subComp];
        const keys = Object.keys(subCompValues);
        const test = Object.values(keys).map(value => {
            return subCompValues[value] * valueMap[value];
        });
        const subPoints = Object.values(comp[subComp]).map(value => value);
        achievedPoints += test.reduce((a, b) => a + b, 0);
        totalPoints += subPoints.reduce((a, b) => a + b, 0) * 4;
    }

    return Math.round((achievedPoints / totalPoints) * 100);
};
```

### Calcul du Pourcentage :
Le pourcentage de complétion pour chaque catégorie majeure est calculé en divisant les points acquis par le total des points possibles, puis en multipliant le résultat par 100 pour obtenir un pourcentage.

***Code Exemple (Compétences.jsx) :***

```jsx
const percentages = {};

SumComp.forEach(comp => {
    for (const compName in comp) {
        percentages[compName] = calculateCompletionPercentage({[compName]: comp[compName]});
    }
});
```

Une fois les pourcentages calculés pour chaque catégorie majeure, ils sont utilisés pour afficher la progression des compétences des apprenants dans l'interface utilisateur.

Pour plus de détails sur le fonctionnement spécifique de chaque composant et sur la manière dont ils interagissent, vous pouvez consulter les fichiers mentionnés (`Compétences.jsx`, `CompMineurs.jsx`, `CompDetails.jsx`) et examiner les interactions entre eux.

## Tailwind CSS

Tailwind CSS est un framework CSS utilitaire qui permet de créer rapidement des interfaces utilisateur personnalisées avec un minimum d'effort. Contrairement aux autres frameworks CSS tels que Bootstrap ou Foundation qui fournissent des composants pré-conçus, Tailwind CSS se concentre sur les classes utilitaires pour styler directement les éléments HTML.

### Bienfaits de Tailwind CSS :

- **Flexibilité :** Tailwind CSS offre une flexibilité maximale en vous permettant de personnaliser chaque aspect de votre interface utilisateur en combinant les classes utilitaires selon vos besoins.

- **Taille du fichier :** Tailwind CSS est conçu pour être léger et modulaire, ce qui permet de réduire la taille du fichier CSS généré et d'optimiser les performances du site web.

- **Productivité :** Grâce à son approche basée sur les classes utilitaires, Tailwind CSS accélère le processus de développement en éliminant le besoin d'écrire du CSS personnalisé pour chaque élément.

### Fonctionnement de Tailwind CSS :

Tailwind CSS repose sur un ensemble de classes utilitaires prédéfinies qui sont appliquées directement aux éléments HTML. Par exemple, pour définir la couleur de fond d'un élément, vous pouvez utiliser la classe `bg-blue-500`, où `bg` signifie "background" et `blue-500` indique la nuance de bleu.

Voici un exemple d'utilisation de Tailwind CSS pour styler un bouton :

```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Bouton
</button>
```

Dans cet exemple, les classes utilitaires sont utilisées pour définir la couleur de fond, la couleur du texte, la police, le padding, la bordure arrondie, etc. Cela permet de personnaliser rapidement et efficacement l'apparence du bouton sans écrire de CSS personnalisé.

Voici l'exemple de la même stylisation de bouton, mais cette fois-ci écrit en CSS classique pour mieux illustrer la différence avec l'utilisation de Tailwind CSS :

```html
<button class="my-button">
  Bouton
</button>
```

Dans un fichier CSS séparé :

```css
/* styles.css */

.my-button {
  background-color: #4299e1; /* Fond bleu */
  color: #ffffff; /* Texte blanc */
  font-weight: bold; /* Texte en gras */
  padding: 0.5rem 1rem; /* Padding */
  border-radius: 0.25rem; /* Bordure arrondie */
}

.my-button:hover {
  background-color: #3182ce; /* Fond bleu plus foncé au survol */
}
```

Dans cet exemple, les styles sont appliqués à l'aide d'une classe personnalisée .my-button dans un fichier CSS séparé. Contrairement à l'exemple précédent avec Tailwind CSS, où les styles sont définis directement dans les classes HTML, cette approche nécessite l'écriture de CSS supplémentaire pour chaque élément stylisé, ce qui peut entraîner une duplication de code et rendre la maintenance plus difficile.

## Tests Unitaires et Storybook

À l'heure actuelle, InsightEdu ne dispose pas de tests unitaires ou de Storybook pour valider le fonctionnement de ses composants et fonctionnalités. Cependant, l'intégration de tests est une priorité pour assurer la qualité et la fiabilité du code.

### Tests Unitaires avec Jest

Nous envisageons d'intégrer Jest, un framework de test JavaScript populaire, pour écrire et exécuter des tests unitaires sur les différentes parties de notre application. Les tests unitaires permettront de vérifier le comportement des fonctions, des composants et des modules de manière isolée, garantissant ainsi que chaque élément fonctionne comme prévu.

### Storybook pour la Visualisation des Composants

En plus des tests unitaires, nous prévoyons d'utiliser Storybook, un outil de développement pour les composants d'interface utilisateur, afin de visualiser et de tester nos composants de manière interactive. Storybook permettra de voir chaque composant dans différents états et configurations, facilitant ainsi le développement, le débogage et la collaboration.

## Conclusion

Il est à noter que ce document n'a pas couvert chaque composant individuellement, mais s'est concentré sur les systèmes principaux du code. Pour une compréhension complète du fonctionnement de l'application, nous encourageons les lecteurs à explorer le code source et à consulter les fichiers mentionnés dans ce document.

Nous espérons que ce README servira de ressource utile pour les utilisateurs et les contributeurs du projet.