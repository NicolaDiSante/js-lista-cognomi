/*
1. chiedi all’utente il cognome
2. inseriscilo in un array con altri cognomi (esempio ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’)
3. stampa la lista ordinata alfabeticamente
4. scrivi anche la posizione “umana” (partendo da 1) della lista in cui il nuovo utente si trova
*Consigli del giorno:*
Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.
*Considerazioni*
Se si trova del codice da copiare e incollare va fatto solo se si comprende il funzionamento
Buon lavoro! :faccia_leggermente_sorridente: */



//prompt cognome 



//inserisci cognome utente in un array con altri cognomi 

var surname_list = [
"Bianchi",
"Neri",
"Rossi",
"Verdi",
"Gialli"
]

var surname = prompt("inserisci il tuo cognome")



surname_list.push(surname);
surname_list.sort();

var presente = false;


for(var i = 0; i < surname_list.length; i++){

  var element_surname = surname_list[i];

  var contenuto_precedente = document.getElementById("surnames").innerHTML;

  document.getElementById("surnames").innerHTML = contenuto_precedente + "<li>" +element_surname+ "</li>";

  if(element_surname === surname){
    console.log(surname_list.indexOf(surname, 1));
  }
}






// stampa la lista in ordine alfabetico

// scrivi la posizione della lista in cui il nome dell'utente si trova

