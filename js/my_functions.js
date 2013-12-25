/* Coming soon countdown*/
var newYear = new Date(); 
newYear = new Date(2014 , 1 - 1, 7); 
$('#countdown').countdown({until: newYear,
layout:'{dnn}:{hnn}:{mnn}:{snn}'});

$('#countdown').css({
  'font-size': '120pt',
  'font-family': 'Arial Narrow2',
  'text-align': 'center',
  'font-weight' : '800'
});

/*Centra butons discursos */
$(function(){
  var coW = $('.container').width();
  var shW = coW/2 - 105;
  $('.share-buttons_h').css('margin-left',shW);
});



//Social buttons left, padding constant per mantenir el element fixe
$(function() {        
    $("#share-buttons").floatingFixed({ padding: 130 });

  });
$(function() {        
    $("#wrapdown").floatingFixed({ padding: 80 });

  });
















