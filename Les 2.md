#  Opdrachten lesweek 2
Lesweek 2 staat in het teken van operators en if en else statements. We gaan leren en oefenen wat een operator doet, en hoe if statements werken. De doelen van deze tweede week van programmeren zijn:

* Weten welke operators er allemaal zijn.
* Bekend raken met enkele verschillende datatypes
* If en else statements leren gebruiken

Om dit vak voldoende af te ronden moet je voor iedere lesweek **2** van de 3/4 opdrachten maken. Deze opdrachten laat je aan de docent zien.
Alle code voor deze module plaats je in dezelfde map.

---
---

## **Opdracht A: Moet ik op school zijn?**
De lessen zijn op school van 9 tot 4. Met de onderstaande code kan je de huidige tijd (en uur) ophalen.
```js
let huidigeTijd = new Date();
console.log(huidigeTijd.getHours());
```
Schrijf een if statement die kijkt of je les hebt. De onderstaande code is een begin. Geef ook aan wanneer je niet op school moet zijn.  

```js
if(huidigeTijd.getHours() > ??){

}
```
Print `Ik moet op school zijn` als je op school moet zijn.

---

## **Opdracht B: May I come in?**
Maak programma dat controleert of je oud genoeg bent om naar binnen te mogen.

Gebruik het input commando zodat de gebruiker antwoord kan geven op vragen.

Zorg dat het systeem ook om bewijs vraagt in de vorm van een ID.

Als je niet oud genoeg bent of geen ID wil laten zien mag je er niet in. Anders wel.

Bijv.
```
[systeem print]: Goedenavond hoe oud bent u?
[gebruiker voert in] 21
[systeem print]: Mag ik je ID zien?
[gebruiker voert in] ja
[systeem print] Kom verder
```
of
```
[systeem print]: Goedenavond hoe oud bent u?
[gebruiker voert in] 17
[systeem print]: Dan mag je helaas niet naar binnen.
```

---

## **Opdracht C: Welke dag?**
Met de onderstaande code kan je kijken of je naar school moet.

```js
var schooldag = true;

if(schooldag == true){
    console.log("Ik moet naar school");
} else {
    console.log("Lekker uitslapen!");
}
```

Verander de code zo dat dat de schooldag variabelen geen `true` of `false` is, maar een dag. Bijvoorbeeld `maandag`, `donderdag` of `zaterdag`. Gebruik `if`, `else if` en `else` om tot de juiste beslissing te komen.

---

## **Opdracht D:**