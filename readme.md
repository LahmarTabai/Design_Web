## HTML :

* Il a enlevé les balises Méta 
* div main => main comme balise
* Logo => Il pouvait la créer directement sur "https://favicon.io/favicon-generator/"
* Pas d'utilisation de H1  => Il fallait utiliser H1 puis H2 puis H3...
* Ce Site n'est pas sémantique
* Il N'ya pas d'icone dans la barre de navigation => Il n'ya pas de favicon
* Plusieurs Erreurs au niveau d'accessibilité
* Il manque la meta description pour le referencement 
* Pas de Form dans le HTML
* Beacoup de Div => Au moins en utilisant un div + Role
* Lien dans un button => Il faut utiliser Button simplement de type submit
* Une balise form pour le login
* il manque un header, main, footer

## CSS : 

* Les mesures sont en px => Il faut être à jour et utiliser rem au lieu de px.
* Pas de reset => Il faut voir mon ficheir Reset
* Ce Site n'est pas responsive => Il faut le modifier pour qu'il devient Responsive + "@media screen"
* Ce Site n'est pas optimisé 

# JS

* Pas d'initialisation du DOM => Pour que le DOM se charge complètement avant, puis c'est le tour du Js qui se charge : la solution est avec ces lignes de codes :

"  
document.addEventListener("DOMContentLoaded", () => {
       console.log("loaded");
    });
"

* Pas d'utilisation du transcompileur Babel => Babel est un Transpileur, un type de compilateur qui sert compiler du code source d’un certain langage de programmation en du code source d’un autre langage de programmation. En ce qui concerne Babel, il permet de convertir du Javascript en du…Javascript ! Pour être plus précis, il permet de convertir du code javascript récent (syntaxe ES2015+) en du code javascript capable d’être interprété par des vieux navigateurs.

Vous Pouvez voir ma doc pour installer Babel : [voir ici](https://hackmd.io/bZvOVKIzRkGtriZmZD8bOQ)


* Il y'a pas de stockage dans le LocalStorage => Utiliser les Fonctionnalités en Js pour stocker et récupérer des données 
* Utulisation des fonction à l'anciennes => fonction fléchés c'est plus optimisées



![](/asset/image.PNG)


Pour voir le site : [voir Site](https://lahmartabai.github.io/Design_Web/)
