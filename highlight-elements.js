// En résumé, ce code injecte du CSS dans la page actuelle pour mettre en évidence 
// tous les éléments HTML avec des attributs class et id, en leur appliquant 
// des bordures en pointillés rouges et en affichant leur classe ou identifiant. 
// Les classes sont affichées en rouge et les identifiants en bleu.

 javascript:!function(){
    let e=document.createElement("style");
    e.innerHTML='[class],[id]{position:relative;outline:2px dashed red}[class]::after,[class]::before,[id]::after,[id]::before{position:absolute;top:0;left:0;z-index:1;padding:.25em;background-color:red;color:#fff;font-weight:400;font-family:sans-serif;font-size:.9rem;border:1px solid #fff}[class][class]::before,[id][class]::before{content:"." attr(class)}[class][id]::after,[id][id]::after{content:"#" attr(id);right:0;left:auto;background-color:#00f}[class][id],[id][id]{outline-color:#00f}';
    document.head.appendChild(e)
}();

