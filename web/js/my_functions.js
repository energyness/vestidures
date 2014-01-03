
/*Centra butons discursos */
$(function(){
  var coW = $('.container').width();
  var shW = coW/2 - 105;
  $('.share-buttons_h').css('margin-left',shW);
});

//Thus function avoid wrong image position when loading the page
var countdown = 5;
setTimeout(function() {
    
    var img = $('<img id="note">'); //Equivalent: $(document.createElement('img'))
    img.attr('src', './images/others/icona_music.png');
    img.attr('style', 'margin-top:10px;');
    

    $('.music').append('Play soundtrack!'); 
    img.appendTo('.not');

    $('.paddp').css('display','inline'); 

}, countdown);

//Funció per canvia els titols quan fas hover sobre les imatges
function changeText(text)
{
    var display = document.getElementById('m_title');
    display.innerHTML = "";
    display.innerHTML = text;
}

//Social buttons --> padding constant per mantenir el element fixe
$(function() {        
    $("#share-buttons").floatingFixed({ padding: 130 });

  });
$(function() {        
    $(".social_act").floatingFixed({ padding: 130 });

  });
$(function() { 

    $(".social_phone").floatingFixed({ padding: $(window).height()-40});
    
  });

//Permetre que els buttons horitzontals es possisionin de la mateixa manera respecte el discurs
var text = document.getElementsByClassName('texto2')[0]

var n=  text.offsetHeight + 545;

 $('.share-buttons_h').css('margin-top', n);

/* SLIDER */

$(function() {

    var target= $( "#slider-vertical" );

    target.slider({
      orientation: "vertical",
      step: 0.01,
      range: "min",
      min: 1,
      max: 2.13,
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
        W = $(window).width(); // get new width after change
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

function wait(button){
  var countdown = 40000 //40 segons;
  setTimeout(function() {
    $(button).css('display','none');
       

  }, countdown);

}

//Fit elements
  w = $(window).width();
  $('.imageP').css('width', w-60); //fit image with the modal, even resizing

   ww = $('.col-xs-4').width()
   $('.gbuttH').css('margin-left', 0); //fit gbuttH...it is a bad boooy!
  $(window).resize(function(){
        w = $(window).width();
       

         ww = $('.col-xs-4').width()
        $('.gbuttH').css('margin-left', 0);

        $('.social_phone').css('width',w-30); //fit social buttons--> allway center!

    });


 if (w <=768){
    $(window).scroll(function() { //when window is scrolled
     social= $('.social_phone').offset().top;
     social_g = $('.social_phoneH').offset().top;;
       if (social > social_g){
        $('.paddp').css('display', 'none')
      }
      else{
        $('.paddp').css('display', 'inline')
      }

      });
  }

/*$("button").on("touchstart", function(){ 
    $(this).removeClass("btn-background");
    $(this).addClass("btn-background-hov");
});
$("button").on("touchend", function(){ 
    $(this).removeClass("btn-background-hov");
    $(this).addClass("btn-background");
});*/

(function () {
  var count = 0;

  $('button').click(function () {
    count += 1;
    if (count%2==0) {
      $(this).removeClass("btn-background-hov");
      $(this).addClass("btn-background");
    }
    else{
      $(this).removeClass("btn-background");
      $(this).addClass("btn-background-hov");
    }
  });
})();

/*NOT USED */
//Funció per canvia els textos quan fas click sobre idioma seleccionat (mobile version)
function changeTextM(text, enter)
{
    var display = document.getElementById('intext');
    display.innerHTML = "";
    display.innerHTML = text;

    var display = document.getElementById('enter2');
    display.innerHTML = "";
    display.innerHTML = enter;


}
//We select a language and the button 'Go' get the desired url for the language
function changeLang(text)
{

    var lang = $('.go'); //Equivalent: $(document.createElement('img'))
    lang.attr('href', text);

}


















