$(document).ready(function(){
  console.log( "The document got loaded!" );
  $("#button-video").click(function(){
  	console.log( "Haha the event exists!" );


  	$('#feedback-modal').modal({
    backdrop: true,
    keyboard: true
    }).css({
    width: 'auto',
    'margin-left': function () {
        return -($(this).width() / 2);
    }
    });
    
  	$('#myModal').modal('show')
  });
});