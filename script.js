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







//inserisci cognome utente in un array con altri cognomi 

var surname_list = [
"Bianchi",
"Neri",
"Rossi",
"Verdi",
"Gialli"
]

//prompt cognome 

var surname = prompt("inserisci il tuo cognome")

// stampa la lista in ordine alfabetico

surname_list.push(surname);
surname_list.sort();




for(var i = 0; i < surname_list.length; i++){

  var element_surname = surname_list[i];

  var contenuto_precedente = document.getElementById("surnames").innerHTML;

  document.getElementById("surnames").innerHTML = contenuto_precedente + "<li>" + (i+1) +element_surname+ "</li>";

  // scrivi la posizione della lista in cui il nome dell'utente si trova


  if (element_surname === surname) {
    document.getElementById("surnames").innerHTML = contenuto_precedente +  "<li> N. " + (i+1) + ": " + element_surname + "</li>"
   
  } else {
    document.getElementById("surnames").innerHTML = contenuto_precedente +  "<li>" + element_surname + "</li>";
  }

  }














