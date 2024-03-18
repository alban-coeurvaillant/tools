javascript:(function() {
    const linkElements = document.querySelectorAll('link[rel="stylesheet"]');
    const cssLinks = [];
    linkElements.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            cssLinks.push(href);
        }
    });
    console.log('Liens des fichiers CSS :', cssLinks);
})();
