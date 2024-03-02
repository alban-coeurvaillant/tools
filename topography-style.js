/* En résumé, ce script génère une série de styles CSS pour différents sélecteurs sur la page en 
utilisant des couleurs de fond et de bordure spécifiques, puis les applique dynamiquement
à la page pour modifier son apparence.
*/

javascript:(function(){var s="body",c="",I=" ! important;",i,b,f,x,h; for(i=0;i<17;++i) { x = i.toString(16); b = i>15?%22FCC%22:x+x+x;%20f%20=%20i%3E9?%22000%22:%22FFF%22;%20c%20+=%20s%20+%20%22%20{background:%20#%22%20+%20b%20+%20I%20+%20%22border:%201px%20outset%20#%22%20+%20b%20+%20I%20+%20%22color:%20#%22%20+%20f%20+%20I%20+%20%22}\n%22;%20s%20+=%20%22%20*%22;%20}%20if(document.createStyleSheet)%20{%20document.createStyleSheet(%22javascript:'%22+c+%22'%22);%20}%20else%20{%20h=document.createElement('link');%20h.rel='stylesheet';%20h.href='data:text/css,'+escape(c);%20document.getElementsByTagName(%22head%22)[0].appendChild(h);}})()






