<!-- Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; -->


1 creo nel html il tag section;
2 nel js inserisco un ciclo for che va da 0 a 100;
4 nel ciclo for creo l'elemento article;
5 al article aggiungi una classe;  
6 nel elemento article inserisco index;
7 article figlio di section;
8 article aggiungo addEvenentListener (click);
9 quando clicco l'elemento aggiungo una classe che colora l'elemento e aggiungo console.log(article[index]);


in css uso display flex con wrap e calc e creare 10 righe e 10 collone di caselle;

