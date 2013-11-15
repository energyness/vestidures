window.onload = function(){zoom(1)} //crida a la funció només carregar la pàgina

var img=document.getElementById("pic")

W = $(window).width();

$(window).resize(function(){
        W = $(window).width(); // get new height after change
        zoom(1);
    });

//ZOOM
function zoom(zm) {
    img=document.getElementById("pic")
    wid=img.width
    ht=img.height
    
    $(window).resize(function(){
        W = $(window).width(); // get new height after change
        
    });

    z_wid = (wid*zm);
    z_ht = (ht*zm);
    if(z_wid <= 600 || z_wid >= 1400){ //Quan la imatge tingui valors per sota o per sota no deixem fer zoom
      
       img.style.width=wid;
       img.style.height=ht;
       img.style.marginLeft = -(img.width/2) +W/2+"px";
        img.style.marginTop = -(img.height/2) +300+"px";
      
    }
    else{
    img.style.width=(wid*zm)+"px"
    img.style.height=(ht*zm)+"px"
        img.style.marginLeft = -(img.width/2) + W/2+"px";
        img.style.marginTop = -(img.height/2) +300+"px";
      }
  
}



//Smoothie zoom
var intervalId; // keep the ret val from setTimeout()
function mousedownfunc(zm) {
    intervalId = setInterval(zoom, 10, zm); //Es repeteix la funció zoom cada 100 ms
}

function mouseupfunc() {
    clearInterval(intervalId);
}

//Funció per canvia els titols quan fas hover sobre les imatges
function changeText(text)
{
    var display = document.getElementById('m_title');
    display.innerHTML = "";
    display.innerHTML = text;
}

//Social buttons left, padding constant per mantenir el element fixe
$(function() {        
    $("#share-buttons").floatingFixed({ padding: 130 });

  });
$(function() {        
    $(".social_act").floatingFixed({ padding: 130 });

  });

//Permetre que els buttons horitzontals es possisionin de la mateixa manera respecte el discurs
var buttons = document.getElementById('share-buttons_h')
var text = document.getElementsByClassName('texto2')[0]

buttons.style.marginTop =  text.offsetHeight + 570 + 'px';

$(function() {          
    $("img.lazy").lazyload({
        event : "sporty"
    });
});
 
$(window).bind("load", function() { 
    var timeout = setTimeout(function() { $("img.lazy").trigger("sporty") }, 5000);
}); 
