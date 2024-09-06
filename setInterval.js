const interval = setInterval(() => {
  const element = document.querySelector('.mon-element');
  if (element) {
    console.log('Élément trouvé!');
    clearInterval(interval); // Arrêter l'intervalle
  }
}, 1000); // Vérifier toutes les secondes
