/*
Ce code JavaScript charge des ressources externes depuis le site accessibility-bookmarklets.org 
et exécute une fonction pour améliorer l'accessibilité des images sur la page web en utilisant 
des bookmarklets.
*/

javascript:if(window.a11yImages)window.a11yImages.run();else{(function(){var link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.href='https://accessibility-bookmarklets.org/build/styles.css';document.getElementsByTagName('head')[0].appendChild(link);var script=document.createElement('script');script.type='text/javascript';script.src='https://accessibility-bookmarklets.org/build/images.js';document.getElementsByTagName('head')[0].appendChild(script);})();}


