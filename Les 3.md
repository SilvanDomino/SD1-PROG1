# Opdrachten lesweek 3
Lesweek 3 staat in het teken van functies. We gaan leren wat een functie doet en hoe we zelf functies kunnen maken. De leerdoelen voor deze derde week zijn:

* Functies kunnen aanroepen.
* Weten waarom we functies gebruiken.
* Introductie tot eigen functies schrijven.
    * Waardes meegeven aan een functie
    * Waardes terugkrijgen uit een functie.

Voor mensen die wiskunde B of D op de HAVO of VWO hebben gehad zal een functie bekend voorkomen.

## Opdracht A: Shake and return.

Schrijf een functie die de letters van een woord willekeurig door elkaar schudt. 
```js
  const characters = woordDatGeschudtMoetWorden.split('');
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }
  const geschudWoord = characters.join('');
```
Met de bovenstaande regels code schud je een woord. Zet deze regels code in een functie.
* Je geeft het `woordDatGeschudtMoetWorden` mee aan de functie als argument.
* De functie returned het `geschudWoord`.
* Je roept de functie 3x aan met een ander woord dat geschud moet worden.

```js
/*
Hier komt jouw functie
*/

var woord1 = ShakeFunctie("Boekenkast");
console.log(woord1);
```