$(document).ready(function(){
 $(".nav-item").click(function(){$('body ,html').animate({scrollTop:$($(this).data('vv')).offset().top-30},1500);
     $(this).addClass('v').siblings().removeClass('v');
     
     
 });
    var mixer = mixitup('#container');

    $(".works li").click(function(){
       $(this).addClass('v').siblings().removeClass('v'); 
    });
    
 
});