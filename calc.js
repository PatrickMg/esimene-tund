//Käivitab siis kui terve dokument on laetud window.onload
window.onload = function() {
//Saan kätte input väljad
var cm = document.getElementById("cm");
var inch = document.getElementById("inch");

//Lisan nuppudele kuularid
document.getElementById("to_inch").addEventListener("click", convertToInch);  //esimene atribuut mida kuulame, teine mis teeme kui toimub tegevus
document.getElementById("to_cm").addEventListener("click", function (){

  cm.value = inch.value*2.54;

});

};

function convertToInch(){

  //Arvutan ümber cm tollideks ja lisan tollid lahtrisse
  inch.value = cm.value/2.54;

}
