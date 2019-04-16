var km = prompt('Inserisci numero KM');
var età = prompt('Inserisci la tua età');

var prezzo = +((km * 0.21).toFixed(2));

if ((km == 0) || (km == '') || (età == 0) || (età == '')) {
  alert('Inserisci dati corretti!');
} else {
  if (età < 18) {
    var prezzo_scontato = +((prezzo * 80 / 100).toFixed(2));
    var sconto = +((prezzo - prezzo_scontato).toFixed(2));

    alert('Sei minorenne ed hai diritto ad uno sconto del 20% equivalente ad euro: ' + (sconto) + '. Il costo finale del tuo biglietto è di euro ' + prezzo_scontato)
  } else if (età > 65) {
    var prezzo_scontato = +((prezzo * 60 / 100).toFixed(2));
    var sconto = +((prezzo - prezzo_scontato).toFixed(2));

    alert('Sei over 65 ed hai diritto ad uno sconto del 40% equivalente ad euro: ' + (sconto) + '. Il costo finale del tuo biglietto è di euro ' + prezzo_scontato)
  } else {
    alert('Il costo del tuo biglietto è di euro ' + prezzo);
  }
}
