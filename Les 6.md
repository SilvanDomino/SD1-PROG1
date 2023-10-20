# Opdrachten lesweek 6
Lesweek 6 staat in het tekenen van arrays. We gaan leren hoe we arrays definieren 
De leerdoelen voor deze derde week zijn:

* Arrays kunnen maken
* Elementen uit arrays kunnen halen en aanpassen
* Door een array kunnen loopen door middel van een for-loop. 

## **Opdracht A: Spongebob mocking**
![Spongebob mocking](/images/Spongebob.png)
We kennen allemaal de meme van spongebob die iets belachelijkmakend herhaalt. Iemand zegt iets, en 'spongebob' die dat herhaalt maar dat met hoofdletters en kleine letters door elkaar.
```
Ik heb erg veel honger!
Ik HeB ErG VeEl hOnGeR!
```
Schrijf een functie, als argument geef je een string mee. Je returned de 'gemockte' string. 

Om dit te doen moet je gebruik maken van een loop, een string is namelijk een array waar je door heen kan lopen.



## **Opdracht B: Can you handle the list?**
Maak een [array](https://www.w3schools.com/js/js_arrays.asp) aan en zet daar in minimaal 5 items met minimaal 3 verschillende datatypes.

Voer op correcte wijze alle verschillende [Array Methods](https://www.w3schools.com/js/js_array_methods.asp) uit en print daarna  steeds de inhoud van je array. Print indien van toepassing ook het resultaat van de method. (Bij een return ook)


## **Opdracht C: Can you handle the list**
Gebruik de array uit dit script.
```js
let stuff = ['c',5645,9393.77,"hello", true, false, "Good morning",88, -90, 777.777, 90,665.33,"F"]
if( typeof(stuff[0]) == "number" ){   //met deze if statement wordt gekeken of het eerste element een getal is8
  console.log("number found")
}
```

Maak zelf arrays aan voor elke datatype. Maak een list voor:
* strings
* numbers
* booleans

Zorg dat je met een loop van elk item in de array controleert welk datatype het is. In het bevengenoemde script zie je een voorbeeld van deze controle. Alle items die een string zijn verplaats je naar de array strings. Alle getallen naar numbers enzovoort.

Print daarna de inhoud van elke array.


```js
let stuff = ['c',5645,9393.77,"hello", true, false, "Good morning",88, -90, 777.777, 90,665.33,"F"]
if(typeof(stuff[0]) == "number"){
  numbers.push(val);
}
```

## **Opdracht D: Boodschappenlijstje**
Maak een programma waarmee je items toe kunt voegen aan een boodschappelijst.

Gebruik het array type en de methoden `push` en `splice` om items aan de lijst toe te voegen of te verwijderen.

Bijv

```
[systeem print:] Jouw lijst is nog leeg!
[systeem print:] Wat wil je doen? toevoegen (t) of verwijderen (v)?
[gebruiker typt:] t
[systeem print:] Wat wil je toevoegen?
[gebruiker typt:] Banaan
[systeem print:] Jouw lijst bevat: Banaan
[systeem print:] Wat wil je doen? toevoegen (t) of verwijderen (v)?
[gebruiker typt:] t
[systeem print:] Wat wil je toevoegen?
[gebruiker typt:] Rode wijn
[systeem print:] Jouw lijst bevat: Banaan, Rode wijn
[systeem print:] Wat wil je doen? toevoegen (t) of verwijderen (v)?
[gebruiker typt:] v
[systeem print:] Wat wil je verwijderen?
[gebruiker typt:] Banaan
[systeem print:] Jouw lijst bevat: Rode wijn
[systeem print:] Wat wil je doen? toevoegen (t) of verwijderen (v)?
etc...
```
zorg ervoor dat je na elke bewerking de array weer print.

Veeg voor het printen even de console schoon met het console.clear().