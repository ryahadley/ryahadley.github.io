angular.module('app').service('jqueryService', function() {

this.movement = function() {
  var movementSpeed = 30;
  var navvv = $('.header');
  var character = $('.character').offset();

  var leftMarginLimit = parseInt($('.character').parent().css('width')) - 100 - parseInt($('.character').css('width'));
  var topMarginLimit = parseInt($('.character').parent().css('height')) - 20 - parseInt($('.character').css('height'));

  var leftMargin = parseInt($('.character').css('margin-left'));
  var topMargin = parseInt($('.character').css('margin-top'));

  $(document).keydown(function(key) {

      // LEFT
      if (key.which == 37)
      {
          leftMargin -=movementSpeed;
          if (leftMargin < 0){leftMargin = 0;}
          if (leftMargin > leftMarginLimit){leftMargin = leftMarginLimit;}
          $('.character').css({'margin-left': leftMargin+'px'});
      }

      // RIGHT
      if (key.which == 39)
      {
          leftMargin +=movementSpeed;
          if (leftMargin < 0){leftMargin = 0;}
          if (leftMargin > leftMarginLimit){leftMargin = leftMarginLimit;}
          $('.character').css({'margin-left': leftMargin+'px'});
      }

      // UP
      if (key.which == 38)
      {
        if($('.character').offset().top > 15) {
          key.preventDefault();
          $(".character").finish().animate({
              top: "-=20"
          });
        }
          // $('.character').css({'margin-top': topMargin+'px'});
      }

      // DOWN
      if (key.which == 40)
      {
        if($('.character').offset().top < 150) {
          key.preventDefault();
          $(".character").finish().animate({
              top: "+=20"
          });
        }
          // $('.character').css({'margin-bottom': bottomMargin+'px'});
      }
      if (key.which == 16)
      {
        key.preventDefault();
        $('.character').css({'top': '10px', 'left': '40px !important'});
      }
  });

var linksPosition = setInterval(function() {

function collision($div1, $div2) {
     var x1 = $div1.offset().left;
     var y1 = $div1.offset().top;
     var h1 = $div1.outerHeight(true);
     var w1 = $div1.outerWidth(true);
     var b1 = y1 + h1;
     var r1 = x1 + w1;
     var x2 = $div2.offset().left;
     var y2 = $div2.offset().top;
     var h2 = $div2.outerHeight(true);
     var w2 = $div2.outerWidth(true);
     var b2 = y2 + h2;
     var r2 = x2 + w2;

     if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
     return true;
   }
var reset = function() {
  if($(document).mouseup()) {
  $('.character').css({'top': '10px'});
  $('.character').css({'left': '40px'});
  }
}


if( collision($('.character'), $('.aboutMe')) &&
    window.location.hash !== "aboutMe") {
    window.location.hash = "/"; //("http://127.0.0.1:8080/#/");
    reset();
}
if( collision($('.character'), $('.projects'))  &&
    window.location.hash !== "projects") {
    window.location.hash = "projects";
    //("http://127.0.0.1:8080/#/projects");
    reset();
}
if( collision($('.character'), $('.interests'))  &&
    window.location.hash !== "interests") {
    window.location.hash = "interests";
    //("http://127.0.0.1:8080/#/interests");
    reset();
}
if( collision($('.character'), $('.goals'))  &&
    window.location.hash !== "goals") {
    window.location.hash = "goals";
    //("http://127.0.0.1:8080/#/goals");
    reset();
}
if( collision($('.character'), $('.contactMe'))  &&
    window.location.hash !== "contact") {
    window.location.hash = "contact";
    //("http://127.0.0.1:8080/#/contact");
    reset();
}
}, 500);

$(function() {
  $( ".character" ).draggable();
})

}

});
