
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; 

const sectionEl = document.querySelector('section#container');
const play = document.querySelector('button#play');
const selectEl = document.querySelector("div > select");

let facileEl = document.getElementById("facile");
let mediaEl = document.getElementById("media");
let difficileEl = document.getElementById("difficile");






let n = 0;

mediaEl.addEventListener("click", function () {
    while (n < 81) {
        // creo l'elemento article;
        let articleEl = document.createElement("article");
    
        // aggiungi una classe; 
        articleEl.classList.add('casellaMedia', 'flex');
        // nel elemento article inserisco index;
        articleEl.append(n + 1);
    
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
    
        n += 1;
    }
})

difficileEl.addEventListener("click", function () {
    while (n < 49) {
        // creo l'elemento article;
        let articleEl = document.createElement("article");
    
        // aggiungi una classe; 
        articleEl.classList.add('casellaDifficile', 'flex');
        // nel elemento article inserisco index;
        articleEl.append(n + 1);
    
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
    
        n += 1;
    }
})

facileEl.addEventListener("click", function () {
    while (n < 100) {
        // creo l'elemento article;
        let articleEl = document.createElement("article");
    
        // aggiungi una classe; 
        articleEl.classList.add('casella', 'flex', );
        // nel elemento article inserisco index;
        articleEl.append(n + 1);
    
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
    
        n += 1;
    }
})

// inserisco un ciclo for che va da 0 a 100;
function getGrid(cells, addNewClass) {
    while (n < cells) {
        // creo l'elemento article;
        let articleEl = document.createElement("article");
    
        // aggiungi una classe; 
        articleEl.classList.add('casella', 'flex');
        // nel elemento article inserisco index;
        articleEl.append(n + 1);
    
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
    
        n += 1;
    }
}



