var count=1;
var numberSlide = document.getElementsByClassName('slide').length;
const color= document.querySelectorAll('.manualSlideBtn');
  setInterval(function(){
    document.getElementById('radioBtn'+count).checked=true;
    count++;
    if(count>(numberSlide-1)){
      count =1;
    }
  },3000)
 function clear(){
   clearInterval();
   alert("heiu");
 };
