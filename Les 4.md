# Opdrachten lesweek 4
Lesweek 4 staat in het teken van loops. 

De doelen van deze tweede week van programmeren zijn:

* Weten hoe een loop werkt
* Een while loop kunnen gebruiken
* Een for look kunnen gebruiken

Om dit vak voldoende af te ronden moet je voor iedere lesweek **2** van de 3/4 opdrachten maken. Deze opdrachten laat je aan de docent zien.
Alle code voor deze module plaats je in dezelfde map.

---
---

## **Opdracht A: Fibonacci**

De Fibonacci reeks is een reeks getallen waarbij de laatste twee getallen worden opgeteld om tot een volgend getal te komen.

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 enzovoorts.

Schrijf een loop die de fibonacci reeks uit print tot ~10000000.

---

## **Opdracht B: Raad het getal**

Schrijf een programma waarbij de gebruiker een getal tussen de 0 en de 100 moet raden. 
Het programma genereert een willekeurig getal
De gebuiker moet het getal raden. Iedere keer als de gebruiker iets raad wordt aangegeven of het geraadde getal van de gebruiker hoger of lager is.
Dit gaat oneindig lang door.

---

## **Opdracht C: Tafels**

Schrijf een programma die alle tafels van 1x1 tot 50x50 uit print.
```
1*1=1
1*2=2
1*3=3
...
...
1*49=49
1*50=50
2*1=2
2*2=4
2*3=6
...
...
...
50*49=2450
50*50=2500
```
---

## **Opdracht D: Factoriaal**

Factoriaal is de som van alle kleinere getallen. Factoriaal van 5 (opgeschreven als `5!`) is `5*4*3*2*1`, dus 120.
Schrijf een functie je een getal als argument mee geeft.
De factoriaal berekend en deze vervolgens returned.

```js
let result = factoriaal(8);
console.log(result);
```

---

## ** Opdracht E: Cookie Clicker**

Maak een simpele Cookie Clicker game    
Zorg dat het systeem vraagt of je wil klikken.   
Zolang de gebruiker ja of niets typt krijgt de gebruiker een punt bij zijn score.    
Zorg ervoor dat de score ook weer wordt geprint

bijv

```
[systeem print] score: 0
[systeem print] wil je klikken?
[gebruiker voert in] ja (of niets)
[systeem print] score: 1
[systeem print] wil je klikken?
[gebruiker voert in] ja
[systeem print] score: 2
[systeem print] wil je klikken?
[gebruiker voert in] ja
[systeem print] score: 3
[systeem print] wil je klikken?
[gebruiker voert in] nee
[systeem print] Game Over je score is 3 punten
```

Je kunt ook nog proberen om te zorgen dat de console voordat je de laatste score print weer even leeg maakt. Dan ziet het er een stuk netter uit.

Als je echt iets moois wil maken zorg je ook voor een ascii art koekje in beeld ;)