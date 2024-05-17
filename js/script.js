
// 9 quando clicco l'elemento aggiungo una classe che colora l'elemento e aggiungo console.log(article[index]);

const sectionEl = document.querySelector('section#container');
const play = document.querySelector('button#play');
// inserisco un ciclo for che va da 0 a 100;
for (let index = 0; index < 100; index++) {
    // creo l'elemento article;
    let articleEl = document.createElement("article");
    // aggiungi una classe; 
    articleEl.classList.add('casella', 'flex');
    // nel elemento article inserisco index;
    articleEl.append(index + 1);
    // article figlio di section;
    sectionEl.appendChild(articleEl);
    // aggiungo addEvenentListener (click);
    articleEl.addEventListener("click", function () {
        articleEl.classList.add('attiva');
        console.log(articleEl.innerHTML);
    });

    play.addEventListener('click', function () {
        articleEl.classList.remove('attiva');
    })
    console.log(articleEl);
}


