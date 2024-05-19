
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; 

const sectionEl = document.querySelector('section#container');
const play = document.querySelector('button#play');
const selectEl = document.querySelector("div > select");

let facileEl = document.createElement("option");
let mediaEl = document.createElement("option");
let difficileEl = document.createElement("option");

facileEl.append("Facile");
mediaEl.append("Media");
difficileEl.append("Difficile");

selectEl.appendChild(facileEl);
selectEl.appendChild(mediaEl);
selectEl.appendChild(difficileEl);





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


