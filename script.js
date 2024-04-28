document.addEventListener("DOMContentLoaded", function () {
    passwort.onkeyup = () => check()
    
            function check() {
                var input = document.getElementById("passwort").value;
    
                input=input.trim();
                document.getElementById("passwort").value=input;
                document.getElementById("zähler").innerText="Länge : " + input.length;
    
                //
                if(input.length>=8){                                            //
                    document.getElementById("check0").style.color="green";      //
                }                                                               //      Prüft ob das Passwort mindestens 8 Zeichen lang ist
                else{                                                           //
                   document.getElementById("check0").style.color="red";         //
                }                                                               //
    
                //
                if(input.length<=15){                                           //
                    document.getElementById("check1").style.color="green";      //
                }                                                               //      Prüft ob das Passwort maximal 15 Zeichen lang ist
                else{                                                           //
                   document.getElementById("check1").style.color="red";         //
                }
    
                //
                if(input.match(/[0-9]/i)){
                    document.getElementById("check2").style.color="green";
                }
                else{
                   document.getElementById("check2").style.color="red"; 
                }
    
                //
                if(input.match(/[^A-Za-z0-9-' ']/i)){
                    document.getElementById("check3").style.color="green";
                }
                else{
                   document.getElementById("check3").style.color="red"; 
                }
    
                //
                if(input.match(/[a-z]/)){
                    document.getElementById("check4").style.color="green";
                }
                else{
                   document.getElementById("check4").style.color="red"; 
                }
    
                //
                if(input.match(/[A-Z]/)){
                    document.getElementById("check5").style.color="green";
                }
                else{
                   document.getElementById("check5").style.color="red"; 
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
    