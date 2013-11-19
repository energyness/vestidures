/*Centra butons discursos */

$(function(){
  var coW = $('.container').width();
  var shW = coW/2 - 105;
  $('.share-buttons_h').css('margin-left',shW);
  $('.hh').css('margin-left',shW);
});

//Thus function avoid wrong image position when loading the page
var countdown = 5;
setTimeout(function() {
    
    var img = $('<img id="note">'); //Equivalent: $(document.createElement('img'))
    img.attr('src', './images/others/icona_music.png');
    img.appendTo('.navbar-right');

    $('.music').append('Play soundtrack!');   

}, countdown);

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
var text = document.getElementsByClassName('texto2')[0]

var n=  text.offsetHeight + 570;

 $('.share-buttons_h').css('margin-top', n);

  // your countdown in milliseconds





/* SLIDER */

$(function() {

    var target= $( "#slider-vertical" );

    target.slider({
      orientation: "vertical",
      step: 0.01,
      range: "min",
      min: 1,
      max: 2.33333333,
      value: 1,
      slide: function( event, ui ) {
        zoom(ui.value);
      }
    });


    $('#plus').on({

      mousedown: function() {
        // current slider value
        target.slider('value', target.slider('value') + target.slider( "option", "step" ) ); 
        var val = target.slider("option", "value");
        zoom(val);
        interval = window.setInterval(function(){
          target.slider('value', target.slider('value') + target.slider( "option", "step" ) ); 
          var val = target.slider("option", "value");
          zoom(val);
      }, 10);
      },
        mouseup : function () {
        window.clearInterval(interval);
      }
    });

    $('#minus').on({

      mousedown: function() {
        // current slider value
        target.slider('value', target.slider('value') - target.slider( "option", "step" ) ); 
          var val = target.slider("option", "value");
        zoom(val);
        interval = window.setInterval(function(){
          target.slider('value', target.slider('value') - target.slider( "option", "step" ) ); 
          var val = target.slider("option", "value");
          zoom(val);
      }, 10);
      },
       mouseup : function () {
        window.clearInterval(interval);
      }
    });

    
  });

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
    wid=600
    ht=600
    
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
















