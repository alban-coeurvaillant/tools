Voici un exemple de code JavaScript qui peut être utilisé pour récupérer la liste des fichiers JavaScript chargés par une page web :

// Fonction pour récupérer la liste des fichiers JavaScript chargés
function getListeFichiersJS() {
    // Sélectionner tous les éléments script de la page
    var scripts = document.getElementsByTagName('script');
    var jsFiles = [];

    // Parcourir tous les éléments script
    for (var i = 0; i < scripts.length; i++) {
        // Vérifier si l'élément script a un attribut src
        if (scripts[i].src !== '') {
            // Ajouter l'URL du fichier JavaScript à la liste
            jsFiles.push(scripts[i].src);
        }
    }

    // Retourner la liste des fichiers JavaScript chargés
    return jsFiles;
}

// Appeler la fonction pour récupérer la liste des fichiers JavaScript et l'afficher dans la console
var listeFichiersJS = getListeFichiersJS();
console.log("Liste des fichiers JavaScript chargés : ");
console.log(listeFichiersJS);


Si vous souhaitez filtrer uniquement les URL des fichiers JavaScript contenant le mot-clé "static", vous pouvez ajuster le code JavaScript comme suit :

// Fonction pour récupérer la liste des URL des fichiers JavaScript contenant "static"
function getListeFichiersJSContenantStatic() {
    // Sélectionner tous les éléments script de la page
    var scripts = document.getElementsByTagName('script');
    var jsFiles = [];

    // Parcourir tous les éléments script
    for (var i = 0; i < scripts.length; i++) {
        // Vérifier si l'élément script a un attribut src et si l'URL contient "static"
        if (scripts[i].src !== '' && scripts[i].src.includes("static")) {
            // Ajouter l'URL du fichier JavaScript à la liste
            jsFiles.push(scripts[i].src);
        }
    }

    // Retourner la liste des URL des fichiers JavaScript contenant "static"
    return jsFiles;
}

