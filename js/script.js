
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; 

const sectionEl = document.querySelector('section#container');
const play = document.querySelector('button#play');
const selectEl = document.querySelector("div > select");





/* play.addEventListener("click", function () {
    mediaEl = getGrid('81', "difficoltà-media");
})

play.addEventListener("click", function () {
    difficileEl = getGrid("49", "difficoltà-difficile");
})
 */
play.addEventListener("click", function () {

    getGrid(100, "difficoltà-facile", sectionEl);
    console.log(selectEl.value)
})

// inserisco un ciclo for che va da 0 a 100;
function getGrid(cells, addNewClass, containerEl) {
    containerEl.innerHTML = "";
    let n = 0;
    while (n < cells) {
        // creo l'elemento article;
        let articleEl = document.createElement("article");
    
        // aggiungi una classe; 
        articleEl.classList.add('casella', 'flex', addNewClass);
        
        // nel elemento article inserisco index;
        articleEl.append(n + 1);
    
        // article figlio di section;
        sectionEl.appendChild(articleEl);
        
        // aggiungo addEvenentListener (click);
        articleEl.addEventListener("click", function () {
            articleEl.classList.add('attiva');
            console.log(articleEl.innerHTML);
        });
        
        n += 1;
    }
}



