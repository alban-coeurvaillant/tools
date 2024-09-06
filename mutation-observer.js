const observer = new MutationObserver((mutations, observer) => {
  const element = document.querySelector('.mon-element');
  if (element) {
    console.log('Élément trouvé!');
    observer.disconnect(); // Arrêter l'observation
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
