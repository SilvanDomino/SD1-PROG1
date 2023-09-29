# Opdrachten lesweek 3
Lesweek 3 staat in het teken van functies. We gaan leren wat een functie doet en hoe we zelf functies kunnen maken. De leerdoelen voor deze derde week zijn:

* Functies kunnen aanroepen.
* Weten waarom we functies gebruiken.
* Introductie tot eigen functies schrijven.
    * Waardes meegeven aan een functie
    * Waardes terugkrijgen uit een functie.

Voor mensen die wiskunde B of D op de HAVO of VWO hebben gehad zal een functie bekend voorkomen.

---
---

## **Opdracht A: Shake and return.**

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

---
## **Opdracht B: Wiskunde**
Deze opdracht bestaat uit een serie kleine wiskunde opgaves.
### Wiskunde opgave 1
Schrijf een functie die de inhoud van een kubus berekent.   
Je geeft de lengte, hoogte en de diepte mee als argumenten.   
De functie returned het resultaat. Hieronder een voorbeeld hoe de functie aangeroepen kan worden en het resultaat uitgeprint.   
```js
let kubusInhoud = berekenInhoud(10, 5, 10);
console.log(kubus);
```
### Wiskunde opgave 2
Schrijf een functie die de inhoud van een cylinder berekent. De formule die je daar voor nodig hebt is als volgt: `radius² * π * hoogte`.    
Je geeft de diameter en hoogte mee als argumenten.   
De functie returned het resultaat.
### Wiskunde opgave 3
Schrijf een functie die de lange zijde van een rechthoekige driehoek berekent. Maak gebruik van de stelling van pythagoras.    
Je geeft de lengte en de hoogte van de driehoek mee.   
De functie returned de lengte van de lange zijde.    
### Wiskunde opgave 4
Schrijf een functie die het gemiddelde van 7 getallen berekent.   
Je geeft 7 getallen mee.   
De functie returned het gemiddelde.  

---

## **Opdracht C: Leeftijd berekening**

Maak een functie voor het berekenen van je leeftijd in dagen sinds je geboorte.

Zorg dat de functie 3 argumenten kan ontvangen :

1. geboorteJaar
2. geboorteMaand
3. geboorteDag

De functie returned de leeftijd in jaren.

Hieronder een voorbeeld van de command line terminal:
``` 
Welk jaar ben je geboren? 1990
Welke maand ben je geboren? 2
Welke dag ben je geboren? 8
Je bent 33.55 jaar oud
```
### Tip: 

```js
  let now = new Date();
  let birth = new Date(2006, 2, 9); 
  let miliseconds = now-birth;
```

Met deze regels code bereken je de leeftijd in milisecondes. Met de eerste regel kijken we naar de huidige datum, met de tweede regel pakken we de geboorte datum. Met de derde regel berekenen we het verschil. In dit voorbeeld is het verschil ongeveer 17 jaar.

---

