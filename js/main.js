const eta = parseInt(prompt("inserisci età"));

const km = parseInt(prompt("inserisci kilometri"));



let prezzoPerKm = 0.21

let prezzoTotale = (km * prezzoPerKm);



if (eta > 65) {
    (prezzoTotale *= 0.6)
    {
        document.getElementById("biglietto").innerHTML = `il prezzo del tuo biglietto con sconto del 40% è di: ${prezzoTotale.toFixed(2)}` + " \u20AC";
    }
}

else if (eta < 18) {
    (prezzoTotale *= 0.8)
    {
        document.getElementById("biglietto").innerHTML = `il prezzo del tuo biglietto con sconto del 20% è di: ${prezzoTotale.toFixed(2)}` + " \u20AC";
    }
}

else (prezzoPerKm * km) 
    document.getElementById("biglietto").innerHTML = `il prezzo del tuo biglietto è di: ${prezzoTotale.toFixed(2)}` + " \u20AC";

