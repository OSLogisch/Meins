document.addEventListener("DOMContentLoaded", function () {                                 // sorgt dafür dass der JavaScript Code erst ausgeführt wird, wenn die Seite fertig geladen ist (ist nötig, wegen ausgelagerter Datei)
    passwort.onkeyup = () => check()                                                        // (Kurze Variante einer Funktion, Arrow Function genannt (siehe unten erklärung)) füht beim Loslassen einer Taste die Funktion 'check()' aus

    let fertig                                                                              //deklariert die Variable 'fertig', welche später genutzt wird um zu sagen ob alle bedingungen erfüllt sind

            function check() {                                                              //definiert die Funktion check
                var input = document.getElementById("passwort").value;                      //nimmt den Wert aus der Eingabezeile und speichert ihn in einer Variable
    
                input=input.trim();                                                         //Beseitigt Leerzeichen aus der Eingabe
                document.getElementById("passwort").value=input;                            //Beseitigt die Leerzeichen in der Eingabe, in dem es auf die 'Beschnittene' Variante der Eingabe gesetzt Wird
                document.getElementById("zähler").innerText="Länge: " + input.length;       //Zählt die Länge de Inputs und gibt sie aus
    

                //
                if(input.length>=8){                                            // prüft ob das Passwort mind. 8 Zeichen lang ist
                    document.getElementById("check0").style.color="green";      // setzt die Farbe des Textes mit der Bedingung auf grün, wenn es mind 8 Zeichen lang ist
                    fertig++                                                    // erhöt die variable Fertig um 1
                }                                                               //
                else{                                                           // 
                   document.getElementById("check0").style.color="red";         // setzt die Farbe des Textes mit der Bedingung auf rot, wenn es nicht 8 Zeichen lang ist
                }                                                               //
    

                //
                if(input.length<=15){                                           //
                    document.getElementById("check1").style.color="green";      //
                    fertig++                                                    //
                }                                                               //      Prüft ob das Passwort maximal 15 Zeichen lang ist und setzt den Text der Bedingung demendsprechend auf grün (Vorhanden) oder rot (nicht Vorhanden)
                else{                                                           //
                   document.getElementById("check1").style.color="red";         //
                }
    

                //
                if(input.match(/[0-9]/i)){                                      // prüft ob eine Zahl von 1 bis 9 vorhanden ist (i ignoriert Groß- un Kleinschreibung)
                    document.getElementById("check2").style.color="green";      // setzt die Farbe des Textes mit der Bedingung auf grün, wenn es eine Zahl enthält
                    fertig++                                                    // erhöt die variable Fertig um 1
                }                                                               //      
                else{                                                           //
                   document.getElementById("check2").style.color="red";         // setzt die Farbe des Textes mit der Bedingung auf rot, wenn es keine Zahl enthält
                }                                               	            //
    

                //
                if(input.match(/[^A-Za-z0-9-' ']/i)){                           //
                    document.getElementById("check3").style.color="green";      //
                    fertig++                                                    //
                }                                                               //      prüft, ob ein sonderzeichen vorhanden ist und setzt den Text der Bedingung demendsprechend auf grün (Vorhanden) oder rot (nicht Vorhanden)
                else{                                                           //
                   document.getElementById("check3").style.color="red";         //
                }                                                               //
    

                //
                if(input.match(/[a-z]/)){                                       //
                    document.getElementById("check4").style.color="green";      //
                    fertig++                                                    //
                }                                                               //      prüft, ob ein Kleinbuchstabe vorhanden ist und setzt den Text der Bedingung demendsprechend auf grün (Vorhanden) oder rot (nicht Vorhanden)
                else{                                                           //
                   document.getElementById("check4").style.color="red";         //
                }                                                               //
    

                //
                if(input.match(/[A-Z]/)){                                       //
                    document.getElementById("check5").style.color="green";      //      prüft, ob ein Großbuchstabe vorhanden ist und setzt den Text der Bedingung demendsprechend auf grün (Vorhanden) oder rot (nicht Vorhanden)
                    fertig++                                                    //
                }                                                               //
                else{                                                           //
                   document.getElementById("check5").style.color="red";         //
                }                                                               //

                
                //
                if (fertig === 6) {
                    document.getElementById("passwort").style.animation = "rainbow 10s infinite";
                }                
        
            }
        });

            // // Traditionelle Funktion
            //function add(a, b) {
            //    return a + b;
            //  }
            //  
            //  // Arrow Function
            //  const add = (a, b) => a + b;
            //  
    