// strenge Überwachung
"use strict";

// Deklaration

// Variablen
// var // Frühere Bezeichnung für Variable bis JS V 5
// let // heutige Bezeichnung für Variable!

// Konstanten
// const

// Datantypen > Arten von Werten die Variablen oder Konstanten haben können.
// Numbers  --> Zahlen-> Ganzzahlen (integer (1,2,3 etc.))
//          --> Kommazahlen (Floats) --> 3.14, 2.71 etc
// Strings  --> Arabische Ziffern -> Texte, Adressen, Namen etc.
// Beolean  --> Boolsche Wahrheitswerte -> Wahr oder Falsch -> true oder falsch -> 0 und 1

// Wertezuweisung

//  Variable
    // let beispielsVariable = 5  // Variable bekommt Namen (kleingeschrieben) und den Beispielswert 5 (Number)
    // let beispielsVariable2 = "Adresse + Hausnummer" // 2.Variable bekommt den Beispielswert Adresse + Hausnummer
    // let beispielsVariable3 = True // 3. Variable bekommt den Beispielswert True (Boolscher Warheitswert)
// Variablen können ihre Werte im verlauf des Codes ändern!

// Konstanten
    // const BEISPIELSKONSTANTE = 404 // Konstante mit festem beispielswert 404(Number)
    // const BEISPIELSKONSTANTE2 = "Geburtsdatum" // 2. Konstante mit festem Beispielswelt Geburtsdatum (String)
    // const BEISPIELSKONSTANTE3 = False // Konstante mit festem Beispielswert False (Boolscher Warheitswert) IMMER FALSCH!
// Konstanten können ihre Werte im verlauf des Codes NICHT mehr ändern!

// Konsolenausgabe
    // console.log(BEISPIELSKONSTANTE); // Gibt den Wert der Beispielskonstanten in die Konsole aus!


// let a = 4;
// let b = 1;
// let c = 7;

// function addition(a,b,c) {
//     c = a + b;
//     console.log(c);
    
// }

// addition(a,b); // Funktionsaufruf / call / Muss die Variablen kennen!!! 

// Beispiel Kaffeemaschine Erste Frage (ist genug Wasser im Tank?)

let wasserStand = prompt("ist genug Wasser im Tank?")

// soll uns sagen : Ich kann dir Kaffee kochen! Oder: Gib mir Wasser!

function KaffeMaschine(wasserStand) 
{
if (wasserStand == "ja") 
{
    console.log("Kaffe go!")  
} 
else  
{
    console.log("Wasser nachfüllen")
};    
};

KaffeMaschine(wasserStand);
