
// con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; 

const sectionEl = document.querySelector('section#container');
const play = document.querySelector('button#play');
const selectEl = document.getElementById("difficoltà");


play.addEventListener("click", function () {
    console.log(selectEl.value);
    let cellNumber;
    let className;
    switch (selectEl.value) {
        case '0':
            cellNumber = 100;
            className = "difficoltà-facile";
            break;
        case '1': 
            cellNumber = 81;
            className = 'difficoltà-media';
            break;
        case '2':
            cellNumber = 49;
            className = 'difficoltà-difficile';
            break;
        // default:
        //     cellNumber = 100;
        //     className = "difficoltà-facile"
        //     break;
    }
    getGrid(sectionEl, cellNumber, className);

})

// inserisco un ciclo for che va da 0 a 100;
function getGrid(containerEl, cells, addNewClass) {
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



