
var countDown=document.getElementById('countNum')
var btn=document.getElementById('btn')
var increase=false;
btn.addEventListener('click',function(){
  window.setInterval(function() {
  if(countDown.innerText==0)
  {
    increase=true;
  }
   else if(countDown.innerText==10) {
increase=false;
   }
    if(increase){
     countDown.innerText++
    }
    else{
      countDown.innerText--
    }
},1000)
})
                 

