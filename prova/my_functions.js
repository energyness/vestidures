/*==================================================================
MY JS Functions
====================================================================*/
//This functions allows the like button to not dissapear if diplay:none from the beggining
setTimeout(function() {
    
    $('.fb').css('margin-top','11px');
    $('.fb').css('display','none');

}, 5000);

/*TEXT*/
//Change titles when you hover an image
function changeText(text)
{
    var display = document.getElementById('m_title');
    display.innerHTML = "";
    display.innerHTML = text;
}

/*SOCIAL BUTTONS*/
//Social buttons --> constant padding
$(function() {        
    $("#share-buttons").floatingFixed({ padding: 130 });

  });
$(function() {        
    $(".social_act").floatingFixed({ padding: 130 });

  });

//Allow rigth horizontal buttons positioning 
$(function() {
    var text = document.getElementsByClassName('texto2')[0]

    var n=  text.offsetHeight + 525;

    w = $(window).width();

    $(window).resize(function(){
        w = $(window).width(); // get new width after change
            if(w < 992 ){
        $('.principis').css('margin-top', '20px');      
        
        }
        else{
         $('.principis').css('margin-top', n);  
         

       }
        
    });

    if(w < 992 ){
        $('.principis').css('margin-top', '20px'); 
        
    }
    else{
    $('.principis').css('margin-top', n); 
     

   }
});

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

/*ZOOM*/
window.onload = function(){zoom(1)} //crida a la funció només carregar la pàgina

var img=document.getElementById("pic")

W = $(window).width();

$(window).resize(function(){
        W = $(window).width(); // get new width after change
        zoom(1); 
    });

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

function wait(button, seg){
  var countdown = 40000 //40 segons;
  setTimeout(function() {
    $(button).css('display','none');
       

  }, countdown);

}

/*FOOTER*/
//Set footer at the bootom of the page for about/thanks/contact pages
h= $(window).height();
$('.terra').css('margin-top', h-500);


/*Other stuff*/
//Fit elements
  w = $(window).width();

  ww = $('.col-xs-4').width()
  $('.gbuttH').css('margin-left', 0); //fit gbuttH...it is a bad boooy!
  $(window).resize(function(){
        w = $(window).width();
       
         ww = $('.col-xs-4').width()
        $('.gbuttH').css('margin-left', 0);

        $('.social_phone').css('width',w-30); //fit social buttons--> allways center!

    });

//Simulate hover on mobile 
(function () {
  var count = 0;

  $('.btn-custom').click(function () {
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



















