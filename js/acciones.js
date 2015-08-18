// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$('#btn_sonido').click(function(){
		if($('#btn_sonido').hasClass('ui-icon-audio'))
		{
		//Apagar audio
		$('#btn_sonido').removeClass('ui-icon-audio');
		$('#btn_sonido').addClass('ui-icon-bars');
		alert('se apagó el sonido');
	}
	else
	{
   //Prender audio
		$('#btn_sonido').removeClass('ui-icon-bars');
		$('#btn_sonido').addClass('ui-icon-audio');
		navigator.notification.beep(1)
		alert('se encendio el sonido');
	}
		//alert("click a btn_sonido")
	});//click a btn_sonido
//}); 
});

