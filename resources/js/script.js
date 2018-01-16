$(document).ready(function() {
    
    $('.js--section-about').waypoint(function(direction)  {
        if (direction == "down") {
            $('nav').addClass('sticky');
            
        } else {
            $('nav').removeClass('sticky');
            
        }
    }, {
       offset: '60px;' 
    });
    
/*
   var waypoint = new Waypoint({
  element: document.getElementById('direction-waypoint'),
  handler: function(direction) {
    notify('Direction: ' + direction)
  }
})
*/
    
    
});