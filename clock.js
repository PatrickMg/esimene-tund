 window.onload=function clock(){

   var clock = document.getElementById("clock");

writeDate();

  clock.addEventListener("click", function(){

    console.log('klikk');

  });

window.addEventListener('keypress', function(){
  console.log(event);

  if(event.charCode == 13){

    alert('enter');

  }

});

   window.setInterval(function(){
     // iga ooteaja järel käivitatakse
      writeDate();

   },100);

 };

function writeDate(){

  var today = new Date();

  var hours = today.getHours();
  var minutes = setZeroBefore(today.getMinutes());
  var seconds = today.getSeconds();

  second = setZeroBefore(seconds);

  clock.innerHTML = setZeroBefore(hours) + ":" + minutes + ":" + second;
}

//lisab nulli kui arv on kümnest väiksem

function setZeroBefore(number){

  if(number < 10){
    number = "0" + number;
  }
  return number;

}
