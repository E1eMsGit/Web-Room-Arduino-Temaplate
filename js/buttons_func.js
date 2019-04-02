// Кнопки переключателя люстры.
$(function() {    
    $('#relay_toggle_left, #relay_toggle_right').on('click',function(event) { 
        jQuery.ajaxSetup({ timeout: 110 }); 
        var id = $(this).attr('id');  
        
        if (id == 'relay_toggle_left') {
            if($('#left-switcher').css("visibility") == "hidden") {
                $('#left-switcher').attr("style", "visibility: visible");
            } else {
                $('#left-switcher').attr("style", "visibility: hidden");
            }
        }            
        if (id == 'relay_toggle_right') {
            if($('#right-switcher').css("visibility") == "hidden") {
                $('#right-switcher').attr("style", "visibility: visible");
            } else {
                $('#right-switcher').attr("style", "visibility: hidden");
            }
        }         
    }); 
});

var color = "red";
var changeLedStripColorIntervalId ; 

// Кнопки Автоматического управления светодиодной ленты 
$(function() {     
    $('#change_colors_start, #change_colors_stop').on('click', function(event) { 
        jQuery.ajaxSetup({ timeout: 110 }); 
        var id = $(this).attr('id');  
        
        if (id == 'change_colors_start') {
            changeLedStripColorIntervalId = setInterval(ChangeLedStripColor, 1000);
        }
            
        if (id == 'change_colors_stop') {           
            clearInterval(changeLedStripColorIntervalId);  
            color = "red";
            $('#led-strip').css('border-color', 'rgb('+0+','+0+','+0+')');            
        }              
    }); 
});

var ChangeLedStripColor = function() {
    for(i = 0; i <= 255; i++) {
        if(color == "red") {
            $('#led-strip').css('border-color', 'rgb('+i+','+0+','+0+')');
            color = "green";
        } else if(color == "green") {
            $('#led-strip').css('border-color', 'rgb('+0+','+i+','+0+')');
            color = "blue";
        } else { 
            $('#led-strip').css('border-color', 'rgb('+0+','+0+','+i+')');
            color = "red";
        }
    }
};

